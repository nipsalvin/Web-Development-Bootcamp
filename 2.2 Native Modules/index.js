const fs = require("fs");

// importing only readFile and writeFile from fs
// import { readFile, writeFile } from "fs";

// fs.writeFile syntax:
//fs.writeFile can write or create a file
// fs.writeFile(filename, data, options, callback)
var data = "Hello from NodeJS!";
fs.writeFile("message.txt", data, (err) => {
    if (err) throw err;
    console.log(data);
})

// fs.readFile syntax:
//fs.readFile can read a file
// fs.readFile(filename, 'utf8', callback (which is either err or data))
fs.readFile("message.txt", 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Reading from file: ' + data);
});