import React from "react";
import { Col, Row } from "react-bootstrap";
import Interes from "./Interes";

export default function Interests() {
  return (
    <div className=" border bg-white px-3 pt-3 mb-4 round-border">
      <h4 className="m-3">Interests</h4>
      <Row>
        <Col xs={6}>
          <Interes img="https://via.placeholder.com/100" title="Procter & Gamble" folowers="5.828.777  folowers" />
        </Col>
        <Col xs={6}>
          <Interes
            img="https://via.placeholder.com/100"
            title="Medical Device Opportunity"
            members="237.532  members"
          />
        </Col>
        <Col xs={6}>
          <Interes img="https://via.placeholder.com/100" title="BBC News" folowers="7.629.416 folowers" />
        </Col>
        <Col xs={6}>
          <Interes
            img="https://via.placeholder.com/100"
            title="Medical Imaging Technology Global Research"
            members="908  members"
          />
        </Col>
        <Col xs={6}>
          <Interes img="https://via.placeholder.com/100" title="KTH alumni China" members="569 members" />
        </Col>
        <Col xs={6}>
          <Interes img="https://via.placeholder.com/100" title="Training Focus" members="181.693 members" />
        </Col>
      </Row>
    </div>
  );
}
