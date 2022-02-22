import React, { useState } from "react";
import NavLinks from "./NavLinks";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import logo from "./logo.png";
import DarkMode from "./DarkMode";

const MobileNavigation = ({ modu, setModu, isAuth, setIsAuth }) => {
  const [open, setOpen] = useState(false);

  const burgerIcon = (
    <GiHamburgerMenu
      className="Hamburger"
      size="40px"
      color="var(--burges)"
      onClick={() => setOpen(!open)}
    />
  );
  const closeIcon = (
    <MdOutlineClose
      className="Hamburger"
      size="40px"
      color="var(--burges)"
      onClick={() => setOpen(!open)}
    />
  );

  const closeItem = () => setOpen(false);
  return (
    <nav className="mobile-navigation">
      <img src={logo} id="mob" />
      <div className="burgers"> {open ? closeIcon : burgerIcon} </div>
      {open && (
        <NavLinks
          isMobile={true}
          closeItem={closeItem}
          modu={modu}
          setModu={setModu}
          isAuth={isAuth}
          setIsAuth={setIsAuth}
        />
      )}
    </nav>
  );
};

export default MobileNavigation;
