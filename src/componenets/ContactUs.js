import React from "react";
import "../index.css";
import medium from "../assets/image/medium.svg";
import linkedin from "../assets/image/linkedin.svg";
import twitter from "../assets/image/twitter.svg";
import dev from "../assets/image/dev.svg";
import Mail from "../assets/image/email.svg";

const ContactUs = () => {
  return (
    <div className="container bg-black p-5" style={{ marginTop: "7%" }}>
      <div className="row">
        <div className="col-md-6">
          <h1
            className="caros text-white px-5 pt-5"
            style={{ fontSize: "3.5rem", fontWeight: "bold" }}
          >
            Lets Chat <br />
            Tell me about <br /> your project
          </h1>
          <p
            className="caros text-white px-5 pt-2"
            style={{ fontSize: "1.5rem" }}
          >
            Lets create something better
          </p>
          <div className="row mt-5">
            <img
              src={Mail}
              alt="email"
              className="ms-5"
              style={{ width: "12%" }}
            />
            <img src={linkedin} alt="linkedin" style={{ width: "12%" }} />
            <img src={twitter} alt="twitter" style={{ width: "12%" }} />
            <img src={medium} alt="medium" style={{ width: "12%" }} />
            <img src={dev} alt="dev" style={{ width: "12%" }} />
          </div>
        </div>
        <div className="col-md-6 text-center">
          <form className="p-5 rounded bg-white text-center">
            <h1 className="caros text-black mb-4" style={{fontSize:'2rem'}}>Contact Us</h1>
            <input
              type="text"
              className="border border-secondary mt-1 bg-white text-secondary rounded p-2 mb-3"
              style={{ width: "80%" }}
              placeholder="Full Name"
            />
            <input
              type="email"
              className="border border-secondary bg-white text-secondary rounded p-2 mb-3"
              style={{ width: "80%" }}
              placeholder="Email"
            />
            <input
              type="text"
              className="border border-secondary bg-white text-secondary rounded p-2 mb-3"
              style={{ width: "80%" }}
              placeholder="Subject"
            />
            <textarea
              className="border border-secondary bg-white text-secondary rounded p-2 mb-3"
              style={{ width: "80%" }}
              cols="30" rows="5"
              placeholder="Message"
            />

          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
