/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const LOGIN_URL = "./login";
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
    console.log(resp);
    console.log(resp.data);
    const { errorMsg, successMsg, data } = resp.data;
    if (successMsg) {
      localStorage.setItem("rest-music-site", data);
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

  useEffect(() => {
    const token = localStorage.getItem("rest-music-site");
    if (token) {
      props.setIsAuth(true);
      history("/dashboard");
    } else {
      // localStorage.removeItem("rest-music-site");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 offset-md-4 mt-5">
          <div className="card p-5 bg-info">
            <p className="text-danger text-center">{errMsg}</p>
            <h2 className="text-center">Login</h2>
            <hr />
            <form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  onChange={onchange}
                  className="form-control"
                  id="email"
                  name="email"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  onChange={onchange}
                  className="form-control"
                  id="password"
                  name="password"
                />
              </div>
              <div className="text-center">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={login}
                >
                  Login
                </button>
                <p className="mt-3 mb-0">Don't have an account</p>
                <p>
                  <Link to="/register" className="text-white">
                    Click to Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
