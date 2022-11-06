import React from "react";
import "../css/general.css";
import slack from "../images/slack-icon.png";
import github from "../images/github-icon.png";
import { Link } from "react-router-dom";

const data = [
  {
    url: "https://twitter.com/ejovwogfreeman/",
    text: "Twitter",
    id: "twitter",
  },
  {
    url: "https://training.zuri.team/",
    text: "Zuri Team",
    id: "btn__zuri",
  },
  {
    url: "http://books.zuri.team/",
    text: "Zuri Books",
    id: "books",
  },
  {
    url: "https://books.zuri.team/python-for-beginners?ref_id=ejovwo-godbless/",
    text: "Python Books",
    id: "book__python",
  },
  {
    url: "https://background.zuri.team/",
    text: "Background Check for Coders",
    id: "pitch",
  },
  {
    url: "https://books.zuri.team/design-rules/",
    text: "Design Books",
    id: "book__design",
  },
];

const Links = () => {
  return (
    <section>
      <div className="links-container">
        {data.map((urls, index) => (
          <a href={urls.url} id={urls.id} key={index}>
            {urls.text}
          </a>
        ))}
        <Link to="/contact" id="contact">
          Contact Me
        </Link>
      </div>
      <div>
        <a href="https://www.slack.com/" alt="slack">
          <img src={slack} alt="slack" />
        </a>
        &nbsp; &nbsp; &nbsp;
        <a href="https://github.com/ejovwogfreeman/" alt="slack">
          <img src={github} alt="github" />
        </a>
      </div>
    </section>
  );
};

export default Links;
