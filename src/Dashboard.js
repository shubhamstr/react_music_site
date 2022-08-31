/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Main from "./Main";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const Dashboard = (props) => {
  const history = useNavigate();
  const [user, setUser] = useState("")
  const [title1, setTitle1] = useState("Featured title2")

  const getData = () => {
    var t1 = prompt('Enter Title1');
    setTitle1(t1)
  }

  useEffect(() => {
    const token = localStorage.getItem("rest-music-site");
    if (token) {
      var decoded = jwt_decode(token);
      console.log(decoded);
      setUser(decoded.userName);
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
      <Main title1={title1} getData={getData} />
      <Footer isAuth={props.isAuth} user={user} history={history} />
    </div>
  );
};

export default Dashboard;
