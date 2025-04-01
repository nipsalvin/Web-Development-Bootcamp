import axios from "axios";
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import pg from "pg";

dotenv.config();

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "book_notes",
  password: process.env.POSTGRES_PW,
  port: 5432
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const result = await db.query(`
      SELECT BOOK.*, 
             CONCAT(AUTHOR.first_name, ' ', AUTHOR.last_name) AS author_name
      FROM BOOK
      JOIN AUTHOR ON BOOK.author_id = AUTHOR.id
      ORDER BY BOOK.id ASC
    `);
    const book_data = result.rows;
    console.log("Book data: ", book_data);
    const isbn = book_data[1].isbn; // Example ISBN
    console.log("ISBN: ", isbn);

    // Construct the cover URL
    const coverUrl = `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`;
    console.log("Cover URL:", coverUrl);
    console.log("Book data with cover URLs: ", book_data);

    // Add coverUrl to each book object
    book_data.forEach(book => {
      book.coverUrl = `https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`;
    });

    // Pass the cover URL to the EJS template
    res.render("index.ejs", { book_data: book_data, coverUrl: coverUrl });
  } catch (error) {
    console.error(error);
    res.render("index.ejs", { error: error.message });
  }
});

app.get("/add-book", (req, res) => {
  res.render("add-book.ejs");
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
