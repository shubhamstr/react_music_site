import React from "react";
import Navbar from "../Compo/Navbar";
import Footer from "../Compo/Footer";

const Layout = ({ children }) => {
  return (
    <div className="container-fluid px-0">
      <Navbar />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
