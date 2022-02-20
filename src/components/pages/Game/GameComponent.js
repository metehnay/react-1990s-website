import React, { useEffect, useState, useRef } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../../../firebase-config";
import { Modal, Button } from "react-bootstrap";
import "./Games.css";
import NewGame from "./NewGame";

const GameComponent = () => {
  const [frameList, setFrameList] = useState([]);
  const postsCollectionRef = collection(db, "frames");
  const myRef = useRef();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const getFrame = async () => {
      const data = await getDocs(postsCollectionRef);
      setFrameList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getFrame();
  }, []);

  return (
    <div className="fun">
      {frameList.map((fram) => {
        return (
          <div className="games">
            <div className="inside-games">
              <div className="game1">
                <h2 id="game-title">{fram.gameTitle}</h2>

                <img src={fram.picURL} id="game" />
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
                    <NewGame />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="warning" onClick={handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GameComponent;
