/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import Swal from "sweetalert2";

const LOGIN_URL = "./auth/login";
const VERIFY_URL = "./auth/verify-url";
axios.defaults.baseURL = "http://localhost:3600";
const Login = (props) => {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errMsg, setErrMsg] = useState("");

  const onchange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const login = async (e) => {
    e.preventDefault();
    const resp = await axios.post(LOGIN_URL, {
      email: email,
      password: password,
    });
    // console.log(resp);
    console.log(resp.data);
    const { errorMsg, successMsg, data } = resp.data;
    if (successMsg) {
      localStorage.setItem("music-site-token", data);
      props.setIsAuth(true);
      history("/dashboard");
    } else {
      setErrMsg(errorMsg);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorMsg,
      });
    }
  };

  const verifyUser = async (email) => {
    // console.log(email)
    const resp = await axios.post(VERIFY_URL, {
      email: email,
    });
    // console.log(resp);
    // console.log(resp.data);
    const { errorMsg, successMsg, data } = resp.data;
    if (successMsg) {
      props.setIsAuth(true);
      history("/dashboard");
    } else {
      setErrMsg(errorMsg);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorMsg,
      });
      localStorage.removeItem("music-site-token");
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("music-site-token");
    if (token) {
      var decoded = jwt_decode(token);
      verifyUser(decoded.email);
      // props.setIsAuth(true);
      // history("/dashboard");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 offset-md-4 mt-5">
          <div className="card p-5 card_bg_color">
            <p className="text-danger text-center">{errMsg}</p>
            <h2 className="text-center">Login</h2>
            <hr />

            <Form>
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
                <Button color="primary" onClick={login}>Login</Button>
                <p className="mt-3 mb-0">Don't have an account</p>
                <p>
                  <Link to="/register" className="">
                    Click to Register
                  </Link>
                </p>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
