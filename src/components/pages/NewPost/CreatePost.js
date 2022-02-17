import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../../firebase-config";
import { useNavigate } from "react-router-dom";
import "./CreatePost.css";
import { Form, Button, Row, Col, Card, Container } from "react-bootstrap";

const CreatePost = ({ isAuth }) => {
  const [title, setTitle] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [photoDate, setPhotoDate] = useState("");
  const [original, setOriginal] = useState(false);

  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      imageURL,
      photoDate,
      original,
      name: auth.currentUser.displayName,
      id: auth.currentUser.uid,

      photoURL: auth.currentUser.photoURL,
    });

    if (photoDate === undefined) {
      photoDate("1980s");
    }
    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Container fluid="p-5 d-flex justify-content-center mt-5">
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Photo Title
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Photo Title..."
                onChange={(e) => setTitle(e.target.value)}
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            onChange={(e) => setPhotoDate(e.target.value)}
          >
            <Form.Label column sm={2}>
              Photo Date
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="number" placeholder="Not Required..." />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            onChange={(e) => setPhotoDate(e.target.value)}
          >
            <Form.Label column sm={2}>
              Photo URL
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Photo URL..."
                onChange={(e) => setImageURL(e.target.value)}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <Button variant="primary" onClick={createPost}>
                Submit
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
};

export default CreatePost;
