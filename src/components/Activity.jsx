import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import ActivityItem from "./ActivityItem";

export default function Activity(props) {
  return (
    <div className="border bg-white px-3 pt-3" style={{ borderRadius: "4px" }}>
      <h4>Activity</h4>
      <div className="row row-cols-1 row-cols-md-2 mt-4 border-bottom">
        <ActivityItem text="Game of as rest time eyes with of this it" image="https://picsum.photos/seed/2/30/30" />
        <ActivityItem text="Add was music merry any truth since going" image="https://picsum.photos/seed/3/30/30" />
        <ActivityItem
          text="Happiness she ham but instantly put departure propriety"
          image="https://picsum.photos/seed/4/30/30"
        />
        <ActivityItem
          text="She amiable all without say spirits shy clothes morning"
          image="https://picsum.photos/seed/1/30/30"
        />
      </div>
      <p className="text-center text-muted font-weight-bold d-flex align-items-center justify-content-center p-2">
        See all activity
      </p>
    </div>
  );
}
