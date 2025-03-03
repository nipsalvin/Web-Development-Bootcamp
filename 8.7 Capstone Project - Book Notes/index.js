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
  database: "world",
  password: process.env.POSTGRES_PW,
  port: 5432
});
db.connect();



app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
  