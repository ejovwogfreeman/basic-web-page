import React, { useState } from "react";
import "../css/general.css";
import ScrollToTop from "../components/ScrollToTop";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    chekbox: "",
  });

  const [firstNameErr, setFirstNameErr] = useState("");

  const { firstName, lastName, email, message, checkbox } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName) {
      setFirstNameErr("First Name is required");
    }
  };

  return (
    <>
      <ScrollToTop />
      <Link
        to="/"
        style={{
          position: "absolute",
          top: "10px",
          left: "20px",
          fontSize: "20px",
        }}
      >
        <BsFillArrowLeftCircleFill />
      </Link>
      <div className="contact-us">
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask me about anything you have in mind</p>
        <form
          //   className="row g-3 mt-5 needs-validation"
          //   novalidate
          onSubmit={handleSubmit}
        >
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="first-name" className="form-label">
                First name
              </label>
              <input
                type="text"
                className={
                  firstNameErr ? "form-control is-invalid" : "form-control"
                }
                id="first-name"
                placeholder="Enter your first name"
                onChange={handleChange}
                name="firstName"
                value={firstName}
              />
              {/* <small className="text-danger">{firstNameErr}</small> */}
            </div>
            <div className="col-md-6">
              <label htmlFor="last-name" className="form-label">
                Last name
              </label>
              <input
                type="text"
                className="form-control"
                id="last-name"
                placeholder="Enter your last name"
                onChange={handleChange}
                name="lastName"
                value={lastName}
              />
              {/* <small className="text-danger">{firstNameErr}</small> */}
            </div>
          </div>
          <div className="col-12 mb-3">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              placeholder="yourname@email.com"
              onChange={handleChange}
              name="email"
              value={email}
            />
            {/* <small className="text-danger">{firstNameErr}</small> */}
          </div>
          <div className="col-12 mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <div>
              <textarea
                className="form-control"
                placeholder="send me a message and i'll replly you as soon as possible"
                id="message"
                onChange={handleChange}
                name="message"
                value={message}
                style={{ height: "100px" }}
              ></textarea>
              {/* <small className="text-danger">{firstNameErr}</small> */}
            </div>
          </div>
          <div className="col-12 mb-3">
            <div className="row">
              <div className="col-1">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                  onChange={handleChange}
                  name="check"
                  value={checkbox}
                />
              </div>
              <div className="col-11">
                <label className="form-check-label" htmlFor="exampleCheck1">
                  You agree to providing your data to ejovwogfreeman who may
                  contact you.
                </label>
              </div>
              {/* <small className="text-danger">{firstNameErr}</small> */}
            </div>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Send message
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
