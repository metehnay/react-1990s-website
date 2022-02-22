import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../../firebase-config";
import { useNavigate } from "react-router-dom";
import "./Games.css";
import { Form, Button, Row, Col, Card, Container } from "react-bootstrap";

const AddGame = ({ isAuth }) => {
  const [gameEmbed, setGameEmbed] = useState("");
  const [gameTitle, setGameTitle] = useState("");
  const [gameImage, setGameImage] = useState("");

  const postsCollectionRef = collection(db, "games");
  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      gameEmbed,
      gameTitle,
      gameImage,
      name: auth.currentUser.displayName,
      id: auth.currentUser.uid,

      photoURL: auth.currentUser.photoURL,
    });

    navigate("/games");
  };

  return (
    <>
      <Container fluid="p-5 d-flex justify-content-center mt-5 pt-5">
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Game Title
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Game Title..."
                onChange={(e) => setGameTitle(e.target.value)}
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-2"
            onChange={(e) => setGameEmbed(e.target.value)}
          >
            <Form.Label column sm={2}>
              Game Iframe
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="Game Iframe" />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-2"
            onChange={(e) => setGameImage(e.target.value)}
          >
            <Form.Label column sm={2}>
              Game Image
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="Game Iframe" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <Button variant="warning" onClick={createPost}>
                Submit
              </Button>
            </Col>
          </Form.Group>
          <p className="notu">
            game links should be just embed url. like this.
            <span className="blue">
              " https://www.retrogames.cc/embed/34952-basketbrawl-europe.html "
            </span>
          </p>
        </Form>
      </Container>
    </>
  );
};

export default AddGame;
