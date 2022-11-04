/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";

const Navbar = () => {
  const [user, setUser] = useState("")

  useEffect(() => {
    const token = localStorage.getItem("rest-music-site");
    if (token) {
      var decoded = jwt_decode(token);
      // console.log(decoded);
      setUser(decoded.firstName);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar_bg_color">
      <div className="container-fluid">
        <Link to="/dashboard" className="navbar-brand">
          React Music Site
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/dashboard" className="btn">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="btn">
                About
              </Link>
            </li>
          </ul>

          <form className="d-flex ms-5">
            <p className="mb-0 mx-2 mt-1">
              <BsFillPersonFill className="mx-1" />
              {user}
            </p>
            <Link
              to="/logout"
              className="btn btn-outline-info text-dark btn-sm"
            >
              Log Out
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
