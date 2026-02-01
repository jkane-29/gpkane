import React from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";

const Project = ({ heading, videos, id = "projects" }) => {
  return (
    <Jumbotron fluid id={id} className="bg-light m-0" style={{ paddingTop: '0.5rem', paddingBottom: '0' }}>
      <Container className="px-3 py-0">
        <h2 className="display-4 py-3 text-center">{heading}</h2>
        <Row className="mb-0">
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
