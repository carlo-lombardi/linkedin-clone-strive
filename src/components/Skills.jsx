import React from "react";
import Skill from "./Skill";

export default function Skills() {
	return (
		<div className=" d-flex flex-column align-items-start border border-secondary rounded m-1">
			<h4 className="m-3">Skills and endorsement</h4>
			<Skill title="skill title" name="Jhon Snow" nr="7" />
			<Skill title="skill title" name="Jhon Snow" nr="5" />
			<Skill title="skill title" name="Jhon Snow" nr="3" />
			<Skill title="skill title" name="Jhon Snow" nr="2" />
		</div>
	);
}
