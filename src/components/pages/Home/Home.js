import React, { useEffect, useState } from "react";
import "./Home.css";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../../../firebase-config";
import mp3file from "./boogie.mp3";

const Home = ({ isAuth, modu, setModu }) => {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, []);

  const audioTune = new Audio(mp3file);

  const playSound = () => {
    audioTune.play();
  };

  const colors = [
    "https://i.ebayimg.com/images/g/eekAAOSw0UdXp80j/s-l400.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/71MYkc9vIgL.__AC_SX300_SY300_QL70_ML2_.jpg",
    "https://cdn.shopify.com/s/files/1/0023/6178/6426/products/70s-disco-dirtbag-kit.jpg?v=1603132627",
    "https://i.pinimg.com/564x/eb/3c/63/eb3c6343eac28283ab9d40aefb1eb213--moustache-party-disco-party.jpg",
    "https://img.fruugo.com/product/2/66/138380662_max.jpg",
    "https://m.media-amazon.com/images/I/61ngh-uhlML._SL1500_.jpg",
    "http://cdn.shopify.com/s/files/1/0802/9923/products/4eebce572bc190c7ca77f3e2855aede63bdc8024_500x_2x.progressive_dc844294-8e36-4298-ac44-e8a288cc7ac2_grande.jpg?v=1626112467",
    "http://thumb2.zeppy.io/d/l400/pict/401354256679/mens-70s-super-trouper-brown-wig-moustache-disco-fancy-dress-accessory",
    "https://m.media-amazon.com/images/I/A1fHNlVMHIL._AC_UL1500_.jpg",
    "https://m.media-amazon.com/images/I/61syBWzmPnL._AC_UX385_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/712yCSooCtS._SL1500_.jpg",
  ];

  function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  return (
    <>
      {modu && (
        <div className="buton">
          <button onClick={playSound} id="anim">
            {" "}
            PLAY MUSIC
          </button>
        </div>
      )}
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
    </>
  );
};

export default Home;
