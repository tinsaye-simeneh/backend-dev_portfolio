import React from 'react';
import profilepicture from "../assets/image/profilepicture.png";
import medium from "../assets/image/medium.svg";
import linkedin from "../assets/image/linkedin.svg";
import twitter from "../assets/image/twitter.svg";
import dev from "../assets/image/dev.svg";
import Mail from "../assets/image/email.svg";
 
const Home = () => {
  return (

    <div class="container text-left bg-black  pt-5"  style={{ marginTop: "2%" }}>
      <div className="row bottomMargin">
        <div className="col-sm-6 mt-5">
        <img src={profilepicture} alt="Backer devis" className='pp' width={500}/></div>
        <div className="col-md-6 ms-auto">
          <h1
            className="caros text-white pt-3"
            style={{ fontSize: "2.5rem", fontWeight: "bold"  }}
          >
            Hi, I am <span className="caros text-yellow">BACKER DEVIS</span> <br/>
            <br/>SENIOR BACKEND DEVELOPER<br />
          </h1>
          <p
            className="caros text-white pt-20"
            style={{ fontSize: "1.5rem" }}
          >
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris laoreet sit amet augue ut vehicula. 
Nulla scelerisque nunc sed leo efficitur gravida. Donec tempor enim eget urna auctor molestie. 
Nam ultrices magna at elementum pretium. In convallis, nisi eu varius accumsan, orci sapien interdum elit,
at scelerisque ante arcu a tortor. Ut purus ipsum, scelerisque vitae mattis sollicitudin, convallis a leo. 
Phasellus risus erat, lacinia vitae fermentum vitae, suscipit et augue. In dictum turpis sapien, 
eget bibendum nunc porta sit amet.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris laoreet sit amet augue ut vehicula. 
Nulla scelerisque nunc sed leo efficitur gravida. Donec tempor enim eget urna auctor molestie
          </p>
          </div>
          </div>
          <div className="row mt-3">
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
          
    
    

  );
};

export default Home;

