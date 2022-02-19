import React from "react";
import NavLinks from "./NavLinks";

const Navigation = ({ modu, setModu }) => {
  return (
    <nav className="desktop">
      <NavLinks modu={modu} setModu={setModu} />
    </nav>
  );
};

export default Navigation;
