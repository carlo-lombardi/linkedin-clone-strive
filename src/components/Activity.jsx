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
                <p className="boldText mb-0">Digital Psychology</p>
                <p>User shared this.</p>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row className="pl-3">
              <Col className="col col-2">
                <Image
                  className="activityImg"
                  src="https://pbs.twimg.com/profile_images/649953464332632064/Gl_eu1Ws_400x400.png"
                ></Image>
              </Col>
              <Col className="col col-10">
                <p className="boldText mb-0">Learn everything about React</p>
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
                  src="http://agentpalmer.com/wp-content/uploads/2016/03/id-Software-logo.jpeg"
                ></Image>
              </Col>
              <Col className="col col-10">
                <p className="boldText mb-0">Approach to game development</p>
                <p>User shared this.</p>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row className="pl-3">
              <Col className="col col-2">
                <Image
                  className="activityImg"
                  src="https://brewminate.com/wp-content/uploads/2018/08/081218-22-Canterbury-Tales-Literature-Medieval-Middle-Ages-Race-Racism.jpg"
                ></Image>
              </Col>
              <Col className="col col-10">
                <p className="boldText mb-0">A look into the 1600s</p>
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
