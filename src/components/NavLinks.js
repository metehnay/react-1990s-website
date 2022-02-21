import React from "react";
import logo from "./logo.png";
import { motion } from "framer-motion";
import MobileNavigation from "./MobileNavigation";
import { signOut } from "firebase/auth";
import { Dropdown, DropdownButton } from "react-bootstrap";
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
          <Link to="/">
            <img
              src={logo}
              className="logo position-absolute mw-100 left-20"
              id="log"
            />
          </Link>
          <ul className="d-flex justify-content-center align-items-center mt-3 opacity-90">
            <DarkMode id="darko" modu={modu} setModu={setModu} />
            <motion.div
              initial={animateForm}
              animate={animateTo}
              transition={{ delay: 0.05 }}
            >
              <li>
                <Link to="/" onClick={() => isMobile && closeItem(false)}>
                  Photos
                </Link>
              </li>
            </motion.div>

            <motion.div
              initial={animateForm}
              animate={animateTo}
              transition={{ delay: 0.05 }}
            >
              <li>
                <Link to="/videos" onClick={() => isMobile && closeItem(false)}>
                  Videos
                </Link>
              </li>
            </motion.div>
            <motion.div
              initial={animateForm}
              animate={animateTo}
              transition={{ delay: 0.05 }}
            >
              <li>
                <Link to="/musics" onClick={() => isMobile && closeItem(false)}>
                  Musics
                </Link>
              </li>
            </motion.div>
            <motion.div
              initial={animateForm}
              animate={animateTo}
              transition={{ delay: 0.05 }}
            >
              <li>
                <Link to="/games" onClick={() => isMobile && closeItem(false)}>
                  Games
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
                      id="login"
                      onClick={() => isMobile && closeItem(false)}
                    >
                      Login
                    </Link>
                  </li>
                </motion.div>
              </>
            ) : (
              <>
                <li>
                  <DropdownButton
                    id="dropdown-button-dark-example2"
                    variant="warning"
                    menuVariant="dark"
                    title="Create Post"
                    className="mt-2"
                  >
                    <Dropdown.Item
                      href="/newpost"
                      onClick={() => isMobile && closeItem(false)}
                    >
                      Add Photo
                    </Dropdown.Item>

                    <Dropdown.Item
                      href="/addmusic"
                      onClick={() => isMobile && closeItem(false)}
                    >
                      Add Music
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item
                      href="/addvideo"
                      onClick={() => isMobile && closeItem(false)}
                    >
                      Add Video
                    </Dropdown.Item>
                  </DropdownButton>
                </li>
                <motion.div
                  initial={animateForm}
                  animate={animateTo}
                  transition={{ delay: 0.05 }}
                >
                  <li onClick={signUserOut} id="log">
                    Log Out
                  </li>
                </motion.div>
              </>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavLinks;
