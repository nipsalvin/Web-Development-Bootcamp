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
  database: "permalist",
  password: process.env.POSTGRES_PW,
  port: 5432
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [
  { id: 1, title: "Buy milk" },
  { id: 2, title: "Finish homework" },
];

app.get("/", async (req, res) => {
  // This request is supposed to render the list of items
  try {
    const result = await db.query("SELECT * FROM ITEMS ORDER BY id ASC");
    // console.log(result);
    items = result.rows;
  } catch (err) {
    console.log(err);
  }
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: items,
  });
});

app.post("/add", async (req, res) => {
  // This request is supposed to handle adding a new item to the list
  const item = req.body.newItem;
  try {
    await db.query("INSERT INTO items (title) VALUES ($1)", [item]);
  } catch (err) {
    console.log(err);
  }
  res.redirect("/");
});

app.post("/edit", async (req, res) => {
  // This request is supposed to handle editing an item from the list
  const id = req.body.updatedItemId;
  const item = req.body.updatedItemTitle;
  console.log(`id: `, id);
  console.log(`item: `, item);
  try {
    await db.query("UPDATE items SET title = ($1) WHERE id = $2", [item, id]);
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
});

app.post("/delete", async (req, res) => {
  // This request is supposed to handle deleting an item from the list
  const id = req.body.deleteItemId;
  console.log(id);
  try{
    await db.query("DELETE FROM items WHERE id = $1", [id]);
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
