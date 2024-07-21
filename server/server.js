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
app.use('/public',express.static('public/uploads'));

const port = process.env.PORT || 3600;

app.get('/', (req, res) => {
  res.send(`server is running`)
})



const authRouter = require('./routes/authRouter');
app.use("/auth", authRouter);


const songsRouter = require('./routes/songsRouter');
app.use("/songs", songsRouter);




app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})