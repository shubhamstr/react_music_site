require('dotenv').config();

const express = require('express');
var cors = require('cors');
var app = express();

const connection = require('./db');

// databse connection
connection();

// middlewares 
app.use(express.json());
app.use(cors({
  origin: process.env.BASE_URL,
}));

const port = process.env.PORT || 3600;

app.get('/', (req, res) => {
  res.send(`Example app listening on port http://localhost:${port}`)
})

const authRouter = require('./routes/authRouter');

app.use("/auth", authRouter);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})