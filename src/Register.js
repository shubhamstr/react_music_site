import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
              <form>
                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    onChange={onchange}
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    aria-describedby="firstNameHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    onChange={onchange}
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    aria-describedby="lastNameHelp"
                  />
                </div>
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
                    onClick={register}
                  >
                    Register
                  </button>
                  <p className="mt-3 mb-0">Already have an account</p>
                  <p>
                    <Link to="/login" className="text-white">
                      Click to Login
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
