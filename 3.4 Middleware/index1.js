import express from "express";
import bodyParser from 'body-parser';
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded(
  {extended:true}
));

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post('/submit', (req, res) => {
  var answer = req.body.street + req.body.pet;
  console.log('Your band name is: ' + answer);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})