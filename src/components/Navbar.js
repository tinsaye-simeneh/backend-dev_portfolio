import React from "react";
import logo from '../assets/images/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black pt-3">
        <div className="container">

  <a className="navbar-brand text-white" href="./Home"><img className="logo" src={logo} alt="logo..."/>Backer Devis</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <a className="nav-link" href="./Home">Home <span className="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="./Projects">Portfolio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="./ContactUs">Contact Me</a>
      </li>
       </ul>
  
  </div>
  </div>
</nav>
  )
}

export default Navbar;
