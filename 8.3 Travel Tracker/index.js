import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import dotenv from "dotenv";

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

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// GET home page
app.get("/", async (req, res) => {
  //Write your code here.
  const countryCodes = await db.query("SELECT country_code FROM visited_countries");
  let countries = [];
  countryCodes.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  console.log(countries);
  res.render("index.ejs", { countries: countries, total: countries.length });
});
// If you end the database connection, the server will no longer be able to access the database
// db.end();

app.post("/add", async (req, res) => {
  const input = req.body["country"].trim();
  debugger
  const result = await db.query(
    "SELECT country_code FROM countries WHERE country_name = '%' || $1 || '%'",
    [input]
  );
  console.log(`input is ${input}`);
  console.log(`result is ${result.rows}`);

  if (result.rows.length !== 0) {
    const country_code = result.rows[0].country_code;
    console.log(country_code)
    await db.query(
      "INSERT INTO visited_countries (country_code) VALUES($1)",
      [country_code]
    );
    res.redirect("/");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
