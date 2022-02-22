import { useEffect, useState } from "react";
import { useAuth, upload } from "../../../firebase-config";
import "./Profile.css";
import { Modal, Button, RouteModal } from "react-bootstrap";

export default function Profile() {
  const currentUser = useAuth();
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [photoURL, setPhotoURL] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
  );

  function handleChange(e) {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  }

  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  const tomi = useAuth();

  function handleClick() {
    upload(photo, currentUser, setLoading);
  }

  useEffect(() => {
    if (currentUser?.photoURL) {
      setPhotoURL(currentUser.photoURL);
    }
  }, [currentUser]);

  return (
    <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      {" "}
      <Modal
        size="lg"
        id="profil"
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Body>
          <div id="nameso">
            <img src={photoURL} alt="Avatar" className="avatar" />
            Welcome: <span className="span">
              {currentUser?.displayName}
            </span>{" "}
          </div>
          <div className="upload">
            <h6>Change Avatar</h6>
            <input type="file" onChange={handleChange} id="fileo" />
            <Button
              variant="warning"
              id="uplo"
              disabled={loading || !photo}
              onClick={handleClick}
            >
              Upload
            </Button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
