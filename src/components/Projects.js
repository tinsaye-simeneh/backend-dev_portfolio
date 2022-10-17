import React from "react";
import "../index.css";
import { Data } from "./data.js";

const Projects = () => {
  return (
    <div className="container-fluid py-5 bg-black">
      <div className="row">
        <div className="col-12">
          <h4 className="text-center text-white caros">
            SOME OF MY RECENT PROJECTS
          </h4>
        </div>
      </div>
      <div className="row mt-5">
        {Data.map((data) => (
          <div
            className="col-md-4 py-4 text-white mx-auto"
            key={data.id}
            style={{ width: "35rem" }}
          >
            <div className="row bg-white mx-3">
              <div className="col-md-6 text-center img-fluid">
                <img
                  src={data.img.src}
                  alt={data.img.alt}
                  className="img-fluid"
                />
              </div>
              <div className="col-md-6 text-center pt-4 pb-3">
                <h5 className="text-black caros"> {data.title}</h5>
                <p className="text-black caros"> {data.description}</p>
                <span className="text-secondary caros">
                  Client: {data.client}{" "}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row">
        <div className="col-12 text-center pb-3">
            <a href="https://github.com/" className="btn btn-outline-warning text-white mt-3 caros">
                SEE MORE
            </a>
        </div>
    </div>
    </div>
  );
};

export default Projects;
