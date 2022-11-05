import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import ReactPlayer from "react-player/youtube";
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
                  <ListGroupItem key={index} className="d-flex justify-content-between">
                    <p>{song}</p>
                    <Button color="primary" onClick={()=> {
                      window.open(`http://localhost:3600/public/${song}`);
                    }}>Play</Button>
                    {/* <ReactPlayer
                      playing url={['file-1667631053375-253879582.mp3']} 
                    /> */}
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
