import React from "react";
import uix from "../assets/images/uix.png";
import reaclate from "../assets/images/reaclate.png";

const Footer = () => {
  return (
    <div className="container-fluid bg-black py-5">
      <div className="row">
        <div className="col-md-4 text-white">
          © 2021. All Rights Reserved. Designed by
          <a href="#" className="caros text-decoration-none">
            {" "}
            uix Nature
          </a>
        </div>
        <div className="col-md-4 text-center text-white">
          Proudlt powered by
          <a href="https://t.me/uixnature" className="text-white caros">
            <img src={uix} alt="uix" className="img-fluid" />
          </a>
          and 
          <a href="https://github.com/Reaclate" className="text-white caros">
            <img src={reaclate} alt="reaclate" className="img-fluid" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
