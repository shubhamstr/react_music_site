/* eslint-disable no-unused-vars */
import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import jwt_decode from "jwt-decode"
import { Link, useNavigate } from "react-router-dom"
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardBody,
  CardSubtitle,
  CardText,
  CardLink,
} from "reactstrap"
import Swal from "sweetalert2"

const LOGIN_URL = "./auth/login"
const VERIFY_URL = "./auth/verify-url"
axios.defaults.baseURL = "http://localhost:3600"
const Login = (props) => {
  const history = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [errMsg, setErrMsg] = useState("")

  const onchange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value)
    } else if (e.target.name === "password") {
      setPassword(e.target.value)
    }
  }

  const login = async (e) => {
    e.preventDefault()
    const resp = await axios.post(LOGIN_URL, {
      email: email,
      password: password,
    })
    // console.log(resp);
    console.log(resp.data)
    const { errorMsg, successMsg, data } = resp.data
    if (successMsg) {
      localStorage.setItem("music-site-token", data)
      props.setIsAuth(true)
      history("/dashboard")
    } else {
      setErrMsg(errorMsg)
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorMsg,
      })
    }
  }

  const verifyUser = async (email) => {
    // console.log(email)
    const resp = await axios.post(VERIFY_URL, {
      email: email,
    })
    // console.log(resp);
    // console.log(resp.data);
    const { errorMsg, successMsg, data } = resp.data
    if (successMsg) {
      props.setIsAuth(true)
      history("/dashboard")
    } else {
      setErrMsg(errorMsg)
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorMsg,
      })
      localStorage.removeItem("music-site-token")
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("music-site-token")
    if (token) {
      var decoded = jwt_decode(token)
      verifyUser(decoded.email)
      // props.setIsAuth(true);
      // history("/dashboard");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container className="bg-dark1 doc_body" fluid>
      <Row>
        <Col
          md={{
            offset: 4,
            size: 4,
          }}
          className="d-flex justify-content-center align-items-center vh-100"
        >
          <Card
            style={{
              width: "18rem",
            }}
          >
            <CardBody>
              <CardTitle tag="h3" className="text-center">Login</CardTitle>
              {/* <CardSubtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </CardSubtitle> */}
            </CardBody>
            <CardBody>
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
                <Button color="primary" onClick={login}>
                  Login
                </Button>
                <CardText>Don't have an account</CardText>
                <Link to="/register" className="">
                  Click to Register
                </Link>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Login
