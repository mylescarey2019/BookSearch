// import react object naming it React
import React from "react";

// import and destructure Col, Row and Container components
// from the components/Grid file
import { Col, Row, Container } from "../components/Grid";

// import Jumbotron component 
import Jumbotron from "../components/Jumbotron";

// define the react functional component NoMatch
// it will return nested component Container, Row, Col, Jumbotron
// this page rendered will communicate that the URL was not valid
function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1 className="text-center">404 Page Not Found</h1>
            <h1 className="text-center">
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

// export as name NoMatch
export default NoMatch;
