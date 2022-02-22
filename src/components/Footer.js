import React from "react";
import "./Footer.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
        <p>User photos coming from Random User API.</p>
        <a href="https://clever-engelbart-4c549f.netlify.app/">
          <p id="dx">
            Checkout my random user api project{" "}
            <BsFillArrowRightCircleFill id="ikon" />
          </p>{" "}
        </a>
      </div>
      <div className="center">
        <h4 id="copy">© 2021 Back To The 80s</h4>
      </div>
    </div>
  );
};

export default Footer;
