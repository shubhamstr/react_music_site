import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { useState } from "react";
import axios from "../api/axios";

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

  const login = async (e) => {
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
        setErrMsg('No Server Response');
      }
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col xs="4" className="offset-md-4 mt-5">
          {success ? (
            <Card className="p-5 bg-info">
              <p>Success!</p>
              <div className="text-center">
                <Button variant="primary" type="button" onClick={login}>
                  Login
                </Button>
              </div>
            </Card>
          ) : (
            <Card className="p-5 bg-info">
              <p>{errMsg}</p>
              <h2 className="text-center">Register</h2>
              <hr />
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    defaultValue={email}
                    onChange={onchange}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    defaultValue={password}
                    onChange={onchange}
                  />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
                <div className="text-center">
                  <Button variant="primary" type="button" onClick={login}>
                    Login
                  </Button>
                </div>
              </Form>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
