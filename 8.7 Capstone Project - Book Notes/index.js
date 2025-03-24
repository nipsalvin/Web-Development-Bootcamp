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
  try{
    // TODO get book data from OpenLibrary API using inputted ISBN or name
    const isbn = 9780385533225;
    const url = "https://openlibrary.org/isbn/"+isbn+".json";
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    const result = response.data;
    res.render("index.ejs", { book_data: result });
  } catch (error) {}
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
  