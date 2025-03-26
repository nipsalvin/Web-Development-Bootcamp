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

app.get("/", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM BOOK ORDER BY id ASC");
    const book_data = result.rows;
    console.log("Book data: ", book_data);
    const isbn = book_data[0].isbn; // Example ISBN
    console.log("ISBN: ", isbn);

    // Construct the cover URL
    const coverUrl = `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`;
    console.log("Cover URL:", coverUrl);

    // Pass the cover URL to the EJS template
    res.render("index.ejs", { book_data: { coverUrl } });
  } catch (error) {
    console.error(error);
    res.render("index.ejs", { error: error.message });
  }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
