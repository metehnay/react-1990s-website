import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../../firebase-config";
import { useNavigate } from "react-router-dom";
import "./Videos.css";
import { Form, Button, Row, Col, Card, Container } from "react-bootstrap";

const AddVideo = ({ isAuth }) => {
  const [videoEmbed, setVideoEmbed] = useState("");
  const [videoTitle, setVideoTitle] = useState("");

  const postsCollectionRef = collection(db, "videos");
  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      videoTitle,
      videoEmbed,
      name: auth.currentUser.displayName,
      id: auth.currentUser.uid,

      photoURL: auth.currentUser.photoURL,
    });

    navigate("/videos");
  };

  return (
    <>
      <Container fluid="p-5 d-flex justify-content-center mt-5 pt-5">
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Video Title
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Video Title..."
                onChange={(e) => setVideoTitle(e.target.value)}
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-2"
            onChange={(e) => setVideoEmbed(e.target.value)}
          >
            <Form.Label column sm={2}>
              Video URL
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="Video URL" />
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
            video links should be like this.
            <span className="blue">
              " https://www.youtube.com/watch?v=ZyhrYis509A "
            </span>
          </p>
        </Form>
      </Container>
    </>
  );
};

export default AddVideo;
