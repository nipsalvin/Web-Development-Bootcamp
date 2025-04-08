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
    // console.log("Book data: ", book_data);    
    // Add coverUrl to each book object
    book_data.forEach(book => {
      book.coverUrl = `https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`;
    });
    // console.log("Book data with cover URLs: ", book_data);

    // Pass the cover URL to the EJS template
    res.render("index.ejs", { book_data: book_data});
  } catch (error) {
    console.error(error);
    res.render("index.ejs", { error: error.message });
  }
});

app.get("/add_book", (req, res) => {
  res.render("add_book.ejs");
});

app.post("/add_book", async (req, res) => {
  // This is to handle the form submission for adding a new book
  console.log("Form submitted");
  console.log(req.body);
  const first_name = req.body.bookAuthorFirstName;
  const last_name = req.body.bookAuthorLastName;
  const title = req.body.bookTitle;
  const rating = req.body.bookRating;
  const date_read = req.body.bookDateRead;
  const isbn = req.body.bookIsbn;
  const comments = req.body.bookComments;
  const notes = req.body.bookNotes;

  console.log("First name: ", first_name); 
  console.log("Last name: ", last_name);
  console.log("Title: ", title);
  console.log("Rating: ", rating);
  console.log("Date read: ", date_read);
  console.log("ISBN: ", isbn);
  console.log("Comments: ", comments);
  console.log("Notes: ", notes);
  // Validate the input
  if (!first_name || !last_name || !title || !rating || !date_read || !isbn) {
    console.error("Missing required fields");
    return res.render("add_book.ejs", { error: "Please fill in all required fields." });
  }

  try {
    // Check if the author already exists
    const authorCheck = await db.query(
      `SELECT id FROM author WHERE first_name = $1 AND last_name = $2`,
      [first_name, last_name]
    );
    let authorId;
    if (authorCheck.rows.length > 0) {
      // Author exists, get their ID
      authorId = authorCheck.rows[0].id;
      console.log("Author already exists with ID:", authorId);
    } else {
      // Author does not exist, insert a new author
      const authorResult = await db.query(
        `INSERT INTO author (first_name, last_name)
         VALUES ($1, $2)
         RETURNING id;`,
        [first_name, last_name]
      );
      authorId = authorResult.rows[0].id;
      console.log("New author added with ID:", authorId);
    }
    await db.query(`
      INSERT INTO book (title, rating, date_read, isbn, author_id)
      VALUES ($1, $2, $3, $4, $5);`,
      [title, rating, date_read, isbn, authorId]);
    console.log("Book added successfully!");
    res.redirect("/");
  } catch (err) {
    console.error("Error adding book:", err);
    res.status(500).send("An error occurred while adding the book.");
  };
  // res.render("add_book.ejs");
});

app.post("/delete_book", async (req, res) => {
  // This is to handle the form submission for deleting a book
  console.log("Form submitted");
  console.log(req.body);
  const bookId = req.body.book_id;
  console.log("Book ID: ", bookId);
  try {
    await db.query(`DELETE FROM book WHERE id = $1;`, [bookId]);
    console.log("Book deleted successfully!");
    res.redirect("/");
  } catch (err) {
    console.error("Error deleting book:", err);
    res.status(500).send("An error occurred while deleting the book.");
  };
});

app.get("/book/:id", async (req, res) => {
  const bookId = req.params.id;
  console.log("Book ID: ", bookId);
  try {
    const result = await db.query(`
      SELECT BOOK.*, 
             CONCAT(AUTHOR.first_name, ' ', AUTHOR.last_name) AS author_name
      FROM BOOK
      JOIN AUTHOR ON BOOK.author_id = AUTHOR.id
      WHERE BOOK.id = $1
    `, [bookId]);
    const book_data = result.rows[0];
    book_data.coverUrl = `https://covers.openlibrary.org/b/isbn/${book_data.isbn}-M.jpg`;
    console.log("Book data: ", book_data);
    res.render("book.ejs", { book_data: book_data });
  } catch (error) {
    console.error(error);
    res.render("book.ejs", { error: error.message });
  }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
