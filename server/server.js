require('dotenv').config();

const express = require('express');
var cors = require('cors');
var app = express();
const {User, validateRegister, validateLogin} = require('./model/user');
const bcrypt = require('bcrypt');

const connection = require('./db');

// databse connection
connection();

// middlewares 
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3500',
}));

const port = process.env.PORT || 3600;

app.get('/', (req, res) => {
  res.send(`Example app listening on port http://localhost:${port}`)
})


app.post('/register', async (req, res) => {
  // console.log(req.body);
  try {
    const {error} = validateRegister(req.body);
    if (error) {
        return res.send({errorMsg: error.details[0].message});
    }

    const salt = await bcrypt.genSalt(Number(process.env.SALT));

    const hashPassword = await bcrypt.hash(req.body.password, salt);

    await new User({...req.body, password: hashPassword}).save();
    res.status(201).send({successMsg: "User Registered successfully"})
  } catch (error) {
    res.status(500).send({ errorMsg: error });
  }
});

app.post('/login', async (req, res) => {
  // console.log(req.body);
  try {
    const {error} = validateLogin(req.body);
    if (error) {
        return res.send({errorMsg: error.details[0].message});
    }

    const user = await User.findOne({email: req.body.email});
    if (!user) {
        return res.send({errorMsg: "Invalid Email or Password"})
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
        return res.send({errorMsg: "Invalid Email or Password"})
    }

    const token = user.generateAuthToken();
    res.status(200).send({data:token, successMsg: "Logged in successfully"});
  } catch (error) {
    res.send({ errorMsg: error });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})