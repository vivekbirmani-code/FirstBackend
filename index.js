require('dotenv').config()
const express = require('express');
const app = express();

const port = 4000;  // This line will automatically go to .env file after running the code

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/twitter', (req, res) => {
  res.send('hiteshdotcom');
});

app.get('/login', (req, res) => {
  res.send('<h1>Please login at chai aur code</h1>');
});

app.get('/youtube', (req, res) => {
  res.send("<h2>Chai aur Code</h2>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});

