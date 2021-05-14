import React from "react";
import { useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineFilePdf, AiOutlineEdit } from "react-icons/ai";
import { GrDocumentCsv } from "react-icons/gr";
import EditProfileModal from "./EditProfileModal";

export default function (props) {
  console.log("name in header", props.name);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="d-flex flex-column position-relative border bg-white h-100 round-border">
      <div className="h-50">
        <Image className="h-100 w-100" src="https://picsum.photos/750/200" />
      </div>
      <div className="h-50">
        <div className="d-flex justify-content-end align-items-center m-3 mx-4">
          <Button
            className="mx-2 font-weight-bold"
            variant="outline-dark"
            style={{ borderRadius: "20px" }}
            onClick={handleShow}
          >
            Edit Profile
            <AiOutlineEdit size={22} />
          </Button>
          <Button
            className="mx-2 font-weight-bold"
            variant="primary"
            style={{ borderRadius: "20px" }}
          >
            Connect
          </Button>
          <Button
            className="mx-2 font-weight-bold"
            variant="outline-dark"
            style={{ borderRadius: "20px" }}
          >
            Message
          </Button>
          <a href={`http://localhost:3001/profile/${props.userID}/cv`}>
            <AiOutlineFilePdf
              className="mx-1"
              size={35}
              style={{ cursor: "pointer" }}
            />
          </a>
          <a
            href={`http://localhost:3001/profile/${props.userID}/experiences/CSV`}
          >
            <GrDocumentCsv
              className="mx-1"
              size={30}
              style={{ cursor: "pointer" }}
            />
          </a>
        </div>
        <div className="d-flex p-3 justify-content-between">
          <div className="d-flex flex-column">
            <h5>
              {props.name} {props.surname}
            </h5>
            <h6>{props.title}</h6>
            <p>
              {props.area} <span>500+ connections · </span>
              <span className="text-primary font-weight-bold">
                Contact info
              </span>
            </p>
          </div>
          <div className="d-flex flex-column">
            <div className="d-flex align-items-center">
              <Image
                fluid
                className="mx-2"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Huawei_Standard_logo.svg/1200px-Huawei_Standard_logo.svg.png"
                style={{ height: "40px" }}
              />
              <p className="font-weight-bold mt-2">Huawei</p>
            </div>
            <div className="d-flex align-items-center">
              <Image
                fluid
                className="mx-2"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/1200px-Facebook_icon.svg.png"
                style={{ height: "40px" }}
              />
              <p className="font-weight-bold mt-2">Facebook</p>
            </div>
          </div>
        </div>
      </div>
      <Image
        roundedCircle
        className="position-absolute border"
        src={props.image}
        style={{ top: "30%", left: "2%", height: "150px" }}
      />
      <EditProfileModal
        show={show}
        handleShow={handleShow}
        handleClose={handleClose}
        userID={props.userID}
        name={props.name}
        surname={props.surname}
        email={props.email}
        bio={props.title}
        area={props.area}
        username={props.username}
        title={props.title}
        refreshData={props.refreshData}
      />
    </div>
  );
}
