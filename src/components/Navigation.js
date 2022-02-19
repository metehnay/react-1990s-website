import React from "react";
import NavLinks from "./NavLinks";

const Navigation = ({ modu, setModu, isAuth, setIsAuth }) => {
  return (
    <nav className="desktop">
      <NavLinks
        modu={modu}
        setModu={setModu}
        isAuth={isAuth}
        setIsAuth={setIsAuth}
      />
    </nav>
  );
};

export default Navigation;
