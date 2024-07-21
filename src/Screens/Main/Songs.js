import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import {
  ListGroup,
  ListGroupItem,
  // Input,
  // Label,
  // Button,
  Container,
  Row,
  Col,
} from "reactstrap";

const SONGS_URL = "./songs/get-songs";
axios.defaults.baseURL = "http://localhost:3600";
const Songs = () => {
  const [songsList, setSongsList] = useState([]);

  const getSongs = async (email) => {
    // console.log(email)
    const resp = await axios.get(SONGS_URL);
    // console.log(resp);
    // console.log(resp.data);
    const { errorMsg, successMsg, data } = resp.data;
    if (successMsg) {
      // console.log(data);
      setSongsList(data);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorMsg,
      });
    }
  };

  useEffect(() => {
    getSongs();
  }, []);

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
            {songsList &&
              songsList.length !== 0 &&
              songsList.map((song, index) => {
                return (
                  <ListGroupItem key={index}>
                    <Col sm="12" className="d-flex justify-content-between align-items-center">
                      <p className="mb-0">{song}</p>
                      {/* <Button
                        color="primary"
                        onClick={() => {
                          window.open(`http://localhost:3600/public/${song}`);
                        }}
                      >
                        Play
                      </Button> */}
                      <audio controls>
                        <source src={`http://localhost:3600/public/${song}`} type="audio/ogg" />
                        {/* <source src="horse.mp3" type="audio/mpeg" /> */}
                        Your browser does not support the audio tag.
                      </audio>
                    </Col>
                  </ListGroupItem>
                );
              })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Songs;
