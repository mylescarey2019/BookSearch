// import react object as React
import React from "react";

// import and destructure ListItem component from List file
import { ListItem } from "../List";

// import and destructure Row and Col from Grid file
import { Row, Col } from "../Grid";

// import css style sheet for this component
import "./style.css";

// define react function component that recieves a series of props
function Book({ title, subtitle, authors, link, description, image, Button }) {
  return (
    // render components JSX classNames and various props
    <ListItem>
      <Row className="flex-wrap-reverse">
        <Col size="md-8">
          <h3 className="font-italic">{title}</h3>
          {subtitle && <h5 className="font-italic">{subtitle}</h5>}
        </Col>
        <Col size="md-4">
          <div className="btn-container">
            <a className="btn btn-light" target="_blank" rel="noopener noreferrer" href={link}>
              View
            </a>
            {/* this is a prop component passed in to this function - note the capitolization */}
            <Button />
          </div>
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
          <p className="font-italic small">Written by {authors}</p>
        </Col>
      </Row>
      <Row>
        <Col size="12 sm-4 md-2">
          <img className="img-thumbnail img-fluid w-100" src={image} alt={title} />
        </Col>
        <Col size="12 sm-8 md-10">
          <p>{description}</p>
        </Col>
      </Row>
    </ListItem>
  );
}

// export named as Book
export default Book;
