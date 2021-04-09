import React from "react";
import Skill from "./Skill";

export default function Skills() {
  return (
    <div className=" d-flex flex-column align-items-start border bg-white px-3 py-3 round-border">
      <h4 className="m-3">Skills and endorsements</h4>
      <Skill title="ReactJS" name="Jon Snow" nr="7" />
      <Skill title="Python" name="Carl Johnson" nr="5" />
      <Skill title="Photoshop CS" name="Stan Marsh" nr="3" />
      <Skill title="Sony Vegas" name="Donaldo Trumpo" nr="2" />
    </div>
  );
}
