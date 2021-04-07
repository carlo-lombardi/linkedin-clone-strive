import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { MdChat } from "react-icons/md"
class Highlights extends React.Component {
  render() {
    return (
      <Container>
        <Container className="header col-9 ml-0 my-2">
          <Row className="pt-3 pl-3">
            <p>Highlights</p>
          </Row>
          <Row className="pl-3">
              <Col className="text-center col-1 pb-3">
                <MdChat style={{"height" : "100%", "width" : "50px"}}/>
              </Col>
              <Col>
                <p className="boldText mb-0">Reach out to User for...</p>
                <p>Probono consulting and volunteering, Joining a nonprofit board.</p>
              </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default Highlights;
