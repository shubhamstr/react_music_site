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
    const user = { email: req.body.email, password: req.body.password, userName: req.body.userName };
    users.push(user);
    res.status(201).send({ successMsg: 'User Registered Sucessfully' });
  } catch (error) {
    res.send({ errorMsg: error });
  }
});

app.post('/login', async (req, res) => {
  // console.log(req.body);
  try {
    let result = false;
    let userNameLogin = "";
    users.map((val) => {
      const { email, password, userName } = val;
      if (email === req.body.email && password === req.body.password){
        result = true;
        userNameLogin = userName;
      }
      return '';
    });
    if (result) {
      res.status(201).send({ successMsg: `Welcome ${req.body.email}`, data: userNameLogin });
    } else {
      res.send({ errMsg: `User Not Found` });
    }
  } catch (error) {
    res.send({ errorMsg: error });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})