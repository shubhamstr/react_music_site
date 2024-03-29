const express = require("express");
const router = express.Router();
const { User, validateRegister, validateLogin } = require("../model/user");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
  // console.log(req.body);
  try {
    const { error } = validateRegister(req.body);
    // console.log(error);
    if (error) {
      return res.send({ errorMsg: error.details[0].message });
    }

    const salt = await bcrypt.genSalt(Number(process.env.SALT));

    const hashPassword = await bcrypt.hash(req.body.password, salt);
    // console.log(hashPassword);
    const result = await new User({
      ...req.body,
      password: hashPassword,
    }).save();
    console.log(result);

    res.send({ successMsg: "User Registered successfully" });
  } catch (error) {
    res.status(500).send({ errorMsg: error });
  }
});

router.post("/login", async (req, res) => {
  // console.log(req.body);
  try {
    const { error } = validateLogin(req.body);
    if (error) {
      return res.send({ errorMsg: error.details[0].message });
    }

    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.send({ errorMsg: "Invalid Email or Password" });
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.send({ errorMsg: "Invalid Email or Password" });
    }

    const token = user.generateAuthToken();
    res.status(200).send({ data: token, successMsg: "Logged in successfully" });
  } catch (error) {
    res.send({ errorMsg: error });
  }
});

router.post("/verify-url", async (req, res) => {
  // console.log(req.body);
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.send({ errorMsg: "User Not Found" });
    }

    res.status(200).send({ successMsg: "User Found" });
  } catch (error) {
    res.send({ errorMsg: error });
  }
});

module.exports = router;
