import React from "react";
import { useState } from "react";
import axios from "axios";

const REGISTER_URL = "./register";
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const onchange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  axios.create({
    baseURL: "http://localhost:3600",
  });

  const register = async (e) => {
    e.preventDefault();
    try {
      const resp = axios.post(
        REGISTER_URL,
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(resp.data);
      const { errMsg, successMsg } = resp.data;
      if (successMsg) {
        setSuccess(true);
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
              <p className="text-white">Success!</p>
              <div className="text-center">
                <button type="submit" class="btn btn-primary">
                  Login
                </button>
              </div>
            </div>
          ) : (
            <div className="card p-5 bg-info">
              <p className="text-danger text-center">Error: {errMsg}</p>
              <h2 className="text-center">Register</h2>
              <hr />
              <form>
                <div class="mb-3">
                  <label for="email" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    onChange={onchange}
                    class="form-control"
                    id="email"
                    name="email"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" class="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    onChange={onchange}
                    class="form-control"
                    id="password"
                    name="password"
                  />
                </div>
                <div className="text-center">
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={register}
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
