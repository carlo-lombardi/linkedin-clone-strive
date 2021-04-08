import React from "react";
import { BsPlus } from "react-icons/bs";

export default (props) => {
  return (
    <div className="bg-white border" style={{ borderRadius: "4px" }}>
      <div className="px-2 mt-1">
        <a href="#" className="no-decoration small-text">
          Groups
        </a>
      </div>
      <div className="d-flex justify-content-between px-2 my-1">
        <a href="#" className="no-decoration small-text">
          Events
        </a>
        <BsPlus className="shade" style={{ borderRadius: "10px" }}/>
      </div>
      <div className="px-2">
        <a href="#" className="no-decoration small-text">
          Followed Hashtags
        </a>
      </div>
      <div className="border-top text-center">
        <a href="#" className="no-decoration small-text text-dark">
          Discover more
        </a>
      </div>
    </div>
  );
};
