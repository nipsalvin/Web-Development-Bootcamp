import express from "express";
const app = express();
const port = 3000;

app.get('/', (req, res) =>{
    // console.log(req.rawHeaders);
    res.send("This is an GET request for <h1>Hello World</h1>");
})

app.get("/about", (req, res) => {
    // console.log(req.rawHeaders);
    res.send("This is an GET request for <h1>About</h1>");
})

app.get("/contact", (req, res) => {
    // console.log(req.rawHeaders);
    res.send("This is an GET request for <h1>Contact</h1>");
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})