import React from "react";
import { Button, Image } from "react-bootstrap";
import { HiOutlinePhotograph } from "react-icons/hi"
import { ImCalendar, ImPlay } from "react-icons/im"
import { RiArticleFill } from "react-icons/ri"

export default (props) => {
  return (
    <div className="bg-white border px-3" style={{ borderRadius: "4px" }}>
      <div className="row my-2">
          <div className="col col-2 text-center"><Image src="http://via.placeholder.com/48x48" style={{ borderRadius: "24px" }}></Image></div>
          <div className="col col-10"><Button className="w-100 h-100 text-left" variant="light" style={{ "border": '1px solid lightgrey' , "borderRadius": "10px" }}>Start a post</Button></div>
      </div>
      <div className="row my-2">
          <div className="col"><Button className="text-nowrap" variant="light"><HiOutlinePhotograph className="post-icons photo-icon"/>Photo</Button></div>
          <div className="col"><Button className="text-nowrap" variant="light"><ImPlay className="post-icons video-icon"/>Video</Button></div>
          <div className="col"><Button className="text-nowrap" variant="light"><ImCalendar className="post-icons event-icon"/>Event</Button></div>
          <div className="col"><Button className="text-nowrap" variant="light"><RiArticleFill className="post-icons article-icon"/>Write Article</Button></div>
      </div>
    </div>
  );
};
