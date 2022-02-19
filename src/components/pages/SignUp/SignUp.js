import React, { useRef, useState } from "react";
import "./SignUp.css";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../../../firebase-config";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const [user, setUser] = useState({});

  const handleAction = (id) => {
    id.preventDefault();
    const authentication = getAuth();

    createUserWithEmailAndPassword(authentication, email, password).then(
      navigate("/login")
    );
  };

  return (
    <>
      <Card className="w-100 custom-con fr">
        <Card.Body className="d-flex justify-content-center" id="custom">
          <Form onSubmit={handleAction}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                required
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                required
              />
            </Form.Group>
            <Button
              className="w-100 mt-3 bg-warning text-dark"
              type="submit"
              onClick={handleAction}
            >
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="ds w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </>
  );
};

export default SignUp;
