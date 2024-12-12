import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    const today = new Date();
    const day = today.getDay();

    console.log(day)
    let type = 'a weekday';
    let adv = "It's time to work hard!";

    if (day === 0 || day === 6) {
        type = "the Weekend";
        adv = "It's time to have some fun";
    }

    res.render("index.ejs", {
        dateType:type,
        advice:adv,
    });

    // res.sendFile( __dirname + '/views/index.html');
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})