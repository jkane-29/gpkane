import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const ProjectCard = ({ value }) => {
  const { id, title, description } = value;

  // YouTube thumbnail URL (using maxresdefault for high quality)
  const thumbnailUrl = `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
  const videoUrl = `https://www.youtube.com/watch?v=${id}`;

  return (
    <Col md={6}>
      <Card className="card shadow-lg p-3 mb-3 bg-white rounded">
        <a href={videoUrl} target="_blank" rel="noopener noreferrer" style={{ position: 'relative', paddingTop: '56.25%', display: 'block', overflow: 'hidden' }}>
          <Card.Img
            variant="top"
            src={thumbnailUrl}
            alt={title}
            style={{
              cursor: 'pointer',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </a>
        <Card.Body>
          <Card.Title as="h5">{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <div className="d-grid gap-2">
            <a
              href={videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-secondary"
            >
              <i className="fab fa-youtube" /> Watch on YouTube
            </a>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProjectCard;
