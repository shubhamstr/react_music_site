const express = require('express');
var cors = require('cors');
var app = express();

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3500',
}));

const port = 3600

const users = [];

app.get('/', (req, res) => {
  res.send(`Example app listening on port http://localhost:${port}`)
})


app.post('/register', async (req, res) => {
  // console.log(req.body);
  try {
    const user = { email: req.body.email, password: req.body.password };
    users.push(user);
    res.status(201).send({ successMsg: 'User Registered Sucessfully' });
  } catch (error) {
    res.send({ errorMsg: error });
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})