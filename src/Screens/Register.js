/* eslint-disable no-unused-vars */
import React from "react"
import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
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
import { SERVER_URL } from "../constants"

const REGISTER_URL = "./auth/register"
axios.defaults.baseURL = SERVER_URL

const Register = (props) => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [errMsg, setErrMsg] = useState("")
  const [successMsg, setSuccessMsg] = useState("")
  const [success, setSuccess] = useState(false)

  const onchange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value)
    } else if (e.target.name === "password") {
      setPassword(e.target.value)
    } else if (e.target.name === "firstName") {
      setFirstName(e.target.value)
    } else if (e.target.name === "lastName") {
      setLastName(e.target.value)
    }
  }

  const register = async (e) => {
    e.preventDefault()
    try {
      const resp = await axios.post(REGISTER_URL, {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
      })
      console.log(resp.data)
      const { errMsg, successMsg } = resp.data
      if (successMsg) {
        setSuccess(true)
        setSuccessMsg(successMsg)
      } else {
        setErrMsg(errMsg)
      }
    } catch (err) {
      if (!err?.resp) {
        setErrMsg("No Server Response")
      }
    }
  }

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
              width: "25rem",
            }}
          >
            <CardBody>
              <CardTitle tag="h3" className="text-center">
                Register
              </CardTitle>
              {/* <CardSubtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </CardSubtitle> */}
            </CardBody>
            <CardBody>
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
                <Row>
                  <Col md="12" className="text-center">
                    <Button color="primary" onClick={register}>
                      Register
                    </Button>
                    <CardText>Already have an account</CardText>
                    <Link to="/login" className="">
                      Click to Login
                    </Link>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Register
