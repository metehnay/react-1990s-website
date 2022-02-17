import React, { useState } from "react";
import NavLinks from "./NavLinks";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import logo from "./logo.png";

const MobileNavigation = () => {
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
      <div className="burgers">{open ? closeIcon : burgerIcon}</div>
      <div className="c"></div>
      <div className="logos"></div>

      {open && <NavLinks isMobile={true} closeItem={closeItem} />}
    </nav>
  );
};

export default MobileNavigation;
