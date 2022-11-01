/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Navbar from "./layout/Navbar";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const Dashboard = (props) => {
  const history = useNavigate();
  const [user, setUser] = useState("")

  useEffect(() => {
    const token = localStorage.getItem("rest-music-site");
    if (token) {
      var decoded = jwt_decode(token);
      console.log(decoded);
      setUser(decoded.firstName);
    } else {
      localStorage.removeItem("rest-music-site");
      props.setIsAuth(false);
      history("/");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <div className="container">
      <Navbar isAuth={props.isAuth} user={user} history={history} />
    </div>
  );
};

export default Dashboard;
