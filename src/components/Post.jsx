import Image from "react-bootstrap/Image";
import { BsThreeDots } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { BiShare } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";

export default function Post(props) {
  return (
    <div className="p-3 my-3 bg-white border" style={{ borderRadius: "8px" }}>
      <div className="d-flex justify-content-between align-items-center my-2 mb-3">
        <div className="d-flex">
          <Image roundedCircle className="mr-3" src="https://picsum.photos/200" style={{ height: "50px" }} />
          <div className="d-flex flex-column">
            <h6>{props.name + props.surname}</h6>
            <small>{props.username}</small>
            <small>{props.updatedTime}</small>
          </div>
        </div>
        <div>
          <BiEdit style={{ transform: "scale(1.5)" }} className="mx-2" />
          <BsThreeDots style={{ transform: "scale(1.5)" }} className="mx-2" />
          <BsTrash style={{ transform: "scale(1.5)" }} className="mx-2" />
        </div>
      </div>
      <p>{props.text}</p>
      <div className="border-top pt-3 d-flex ">
        <p className="d-flex align-items-center mr-3 ml-2">
          <AiOutlineLike style={{ transform: "scale(1.8)" }} className="mr-3" />
          Like
        </p>
        <p className="d-flex align-items-center mr-3 ml-2">
          <FaRegComment style={{ transform: "scale(1.8)" }} className="mr-3" />
          Comment
        </p>
        <p className="d-flex align-items-center mr-3 ml-2">
          <BiShare style={{ transform: "scale(1.8)" }} className="mr-3" />
          Share
        </p>
        <p className="d-flex align-items-center mr-3 ml-2">
          <FiSend style={{ transform: "scale(1.8)" }} className="mr-3" />
          Send
        </p>
      </div>
    </div>
  );
}
