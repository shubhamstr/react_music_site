import React from "react"
import Navbar from "../Compo/Navbar"
import Footer from "../Compo/Footer"
import { Container, Row, Col } from "reactstrap"

const Layout = ({ children }) => {
  return (
    <Container>
      <Row>
        <Col className="bg-light border" xs="12">
          <Navbar />
          <div className="content">{children}</div>
          <Footer />
        </Col>
      </Row>
    </Container>
  )
}

export default Layout
