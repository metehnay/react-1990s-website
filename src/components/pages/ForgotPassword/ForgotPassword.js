import React, { useState, useRef } from "react";
import "./ForgotPassword.css";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { sendPasswordResetEmail } from "firebase/auth";
import { Link } from "react-router-dom";
import { auth, provider } from "../../../firebase-config";

const ForgotPassword = () => {
  const emailRef = useRef();

  const [pass, setPass] = useState("");

  const forgotPass = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const getPass = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    if (email)
      forgotPass(email).then(() => {
        emailRef.current.value = "";
      });
  };

  return (
    <>
      <div className="login mt-16">
        <div className="login1">
          <Link
            to="/login"
            className="mb-4 bg-yellow-400 p-2 rounded text-dark"
          >
            Back to login page
          </Link>
        </div>
      </div>
      <Card className="w-100 custom-con">
        <Card.Body className="d-flex justify-content-center" id="custom">
          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>

            <Button
              className="w-100 mt-3 bg-warning text-dark border-none"
              type="submit"
              onClick={getPass}
            >
              Reset
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default ForgotPassword;
