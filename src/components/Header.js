import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "./logo.png";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import DarkMode from "./DarkMode";
import NavLinks from "./NavLinks";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

const Header = ({ isAuth, setIsAuth, modu, setModu }) => {
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/";
    });
  };

  return (
    <div className="Navbar">
      <Navigation
        modu={modu}
        setModu={setModu}
        isAuth={isAuth}
        setIsAuth={setIsAuth}
      />
      <MobileNavigation
        modu={modu}
        setModu={setModu}
        isAuth={isAuth}
        setIsAuth={setIsAuth}
      />
    </div>
  );
};

export default Header;
