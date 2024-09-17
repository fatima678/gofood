// const express = require('express')
// const app = express()
// const port = 4000
// const mongoDB = require("./db")
// mongoDB()

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

const express = require('express');
const app = express();
const port = 4000;
const mongoDB = require('./db');

// Immediately invoked function to handle async connection
(async () => {
  await mongoDB();
})();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
