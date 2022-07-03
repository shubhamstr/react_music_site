/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Navbar from "./layout/Navbar";

const Dashboard = (props) => {
  const [user, setUser] = useState("")

  useEffect(() => {
    const userName = localStorage.getItem("rest-music-site");
    if (userName) {
      setUser(userName);
    }
  }, [])
  
  return (
    <div className="container">
      <Navbar isAuth={props.isAuth} user={user} />
    </div>
  );
};

export default Dashboard;
