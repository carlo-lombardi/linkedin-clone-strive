import React from "react";
import Job from "./Job";
import { FaPlus } from "react-icons/fa";
// import CardElement from "./Job";

export default function Experience(props) {
  return (
    <div>
      <div className=" mx-1 pt-1 d-flex align-items-center ">
        <h4>Experience</h4>

        {/* <i class="fas fa-plus"></i> */}
        <p className="ml-auto">
          <FaPlus />
        </p>
      </div>
      <div className=" mx-2 px-2 d-flex align-items-center">
        <Job userID={props.userID} />
      </div>
    </div>
  );
}
