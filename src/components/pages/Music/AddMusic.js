import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../../firebase-config";
import { useNavigate } from "react-router-dom";
import "./AddMusic.css";
import { Form, Button, Row, Col, Card, Container } from "react-bootstrap";

const AddMusic = ({ isAuth }) => {
  const [musicEmbed, setMusicEmbed] = useState("");
  const [musicImage, setMusicImage] = useState("");
  const [musicTitle, setMusicTitle] = useState("");

  const postsCollectionRef = collection(db, "music");
  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      musicTitle,
      musicImage,
      musicEmbed,
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
              Music Title
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Music Title..."
                onChange={(e) => setMusicTitle(e.target.value)}
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-2"
            onChange={(e) => setMusicEmbed(e.target.value)}
          >
            <Form.Label column sm={2}>
              Music Embed
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="Music Embed" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Music Pic
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Photo URL..."
                onChange={(e) => setMusicImage(e.target.value)}
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

export default AddMusic;
