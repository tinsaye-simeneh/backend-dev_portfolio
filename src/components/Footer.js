import React from "react";
import uix from "../assets/images/uix.png";
import reaclate from "../assets/images/reaclate.png";
import medium from "../assets/image/medium.svg";
import linkedin from "../assets/image/linkedin.svg";
import twitter from "../assets/image/twitter.svg";
import dev from "../assets/image/dev.svg";
import Mail from "../assets/image/email.svg";
import Pdf from "../assets/image/pdf.svg";

const Footer = () => {
  return (
    <div className="container-fluid bg-white pt-2" style={{ position: 'fixed',
        bottom: '0'}}>
      <div className="row">
        <div className="col-md-4 text-black">
          © 2021. All Rights Reserved. Designed by
          <a href="https://t.me/uixnature" className="caros text-decoration-none">
            {" "}
            uix Nature
          </a>
        </div>
        <div className="col-md-6 text-center text-black">
            <span className="px-2">
          Proudly powered by
    </span>
          <a href="https://t.me/uixnature" className="text-black caros">
            <img src={uix} alt="uix" className="img-fluid mb-2" />
          </a>
          <span className="px-2">
          and 
    </span>
          <a href="https://github.com/Reaclate" className="text-black caros">
            <img src={reaclate} alt="reaclate" className="img-fluid mb-2" />
          </a>
          <span className="px-2">
          collaborated with <a href="https://github.com/bekisha" className="text-black caros">Bekisha</a>
          </span>
        </div>
        <div className="col-md-2 text-center">
            <img src={linkedin} alt="linkedin" style={{ width: "20%" }} className="px-2" />
            <img src={twitter} alt="twitter" style={{ width: "20%" }} className="px-2"/>
            <img src={medium} alt="medium" style={{ width: "20%" }} className="px-2"/>
            <img src={dev} alt="dev" style={{ width: "20%" }} className="px-2"/> 
          </div>
      </div>
    </div>
  );
};

export default Footer;
