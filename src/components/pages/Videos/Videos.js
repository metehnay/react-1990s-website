import React, { useEffect, useState, useRef } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../../../firebase-config";
import { Modal, Button, RouteModal } from "react-bootstrap";
import Iframe from "react-iframe";
import "./Videos.css";
import VideoModal from "./VideoModal";

const Videos = () => {
  const [videoList, setVideoList] = useState([]);
  const postsCollectionRef = collection(db, "videos");
  const myRef = useRef();

  useEffect(() => {
    const getVideo = async () => {
      const data = await getDocs(postsCollectionRef);
      setVideoList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getVideo();
  }, []);

  return (
    <div className="video-container">
      <div className="video-height">
        {videoList.map((vido) => {
          let embedChange = vido.videoEmbed;
          let newEmbed = embedChange.replace("watch?v=", "embed/");

          let patos = embedChange.replace(
            "https://www.youtube.com/watch?v=",
            ""
          );
          console.log(embedChange);

          return (
            <div className="videos">
              <div className="video1">
                <img
                  src={`https://img.youtube.com/vi/${patos}/mqdefault.jpg`}
                  id="music-thumb"
                />
                <div className="video-gridso">
                  <h2 id="video-title">{vido.videoTitle}</h2>
                  <div className="flexo">
                    <img src={vido.photoURL} id="music-img" />
                    <p id="music-name">{vido.name}</p>
                  </div>
                  <VideoModal
                    videoTitle={vido.videoTitle}
                    videoEmbed={newEmbed}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Videos;
