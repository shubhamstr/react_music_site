/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Navbar from "../layout/Navbar";
import { useNavigate } from "react-router-dom";

const Dashboard = (props) => {
  const history = useNavigate();
  const [user, setUser] = useState("")
  
  return (
    <div className="container-fluid px-0">
      <Navbar isAuth={props.isAuth} user={user} history={history} />
    </div>
  );
};

export default Dashboard;
