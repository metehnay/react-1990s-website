import React, { useState } from "react";
import "./ForgotPassword.css";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth, provider } from "../../../firebase-config";

const ForgotPassword = () => {
  const [pass, setPass] = useState("");

  const forgotPass = async (e) => {
    e.preventDefault();
    try {
      const user = await sendPasswordResetEmail(auth);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <Card className="w-100 custom-con">
        <Card.Body className="d-flex justify-content-center" id="custom">
          <Form onSubmit={forgotPass}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required />
            </Form.Group>

            <Button
              className="w-100 mt-3 bg-warning text-dark border-none"
              type="submit"
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
