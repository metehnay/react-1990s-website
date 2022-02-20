import React, { useEffect, useState, useRef } from "react";
import "./Home.css";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../../../firebase-config";
import mp3file from "./boogie.mp3";
import Footer from "../../Footer";
import funo from "./funo.png";
import ArcadeGame from "../Game/ArcadeGame";

const Home = ({ isAuth, modu, setModu }) => {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");
  const [audioStatus, changeAudioStatus] = useState(false);
  const myRef = useRef();

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, []);

  const audioTune = new Audio(mp3file);

  const colors = [
    "https://image.api.playstation.com/cdn/UP2135/CUSA04242_00/qgdTIEcH3gFsQ5ck5foNMiId6C2tTQ3w.png?w=960&h=960",
    "https://image.api.playstation.com/cdn/UP2135/CUSA04242_00/Ay55lRjPnoTmk9r6eT9dxczejRoNIcdD.png?w=960&h=960",
    "https://pbs.twimg.com/profile_images/2142061452/mm_yellow_400x400.jpg",
    "https://img02.imgsinemalar.com/images/karakter_buyuk/10548/Lloyd-Christmas-3.jpg",
    "https://pbs.twimg.com/profile_images/690011114730569728/TaJdInRk_400x400.jpg",
    "https://images.theconversation.com/files/437399/original/file-20211214-17-1jwkeo1.png?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
    "https://im.haberturk.com/2019/11/05/ver1572953407/2537577_2195097b200e80703e86e04d51446be8.jpg",
    "https://www.tersninja.com/wp-content/uploads/2008/09/big_lebowski.jpg",
    "https://store.playstation.com/store/api/chihiro/00_09_000/container/PE/es/19/UP2135-CUSA04242_00-AV00000000000057/image?w=320&h=320&bg_color=000000&opacity=100&_version=00_09_000",
  ];

  function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  const startAudio = () => {
    myRef.current.play();

    changeAudioStatus(true);
  };

  const pauseAudio = () => {
    console.log("here");
    myRef.current.pause();
    changeAudioStatus(false);
  };

  return (
    <>
      <div className="fun">
        {modu && (
          <div className="buton">
            <audio ref={myRef} src={mp3file} />
            {audioStatus ? (
              <button onClick={pauseAudio} id="zi">
                STOP MUSIC
              </button>
            ) : (
              <button onClick={startAudio} id="zi">
                PLAY MUSIC
              </button>
            )}
          </div>
        )}
        {modu && (
          <div className="arcade">
            <ArcadeGame />
          </div>
        )}
      </div>
      <div className="containerx mt-5">
        <div className="posto">
          {postLists.map((post) => {
            return (
              <div className="post">
                <div className="postimage">
                  <div className="del">
                    {modu ? (
                      <img src={randomColor(colors)} id="img-name" />
                    ) : (
                      <img src={post.photoURL} id="img-name" />
                    )}
                    <p id="name">{post.name}</p>
                    <p id="dat">{post.photoDate}</p>
                  </div>
                  <div className="images">
                    <img src={post.imageURL} id="img-photo" />

                    <p> {post.title}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
