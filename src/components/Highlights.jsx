import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { MdChat } from "react-icons/md";
class Highlights extends React.Component {
  render() {
    return (
      <Container className="header ml-0 my-2 bg-white">
        <Row className="pt-3 pl-3">
          <h4>Highlights</h4>
        </Row>
        <Row className="pl-3">
          <Col className="text-center col-1 pb-3">
            <MdChat style={{ height: "100%", width: "50px" }} />
          </Col>
          <Col>
            <p className="boldText mb-0">Reach out to User for...</p>
            <p>Probono consulting and volunteering, Joining a nonprofit board.</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Highlights;
