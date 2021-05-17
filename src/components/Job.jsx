import React from "react";
import { Card } from "react-bootstrap";
import { FaPen, FaPlus } from "react-icons/fa";

function Job(props) {
  console.log("Exp from JOBs: ", props.userId);
  {
    return props.userId === undefined || null ? (
      <div></div>
    ) : (
      <div>
        {props.userId.map((experience) => (
          <>
            <Card className="d-flex flex-row m-3 border-0 align-items-center">
              <Card.Img
                className="w-25% img-fluid m-1"
                variant="left"
                src={experience.image}
                alt=""
              />
              <Card.Body className="w-75% m-1 align-item-start justify-content-start">
                <Card.Title>{experience.company}</Card.Title>
                <Card.Text>
                  <div>{experience.area}</div>
                  <div>{experience.role}</div>
                  <div>{experience.description}</div>
                  <div className="text-muted">{experience.folowers}</div>
                  <div className="text-muted">{experience.members}</div>
                </Card.Text>
              </Card.Body>
              <FaPen />
            </Card>
          </>
        ))}
      </div>
    );
  }
}

export default Job;
