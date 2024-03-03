require('dotenv').config()
const express = require('express');
const app = express();
// const port = 3000;
                     
app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/hi', (req, res) => {
  res.send('Hello API!');
});

app.get('/login', (req, res) => {
  res.send('<h1>Please login with email</h1>');
});

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// })
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
})