import React from "react";

export default function Skill(props) {
	return (
		<div className="d-flex flex-column align-items-start mx-2 px-4">
			<h5>
				{props.title}-{props.nr}
			</h5>
			<p>
				{props.name} and {props.nr - 1} conection have given endorsements for
				this skill
			</p>
		</div>
	);
}
