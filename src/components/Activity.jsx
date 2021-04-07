import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

export default () => {
  return (
    <Container>
      <Container className="header col-9 ml-0 my-2">
        <Row className="pt-3 pl-3">
          <p>Activity</p>
        </Row>
        <Row>
          <Col>
            <Row className="pl-3">
              <Col className="col col-2">
                <Image
                  className="activityImg"
                  src="https://www.centreofexcellence.com/app/uploads/2016/08/forensic-psychology-course.jpg"
                ></Image>
              </Col>
              <Col className="col col-10">
                <p className="boldText mb-0">Psychology</p>
                <p>User shared this.</p>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row className="pl-3">
              <Col className="col col-2">
                <Image
                  className="activityImg"
                  src="https://www.centreofexcellence.com/app/uploads/2016/08/forensic-psychology-course.jpg"
                ></Image>
              </Col>
              <Col className="col col-10">
                <p className="boldText mb-0">Psychology</p>
                <p>User shared this.</p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row className="pl-3">
              <Col className="col col-2">
                <Image
                  className="activityImg"
                  src="https://www.centreofexcellence.com/app/uploads/2016/08/forensic-psychology-course.jpg"
                ></Image>
              </Col>
              <Col className="col col-10">
                <p className="boldText mb-0">Psychology</p>
                <p>User shared this.</p>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row className="pl-3">
              <Col className="col col-2">
                <Image
                  className="activityImg"
                  src="https://www.centreofexcellence.com/app/uploads/2016/08/forensic-psychology-course.jpg"
                ></Image>
              </Col>
              <Col className="col col-10">
                <p className="boldText mb-0">Psychology</p>
                <p>User shared this.</p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="justify-content-center borderTop">
          <p className="mt-1 mb-0">See all activity</p>
        </Row>
      </Container>
    </Container>
  );
};
