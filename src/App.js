/* eslint-disable no-unused-vars */
import "./App.css";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { useState, useEffect } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    let flag = localStorage.getItem("react-music-site-login-flag");
    if(flag){
      setIsAuth(flag);
    }
  }, [])
  return (
    <>
      <Container fluid>
        {isAuth && isAuth ? <Dashboard /> :  <Login setIsAuth={setIsAuth}/>}
      </Container>
    </>
  );
}

export default App;
