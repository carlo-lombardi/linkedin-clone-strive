import React from "react";
import { Button, Image } from "react-bootstrap";
import { HiOutlinePhotograph } from "react-icons/hi";
import { ImCalendar, ImPlay } from "react-icons/im";
import { RiArticleFill } from "react-icons/ri";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { useState } from "react";
import { submitPost } from "../functions/functions";

export default (props) => {
  const [postText, setPostText] = useState("");
  async function handleSubmit(event) {
    if (event.key === "Enter" && postText !== "") {
      event.target.value = "";
      console.log("trying to submit");
      await submitPost(props.auth, postText);
      await props.refreshData();
    }
  }
  return (
    <div className="bg-white border px-3 round-border">
      <div className="row my-2">
        <div className="col col-2 text-center">
          <Image src={props.profileData.image} style={{ borderRadius: "24px", height: "48px", width: "48px" }}></Image>
        </div>
        <div className="col col-10">
          <InputGroup
            className="w-100 h-100 text-left"
            variant="light"
            style={{ border: "1px solid lightgrey", borderRadius: "10px" }}
          >
            <FormControl
              as="textarea"
              aria-label="With textarea"
              onChange={(event) => {
                setPostText(event.target.value.trim());
              }}
              onKeyDown={(event) => {
                handleSubmit(event);
              }}
            />
          </InputGroup>
        </div>
      </div>
      <div className="row my-2">
        <div className="col">
          <Button className="text-nowrap" variant="light">
            <HiOutlinePhotograph className="post-icons photo-icon" />
            Photo
          </Button>
        </div>
        <div className="col">
          <Button className="text-nowrap" variant="light">
            <ImPlay className="post-icons video-icon" />
            Video
          </Button>
        </div>
        <div className="col">
          <Button className="text-nowrap" variant="light">
            <ImCalendar className="post-icons event-icon" />
            Event
          </Button>
        </div>
        <div className="col">
          <Button className="text-nowrap" variant="light">
            <RiArticleFill className="post-icons article-icon" />
            Write Article
          </Button>
        </div>
      </div>
    </div>
  );
};
