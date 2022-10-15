import React from "react";
import "../index.css";
import { Data } from "./data.js";

const Projects = () => {
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
        {Data.map((data) => (
          <div
            className="col-4 py-4 text-white"
            key={data.id}
            style={{ marginLeft: "10%" }}
          >
            <div className="row bg-white">
              <div className="col-6 img-fluid">
                <img
                  src={data.img.src}
                  alt={data.img.alt}
                  className="img-fluid"
                />
              </div>
              <div className="col-6 text-center pt-4 pb-3">
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
        <div className="col-12 text-center">
            <a href="https://github.com/" className="btn btn-outline-primary mt-5 caros">
                SEE MORE
            </a>
        </div>
    </div>
    </div>
  );
};

export default Projects;
