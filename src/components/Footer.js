import React from "react";
import "../css/general.css";
import i4g from "../images/i4g-logo.png";
import zuri from "../images/zuri-logo.png";

const Footer = () => {
  return (
    <footer>
      <img src={zuri} alt="zuri" />
      <p>HNG Internship 9 Frontend Task</p>
      <img src={i4g} alt="i4g" />
    </footer>
  );
};

export default Footer;
