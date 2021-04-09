import React from "react";
import { Col, Row } from "react-bootstrap";
import Interes from "./Interes";

export default function Interests() {
  return (
    <div className=" border bg-white px-3 pt-3 mb-4 round-border">
      <h4 className="m-3">Interests</h4>
      <Row>
        <Col xs={6}>
          <Interes img="https://1.bp.blogspot.com/-eU7qFWO8hs0/UftM0CT_psI/AAAAAAAADQs/8PaO7YCo_dw/s1600/Procter-and-Gamble-celebro-Semana-de-la-Solidaridad_9759.jpg" title="Procter & Gamble" folowers="5.828.777  followers" />
        </Col>
        <Col xs={6}>
          <Interes
            img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fksusentinel.com%2Fwp-content%2Fuploads%2F2021%2F04%2FIOT-Medical-Devices-Market-390x220.jpg&f=1&nofb=1"
            title="Medical Device Opportunity"
            members="237.532  members"
          />
        </Col>
        <Col xs={6}>
          <Interes img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2Fthumb%2Ff%2Fff%2FBBC_News.svg%2F1200px-BBC_News.svg.png&f=1&nofb=1" title="BBC News" folowers="7.629.416 followers" />
        </Col>
        <Col xs={6}>
          <Interes
            img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Facademicncareer.study%2Fimg%2Fpage-img%2Fmedical-imaging01.jpg&f=1&nofb=1"
            title="Medical Imaging Technology Global Research"
            members="908  members"
          />
        </Col>
        <Col xs={6}>
          <Interes img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.swedentips.se%2F2016%2F05%2Fkth_school_of_architecture_07.jpg&f=1&nofb=1" title="KTH alumni China" members="569 members" />
        </Col>
        <Col xs={6}>
          <Interes img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffocus.plural.software%2Fwp-content%2Fuploads%2F2020%2F11%2FDavid-Logo.png.png&f=1&nofb=1" title="Training Focus" members="181.693 members" />
        </Col>
      </Row>
    </div>
  );
}
