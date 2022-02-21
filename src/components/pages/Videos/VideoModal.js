import React, { useState } from "react";
import { Modal, Button, RouteModal } from "react-bootstrap";
import Iframe from "react-iframe";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const VideoModal = ({ videoTitle, videoEmbed }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  return (
    <div>
      <button className="music-btn" variant="warning" onClick={handleShow}>
        Play
      </button>
      <Modal
        size="lg"
        id="mods"
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Body>
          <Iframe
            url={videoEmbed}
            width="100%"
            height="450px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default VideoModal;
