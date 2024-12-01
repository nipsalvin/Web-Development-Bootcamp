const fs = require("fs");

// fs.writeFile syntax:
//fs.writeFile can write or create a file
// fs.writeFile(filename, data, options, callback)
fs.writeFile("message.txt", "Hello from NodeJS!", (err) => {
    if (err) throw err;
    console.log(err);
})