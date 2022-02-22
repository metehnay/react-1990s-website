import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Header from "./components/Header";
import Login from "./components/pages/Login/Login";
import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import CreatePost from "./components/pages/NewPost/CreatePost";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./components/pages/SignUp/SignUp";
import Footer from "./components/Footer";
import ForgotPassword from "./components/pages/ForgotPassword/ForgotPassword";
import AddMusic from "./components/pages/Music/AddMusic";
import Musics from "./components/pages/Music/Musics";
import Videos from "./components/pages/Videos/Videos";
import AddVideo from "./components/pages/Videos/AddVideo";
import Games from "./components/pages/Games/Games";
import AddGame from "./components/pages/Games/AddGame";
import ArcadeGame from "./components/pages/Games/ArcadeGame";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const [modu, setModu] = useState(false);

  return (
    <>
      <Router>
        <>
          <Header
            setIsAuth={setIsAuth}
            isAuth={isAuth}
            modu={modu}
            setModu={setModu}
          />
        </>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home isAuth={isAuth} modu={modu} setModu={setModu} />}
          />
          <Route
            path="/login"
            element={<Login isAuth={isAuth} setIsAuth={setIsAuth} />}
          />
          <Route path="/newpost" element={<CreatePost isAuth={isAuth} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/arcadegames" element={<ArcadeGame />} />
          <Route path="/addgame" element={<AddGame />} />
          <Route path="/games" element={<Games />} />
          <Route path="/addmusic" element={<AddMusic />} />
          <Route path="/musics" element={<Musics />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/addvideo" element={<AddVideo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
