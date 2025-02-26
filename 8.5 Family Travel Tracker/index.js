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

let currentUserId = 1;

let users = [
  { id: 1, name: "Nips", color: "teal" },
  { id: 2, name: "Jack", color: "powderblue" },
];

async function checkVisited() {
  const result = await db.query(
    "SELECT country_code FROM visited_countries JOIN users ON users.id = user_id WHERE user_id = $1; ",
    [currentUserId]
  );
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  console.log('Function checkVisisted ' + currentUserId)
  return countries;
}

async function getCurrentUser() {
  const result = await db.query("SELECT * FROM users ORDER BY name ASC;");
  users = result.rows;
  console.log(`Function getCurrentUser`, currentUserId)
  const currentUser = users.find((user) => user.id == currentUserId);
  return currentUser;
}

app.get("/", async (req, res) => {
  const countries = await checkVisited();
  const currentUser = await getCurrentUser();
  // console.log(currentUser)
  res.render("index.ejs", {
    countries: countries,
    total: countries.length,
    users: users,
    color: currentUser.color,
  });
});
app.post("/add", async (req, res) => {
  const input = req.body["country"];
  console.log(input);

  try {
    const result = await db.query(
      "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%';",
      [input.toLowerCase()]
    );

    if (result.rows.length === 0){
      throw new Error("Country does not exist, try again.")
    };

    if (result.rows.length > 1){
      throw new Error(`Multiple countries that contain '${input}', try again.`)
    };

    console.log(result.rows);
    const data = result.rows[0];
    const countryCode = data.country_code;
    console.log(countryCode);
    try {
      await db.query(
        "INSERT INTO visited_countries (country_code, user_id) VALUES ($1, $2)",
        [countryCode, currentUserId]
      );

      res.redirect("/");
    } catch (err) {
      console.log(err);
      const countries = await checkVisited();
      res.render("index.ejs", {
        countries: countries,
        total: countries.length,
        error: "Error inserting country, try again.",
      });
    }
  } catch (err) {
    console.log(err);
    const countries = await checkVisited();
    const currentUser = await getCurrentUser();
    console.log('Error is ' + err.message)
    res.render("index.ejs", {
      users: users,
      color: currentUser.color,
      countries: countries,
      total: countries.length,
      error: err.message,
      }
    );
  }
});
app.post("/user", async (req, res) => {
  if (req.body.add === "new") {
    res.render("new.ejs");
  } else {
    currentUserId = req.body.user;
    res.redirect("/");
  }
});

app.post("/new", async (req, res) => {
  //Hint: The RETURNING keyword can return the data that was inserted.
  //https://www.postgresql.org/docs/current/dml-returning.html
  const name = req.body.name;
  const color = req.body.color;
  try {
    const result = await db.query(
      "INSERT INTO users (name, color) VALUES($1, $2) RETURNING *",
      [name, color]
    );
    console.log(result.rows);
    currentUserId = result.rows[0].id;
    res.redirect("/");

  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
