import React, { useState } from "react";
import "./ArcadeRoom.css";
import { Modal, Button } from "react-bootstrap";
import kong from "./img/1.png";
import alien from "./img/2.png";
import baseball from "./img/3.png";

const ArcadeRoom = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="games">
      <div className="inside-games">
        <div className="game1">
          <h2 id="game-title">Donkey Kong</h2>

          <img src={kong} id="game" />
          <Button variant="warning" onClick={handleShow}>
            Start Game
          </Button>
          <Modal
            size="lg"
            id="mods"
            show={show}
            onHide={() => setShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Body>
              <iframe
                src="https://www.retrogames.cc/embed/34971-donkey-kong-usa.html"
                id="frame"
                frameborder="no"
                allowfullscreen="true"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                scrolling="no"
              ></iframe>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="warning" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <div className="game1">
          <h2 id="game-title">Alien Brigade (USA)</h2>

          <img src={alien} id="game" />

          <Button variant="warning" onClick={handleShow}>
            Start Game
          </Button>
          <Modal
            size="lg"
            id="mods"
            show={show}
            onHide={() => setShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Body>
              <iframe
                src="https://www.retrogames.cc/embed/34945-alien-brigade-usa.html"
                id="frame"
                frameborder="no"
                allowfullscreen="true"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                scrolling="no"
              ></iframe>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="warning" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>

        <div className="game1">
          <h2 id="game-title">Baseball (Europe)</h2>

          <img src={baseball} id="game" />

          <Button variant="warning" onClick={handleShow}>
            Start Game
          </Button>
          <Modal
            size="lg"
            id="mods"
            show={show}
            onHide={() => setShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Body>
              <iframe
                src="https://www.retrogames.cc/embed/34951-baseball-europe.html"
                id="frame"
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
      </div>
    </div>
  );
};

export default ArcadeRoom;
