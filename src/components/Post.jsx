import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { BsThreeDots } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { BiShare } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";
import { deletePost } from "../functions/functions";
import { Link } from "react-router-dom";
import EditPostModal from "./EditPostModal";
import { useState } from "react";

const currentUserID = "606c1a466fd22800153fdbb2";

function timeSince(date) {
  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes";
  }
  return Math.floor(seconds) + " seconds";
}

export default function Post(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDelete = async (event) => {
    await deletePost(event.currentTarget.id, props.auth);
    await props.refreshData();
  };
  const postDate = new Date(props.updatedTime);
  const nowDate = new Date(Date.now());
  return (
    <div className="p-3 my-2 bg-white border round-border">
      <div className="d-flex justify-content-between align-items-center my-2 mb-3">
        <Link className="d-flex text-decoration-none" style={{ color: "black" }} to={`/profile/` + props.userID}>
          <Image roundedCircle className="mr-3" src={props.image} style={{ height: "50px", width: "50px" }} />
          <div className="d-flex flex-column">
            <h6>{props.name + " " + props.surname}</h6>
            <small>@{props.username}</small>
            <small>{timeSince(nowDate - postDate)}</small>
          </div>
        </Link>
        <div>
          {currentUserID === props.userID && (
            <Button variant="link" className="p-0 m-0" style={{ color: "black" }} onClick={handleShow}>
              <BiEdit style={{ transform: "scale(1.5)" }} className="mx-2" />
            </Button>
          )}
          <EditPostModal
            show={show}
            handleShow={handleShow}
            handleClose={handleClose}
            postID={props.id}
            postText={props.text}
            refreshData={props.refreshData}
            auth={props.auth}
          />

          {currentUserID === props.userID && (
            <Button
              variant="link"
              className="p-0 m-0"
              style={{ color: "black" }}
              id={props.id}
              onClick={(e) => {
                handleDelete(e);
              }}
            >
              <BsTrash style={{ transform: "scale(1.5)" }} className="mx-2" />
            </Button>
          )}
          <Button variant="link" className="p-0 m-0" style={{ color: "black" }}>
            <BsThreeDots style={{ transform: "scale(1.5)" }} className="mx-2" />
          </Button>
        </div>
      </div>
      <p className="w-100 text-break">{props.text}</p>
      {props.postImage && <img src={props.postImage} alt="" className="w-100" />}

      <div className="border-top pt-3 d-flex ">
        <p className="d-flex align-items-center mr-3 ml-2 mb-0">
          <AiOutlineLike style={{ transform: "scale(1.8)" }} className="mr-3" />
          Like
        </p>
        <p className="d-flex align-items-center mr-3 ml-2 mb-0">
          <FaRegComment style={{ transform: "scale(1.8)" }} className="mr-3" />
          Comment
        </p>
        <p className="d-flex align-items-center mr-3 ml-2 mb-0">
          <BiShare style={{ transform: "scale(1.8)" }} className="mr-3" />
          Share
        </p>
        <p className="d-flex align-items-center mr-3 ml-2 mb-0">
          <FiSend style={{ transform: "scale(1.8)" }} className="mr-3" />
          Send
        </p>
      </div>
    </div>
  );
}
