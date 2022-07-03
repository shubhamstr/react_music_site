import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { useState, useRef, useEffect } from "react";

const Login = (props) => {
  const userRef = useRef();
  const errRef = useRef();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState(false);

  const onchange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const login = () => {
    // if (email === "user1@gmail.com" && password === "user1") {
    //   props.setIsAuth(true);
    //   localStorage.setItem("react-music-site-login-flag", true);
    // } else {
    //   alert("Email & Password is wrong");
    // }
  };

  useEffect(() => {
    userRef.current.focus();
  }, [email, password])
  

  return (
    <Container fluid>
      <Row>
        <Col xs="4" className="offset-md-4 mt-5">
          <Card className="p-5 bg-info">
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} area-live="assertive">{errMsg}</p>
            <h2 className="text-center">Login</h2>
            <hr />
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  ref={userRef}
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
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
