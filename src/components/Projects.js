import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projectData from "../assets/projectData";

const Projects = () => {
    return (
        <Container className="mt-5">
        <Row>
            <Col>
            <h1 className="text-center">Projects</h1>
            </Col>
        </Row>
        <Row>
            {projectData.map((project) => (
            <ProjectCard project={project} />
            ))}
        </Row>
        </Container>
    );
    };

export default Projects;