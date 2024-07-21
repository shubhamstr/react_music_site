import React from "react"
import Header from "./Header"
import Footer from "../Compo/Footer"
import { Container, Row, Col } from "reactstrap"

const Layout = ({ children }) => {
  return (
    <Container fluid>
      <Row>
        <Col className="bg-light border" xs="12">
          <Header />
          {children}
          <Footer />
        </Col>
      </Row>
    </Container>
  )
}

export default Layout
