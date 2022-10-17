import React from "react";
import uix from "../assets/images/uix.png";
import reaclate from "../assets/images/reaclate.png";

const Footer = () => {
  return (
    <div className="container-fluid bg-white py-2 border">
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
      </div>
    </div>
  );
};

export default Footer;
