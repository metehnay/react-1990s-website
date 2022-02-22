import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "./Games.css";
import { Modal, Button } from "react-bootstrap";

const ArcadeGame = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <button onClick={handleShow}>PLAY GAME</button>

      <Modal id="mods" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            id="frame"
            src="https://www.retrogames.cc/embed/29209-sonic-knuckles-sonic-the-hedgehog-3-world.html"
            width="100%"
            height="450"
            frameborder="no"
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            scrolling="no"
          ></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ArcadeGame;
