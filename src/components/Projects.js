import React from "react";
import "../index.css";
import dashboard from "../assets/images/dashboard.png";
import ma from "../assets/images/ma.png";

const Projects = () => {

    function ProjectCard() {
        return (
        <div className="col-4 py-4 text-white" style={{marginLeft:'10%'}}>
        <div className="row bg-white">
          <div className="col-6">
            <img
              src={dashboard}
              alt="project"
              className="img-fluid"
              height="auto"
            />
          </div>
          <div className="col-6 text-center pt-4 pb-3">
              <h5 className="text-black caros">Dashboard</h5>
              <p className="text-black caros">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut porta lorem,</p>
              <span className="text-secondary caros">Client: Name </span>
          </div>
        </div>
      </div>
        )
    }

  return (
    <div className="container-fluid mt-5 py-5 bg-black">
      <div className="row">
        <div className="col-12">
          <h4 className="text-center text-white mt-3 caros">
            SOME OF MY RECENT PROJECTS
          </h4>
        </div>
      </div>
      <div className="row mt-5">
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        </div>
    </div>
  );
};

export default Projects;
