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
        </Routes>
      </Router>
    </>
  );
}

export default App;
