import React from "react";
import "../index.css";
import dashboard from "../assets/images/dashboard.png";
import ma from "../assets/images/ma.png";

const Projects = () => {
  return (
    <div className="container-fluid mt-5 bg-black">
      <div className="row">
        <div className="col-12">
          <h4 className="text-center text-white mt-3 caros">
            SOME OF MY RECENT PROJECTS
          </h4>
        </div>
      </div>
      <div className="row border">
        <div className="col-4 ms-5 py-2 border text-white">
            <div className="col-6 border bg-primary">
                <img src={dashboard} alt="project" className="img-fluid" height='auto' />
                </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
