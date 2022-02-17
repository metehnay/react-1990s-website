import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "./logo.png";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import DarkMode from "./DarkMode";

const Header = ({ isAuth, setIsAuth }) => {
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/";
    });
  };

  return (
    <div className="header d-flex bg-white-600  ">
      <nav className="w-100  ">
        <img src={logo} className="logo position-absolute mw-100 left-20" />
        <ul className="d-flex justify-content-center align-items-center mt-3 opacity-90">
          <DarkMode id="darko" />

          <li>
            <Link to={"/"}>Explore</Link>
          </li>
          {!isAuth ? (
            <>
              <li>
                <Link to={"/login"}>Login</Link>
              </li>
              <li>
                <Link to={"/signup"}>Sign Up</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                {" "}
                <Link to={"/newpost"}>New Post</Link>
              </li>
              <li onClick={signUserOut} id="log">
                Log Out
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
