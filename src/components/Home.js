import React from "react";
import profilepicture from "../assets/image/profilepicture.png";
import medium from "../assets/image/medium.svg";
import linkedin from "../assets/image/linkedin.svg";
import twitter from "../assets/image/twitter.svg";
import dev from "../assets/image/dev.svg";
import Mail from "../assets/image/email.svg";
import Pdf from "../assets/image/pdf.svg";

const Home = () => {
  return (
    <div
      class="container-fluid bg-black px-5 pb-4"
    >
      <div className="row">
        <div className="col-md-4 mt-5">
          <img
            src={profilepicture}
            alt="Backer devis img"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 text-white mx-auto">
          <p
            className="caros pt-3 text-center heading-text"
            style={{fontWeight: "bold" }}
          >
            Hi, I am <span className="caros text-warning">BACKER DEVIS</span>{" "}
          </p>
          <p
            className="caros text-center heading-text2"
            style={{fontWeight: "bold" }}
          >
            {" "}
            SENIOR BACKEND DEVELOPER{" "}
          </p>
          <p className="caros" style={{ fontSize: "1rem" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            laoreet sit amet augue ut vehicula. Nulla scelerisque nunc sed leo
            efficitur gravida. Donec tempor enim eget urna auctor molestie. Nam
            ultrices magna at elementum pretium. In convallis, nisi eu varius
            accumsan, orci sapien interdum elit, at scelerisque ante arcu a
            tortor. Ut purus ipsum, scelerisque vitae mattis sollicitudin,
            convallis a leo. Phasellus risus erat, lacinia vitae fermentum
            vitae, suscipit et augue. In dictum turpis sapien, eget bibendum
            nunc porta sit amet. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Mauris laoreet sit amet augue ut vehicula. Nulla
            scelerisque nunc sed leo efficitur gravida. Donec tempor enim eget
            urna auctor molestie
          </p>
          <h5>SkILLS: HTML, CSS, JS, NODE.JS, FIREBASE, PHP</h5>
        <div className="row mt-4">
          <div className="col-md-8 mb-2 text-center">
            <img
              src={Mail}
              alt="email"
              className="px-2"
              style={{ width: "12%" }}
            />
            <img src={linkedin} alt="linkedin" style={{ width: "12%" }} className="px-2" />
            <img src={twitter} alt="twitter" style={{ width: "12%" }} className="px-2"/>
            <img src={medium} alt="medium" style={{ width: "12%" }} className="px-2"/>
            <img src={dev} alt="dev" style={{ width: "12%" }} className="px-2"/> 
          </div>
          <div className="col-md-4 text-center">
            <button
              className="btn text-white" 
            >
              <img src={Pdf} alt="pdf-icon" style={{ width: "12%" }} className="mb-1"/> 
              <span className="px-2">
              Download My CV
              </span>
            </button>
            </div>

          </div>
          
          </div>
      </div>
      
    </div>
  );
};

export default Home;
