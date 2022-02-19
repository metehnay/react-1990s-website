import React from "react";
import logo from "./logo.png";
import { motion } from "framer-motion";
import MobileNavigation from "./MobileNavigation";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import { Link } from "react-router-dom";
import DarkMode from "./DarkMode";
const NavLinks = ({
  isMobile,
  closeItem,
  isAuth,
  setIsAuth,
  modu,
  setModu,
}) => {
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/";
    });
  };

  const animateForm = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <>
      <div className="header d-flex bg-white-600  ">
        <nav className="w-100  ">
          <img
            src={logo}
            className="logo position-absolute mw-100 left-20"
            id="log"
          />
          <ul className="d-flex justify-content-center align-items-center mt-3 opacity-90">
            <DarkMode id="darko" modu={modu} setModu={setModu} />
            <motion.div
              initial={animateForm}
              animate={animateTo}
              transition={{ delay: 0.05 }}
            >
              <li>
                <Link to="/" onClick={() => isMobile && closeItem(false)}>
                  Explore
                </Link>
              </li>
            </motion.div>
            {!isAuth ? (
              <>
                <motion.div
                  initial={animateForm}
                  animate={animateTo}
                  transition={{ delay: 0.05 }}
                >
                  <li>
                    <Link
                      to="/login"
                      onClick={() => isMobile && closeItem(false)}
                    >
                      Login
                    </Link>
                  </li>
                </motion.div>
                <motion.div
                  initial={animateForm}
                  animate={animateTo}
                  transition={{ delay: 0.05 }}
                >
                  <li>
                    <Link
                      to="/signup"
                      onClick={() => isMobile && closeItem(false)}
                    >
                      Sign Up
                    </Link>
                  </li>
                </motion.div>
              </>
            ) : (
              <>
                <motion.div
                  initial={animateForm}
                  animate={animateTo}
                  transition={{ delay: 0.05 }}
                >
                  <li>
                    {" "}
                    <Link
                      to="/newpost"
                      onClick={() => isMobile && closeItem(false)}
                    >
                      New Post
                    </Link>
                  </li>
                </motion.div>
                <li onClick={signUserOut} id="log">
                  Log Out
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavLinks;
