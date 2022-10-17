import React from "react";
import profilepicture from "../assets/image/profilepicture.png";
import medium from "../assets/image/medium.svg";
import linkedin from "../assets/image/linkedin.svg";
import twitter from "../assets/image/twitter.svg";
import dev from "../assets/image/dev.svg";
import Mail from "../assets/image/email.svg";

const Home = () => {
  return (
    <div
      class="container-fluid px-5 text-left bg-black py-5"
    >
      <div className="row">
        <div className="col-md-6 mt-5">
          <img
            src={profilepicture}
            alt="Backer devis"
            className="pp"
            width={450}
          />
        </div>
        <div className="col-md-6 mx-auto">
          <p
            className="caros text-white pt-3 text-center"
            style={{ fontSize: "2.5rem", fontWeight: "bold" }}
          >
            Hi, I am <span className="caros text-yellow">BACKER DEVIS</span>{" "}
          </p>
          <p
            className="caros text-white text-center"
            style={{ fontSize: "1.5rem", fontWeight: "bold" }}
          >
            {" "}
            SENIOR BACKEND DEVELOPER{" "}
          </p>
          <p className="caros text-white" style={{ fontSize: "1rem" }}>
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
        </div>
        
      </div>
      
    </div>
  );
};

export default Home;
