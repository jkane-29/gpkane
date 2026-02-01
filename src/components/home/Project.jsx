import React from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";

const Project = ({ heading, videos }) => {
  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>
          {videos && videos.length > 0 ? (
            videos.map((video, index) => (
              <ProjectCard
                key={`video-card-${index}`}
                id={`video-card-${index}`}
                value={video}
              />
            ))
          ) : (
            <p className="text-center">No videos available</p>
          )}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Project;
