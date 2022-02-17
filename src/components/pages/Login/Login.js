import React, { useEffect, useState } from "react";
import "./Login.css";
import { auth, provider } from "../../../firebase-config";
import { Form, Button, Card, Alert } from "react-bootstrap";

import { signInWithPopup } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const Login = ({ setIsAuth, isAuth }) => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  let navigate = useNavigate();

  const logged = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      localStorage.setItem("isAuth", true);

      setIsAuth(true);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const signIn = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);

      setIsAuth(true);
      navigate("/");
    });
  };

  return (
    <>
      <div className="login mt-16">
        <div className="login1">
          <button
            onClick={signIn}
            className="mb-4 bg-yellow-400 p-2 rounded text-dark"
          >
            Sign In with Google
          </button>
        </div>
      </div>

      <Card className="w-100 custom-con">
        <Card.Body className="d-flex justify-content-center" id="custom">
          <Form onSubmit={logged}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                onChange={(event) => {
                  setLoginEmail(event.target.value);
                }}
                required
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                onChange={(event) => {
                  setLoginPassword(event.target.value);
                }}
                required
              />
            </Form.Group>
            <Button
              className="w-100 mt-3 bg-warning text-dark border-none"
              type="submit"
              onClick={logged}
            >
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  );
};

export default Login;
