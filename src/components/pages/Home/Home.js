import React, { useEffect, useState } from "react";
import "./Home.css";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../../../firebase-config";

const Home = ({ isAuth }) => {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, []);

  return (
    <>
      <div className="containerx mt-5">
        <div className="posto">
          {postLists.map((post) => {
            return (
              <div className="post">
                <div className="postimage">
                  <div className="del">
                    <img src={post.photoURL} id="img-name" />
                    <p id="name">{post.name}</p>
                    <p id="dat">{post.photoDate}</p>
                  </div>
                  <div className="images">
                    <img src={post.imageURL} id="img-photo" />{" "}
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
