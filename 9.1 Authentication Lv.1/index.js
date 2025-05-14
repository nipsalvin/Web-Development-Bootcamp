import bodyParser from "body-parser";
import express from "express";
import dotenv from "dotenv";
import pg from "pg";

dotenv.config();

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "secrets",
  password: process.env.POSTGRES_PW,
  port: 5432,
})

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.post("/login", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  try {
    // Check if the user exists
    const result = await db.query("SELECT * FROM users WHERE email = $1", [email]);

    // If the user exists, check the password
    if (result.rows.length > 0) {
      const user = result.rows[0];
      // Check if the password is correct
      if (user.password === password) {
        console.log("Login successful");
        res.render("secrets.ejs");
      } else {
        console.log("Incorrect password");
        res.send("Incorrect Username or Password");
      }
    }
    else {
      console.log("User not found");
      res.send("User not found");
    }
  } catch (err) {
    console.log(err);
  }
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  // Check if the user already exists
  try {
    const existingUser = await db.query("SELECT * FROM users WHERE email = $1", [email]);
    if (existingUser.rows.length > 0) {
      console.log("User already exists");
      res.send("User already exists");
    } else {
      // If the user doesn't exist, insert them into the database
      const result = await db.query(
          "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *",
          [email, password]
        );
        res.render("secrets.ejs");
      }
  } catch (err) {
    console.log(err);
  }
  });
  
app.get("/secrets", async (req, res) => {
  try {
    res.render("secrets.ejs");
  } catch (err) {
    console.log(err);
  }
});

app.post("/login", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
