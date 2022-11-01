import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";

const REGISTER_URL = "./register";
axios.defaults.baseURL = "http://localhost:3600";

const Register = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const onchange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    } else if (e.target.name === "firstName") {
      setFirstName(e.target.value);
    } else if (e.target.name === "lastName") {
      setLastName(e.target.value);
    }
  };

  const register = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post(REGISTER_URL, {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
      });
      console.log(resp.data);
      const { errMsg, successMsg } = resp.data;
      if (successMsg) {
        setSuccess(true);
        setSuccessMsg(successMsg);
      } else {
        setErrMsg(errMsg);
      }
    } catch (err) {
      if (!err?.resp) {
        setErrMsg("No Server Response");
      }
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 offset-md-4 mt-5">
          {success ? (
            <div className="card p-5 bg-info">
              <p className="text-white text-center">{successMsg}!</p>
              <div className="text-center">
                <Link to="/login" className="btn btn-primary text-white">
                  Login
                </Link>
              </div>
            </div>
          ) : (
            <div className="card p-5 bg-info">
              <p className="text-danger text-center">{errMsg}</p>
              <h2 className="text-center">Register</h2>
              <hr />
              <Form>
                <FormGroup floating>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    type="text"
                    onChange={onchange}
                  />
                  <Label for="firstName">First Name</Label>
                </FormGroup>{" "}
                <FormGroup floating>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    type="text"
                    onChange={onchange}
                  />
                  <Label for="lastName">Last Name</Label>
                </FormGroup>{" "}
                <FormGroup floating>
                  <Input
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    type="email"
                    onChange={onchange}
                  />
                  <Label for="email">Email Address</Label>
                </FormGroup>{" "}
                <FormGroup floating>
                  <Input
                    id="password"
                    name="password"
                    placeholder="Password"
                    type="password"
                    onChange={onchange}
                  />
                  <Label for="password">Password</Label>
                </FormGroup>{" "}
                <div className="text-center">
                  <Button color="primary" onClick={register}>Register</Button>
                  <p className="mt-3 mb-0">Already have an account</p>
                  <p>
                    <Link to="/login" className="text-white">
                      Click to Login
                    </Link>
                  </p>
                </div>
              </Form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
