import React, { useEffect, useState, useRef } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../../../firebase-config";
import { Modal, Button, RouteModal } from "react-bootstrap";
import Iframe from "react-iframe";
import "./Musics.css";
import MusicModal from "./MusicModal";

const Musics = () => {
  const [musicList, setMusicList] = useState([]);
  const postsCollectionRef = collection(db, "music");
  const myRef = useRef();

  useEffect(() => {
    const getFrame = async () => {
      const data = await getDocs(postsCollectionRef);
      setMusicList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getFrame();
  }, []);

  return (
    <div className="music-container">
      <div className="height">
        {musicList.map((musics) => {
          let embedChange = musics.musicEmbed;
          let newEmbed = embedChange.replace("watch?v=", "embed/");

          let patos = embedChange.replace(
            "https://www.youtube.com/watch?v=",
            ""
          );
          return (
            <div className="musics">
              <div className="inside-musics">
                <div className="music1">
                  <img
                    src={`https://img.youtube.com/vi/${patos}/mqdefault.jpg`}
                    id="music-thumb"
                  />
                  <div className="gridso">
                    <h2 id="music-title">{musics.musicTitle}</h2>

                    <MusicModal
                      musicTitle={musics.musicTitle}
                      musicEmbed={newEmbed}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Musics;
