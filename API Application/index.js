// 1. Import express and axios
import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import dotenv from "dotenv"

dotenv.config();

// 2. Create an express app and set the port number.
const app = express();
const port = 3000;
const URL = "https://api.spotify.com/v1";

// 4. Create parameters/headers to be parsed with the request
const bearerToken = process.env.SPOTIFY_TOKEN
const config = {
  headers: { Authorization: `Bearer ${bearerToken}` },
};

// 3. Use the public folder for static files.
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let song;
let singer;
let background;
let songLink;

// 5. Use axios to get a random Track and pass it to index.ejs to display the Singer and the Name of the Track.
app.get("/", async (req, res) => {
    try {
        // Using a predefined artist_id to get a random track
        const artist_id = "7KY9NaOVRmptl8vlpVomi6"
        // Using the top-tracks endpoint to get the top tracks of the artist
        const endpoint = URL + "/artists/" + artist_id + "/top-tracks"
        console.log(endpoint);
        
        const result = await axios.get(endpoint, config);
        const randomIndex = Math.floor(Math.random() * result.data.tracks.length);
        console.log(result.data.tracks[randomIndex].external_urls.spotify);

        song = result.data.tracks[randomIndex].name
        singer = result.data.tracks[randomIndex].artists[0].name
        background = result.data.tracks[randomIndex].album.images[0].url
        songLink = result.data.tracks[randomIndex].external_urls.spotify
        
        res.render("index.ejs", { 
          song: song, 
          singer: singer, 
          background: background, 
          songLink: songLink 
        });
    } catch (error) {
        console.log(error.response);
        res.status(500);
    }
});

// 7. Listen on your predefined port and start the server.
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
