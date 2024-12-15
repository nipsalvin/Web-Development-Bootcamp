import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.get("/post_1", (req, res) => {
    res.render("post_1.ejs");
})

app.get("/post_2", (req, res) => {
    res.render("post_2.ejs");
})

app.get("/post_3", (req, res) => {
    res.render("post_3.ejs");
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})