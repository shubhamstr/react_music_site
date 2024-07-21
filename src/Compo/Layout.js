import React from "react"
import Header from "./Header"
import Footer from "../Compo/Footer"
import { Container } from "reactstrap"

const Layout = ({ children }) => {
  return (
    <Container fluid className="px-0">
      <Header />
      {children}
      <Footer />
    </Container>
  )
}

export default Layout
