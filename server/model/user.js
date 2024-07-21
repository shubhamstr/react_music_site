const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const joi = require('joi');
// const passwordComplexity = require('joi-password-complexity');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});

const key = `music-site`;

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({_id: this._id, firstName: this.firstName, email: this.email }, key, {expiresIn: "1d"});
    return token;
}

const User = mongoose.model("user", userSchema);

const validateRegister = (data) => {
    const schema = joi.object({
        firstName: joi.string().required().label("firstName"),
        lastName: joi.string().required().label("lastName"),
        email: joi.string().email().required().label("email"),
        password: joi.string().required().label("password")
    });
    return schema.validate(data);
}

const validateLogin = (data) => {
    const schema = joi.object({
        email: joi.string().email().required().label("Email"),
        password: joi.string().required().label("password")
    });
    return schema.validate(data);
}

module.exports = {User, validateRegister, validateLogin};