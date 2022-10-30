import React from "react";
import "../css/general.css";
import img from "../images/gbprofile.png";
import share from "../images/share-button.png";

const Header = () => {
  return (
    <header>
      <a href="htts://www.twitter.com/ejovwogfreeman">
        <img src={share} alt="share" className="share" />
      </a>
      <div className="img-container">
        <img src={img} alt="profile" id="profile__img" />
      </div>
      <h2 id="slack">Ejovwo Godbless</h2>
    </header>
  );
};

export default Header;
