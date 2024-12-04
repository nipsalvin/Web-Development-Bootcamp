// Import the express
import express from 'express';
// Create app from express
const app = express();
// Call method 'listen'
app.listen(3000,() => {
    console.log('Server is running on port 3000');
});
