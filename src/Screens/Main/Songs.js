import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import ReactPlayer from "react-player";
import {
  ListGroup,
  ListGroupItem,
  Input,
  Label,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";

const SONGS_URL = "./songs/get-songs";
axios.defaults.baseURL = "http://localhost:3600";
const Songs = () => {

  const getSongs = async (email) => {
    // console.log(email)
    const resp = await axios.get(SONGS_URL);
    // console.log(resp);
    console.log(resp.data);
    const { errorMsg, successMsg, data } = resp.data;
    // if (successMsg) {
    //   props.setIsAuth(true);
    //   history("/dashboard");
    // } else {
    //   setErrMsg(errorMsg);
    //   Swal.fire({
    //     icon: "error",
    //     title: "Oops...",
    //     text: errorMsg,
    //   });
    //   localStorage.removeItem("rest-music-site");
    // }
  }


  useEffect(() => {
    getSongs();
  }, [])
  
  return (
    <Container fluid>
      <Row>
        <Col
          sm={{
            size: 6,
            offset: 3,
          }}
          className="mt-3"
        >
          <ListGroup>
            <ListGroupItem>Cras justo odio</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Morbi leo risus</ListGroupItem>
            <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Songs;
