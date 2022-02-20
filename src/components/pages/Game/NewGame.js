import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../../firebase-config";
import { useNavigate } from "react-router-dom";
import "./NewGame.css";
import { Form, Button, Row, Col, Card, Container } from "react-bootstrap";

const NewGame = ({ isAuth }) => {
  const [frame, setFrame] = useState("");
  const [picURL, setPicURL] = useState("");
  const [gameTitle, setGameTitle] = useState("");

  const postsCollectionRef = collection(db, "frames");
  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      gameTitle,
      picURL,
      frame,
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
                placeholder="Photo Title..."
                onChange={(e) => setGameTitle(e.target.value)}
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-2"
            onChange={(e) => setFrame(e.target.value)}
          >
            <Form.Label column sm={2}>
              Game Frame SRC
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="Not Required..." />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Game Picture
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Photo URL..."
                onChange={(e) => setPicURL(e.target.value)}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <Button variant="warning" onClick={createPost}>
                Submit
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
};

export default NewGame;
