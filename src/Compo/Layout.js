import React from 'react';
import Navbar from "../Compo/Navbar";

const Layout = ({children}) => {
  return (
    <div className="container-fluid px-0">
      <Navbar />
      {children}
    </div>
  )
}

export default Layout