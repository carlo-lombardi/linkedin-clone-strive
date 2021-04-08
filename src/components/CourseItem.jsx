import React from "react";

export default function CourseItem(props) {
	return (
		<div className="m-1">
			<h6 className="m-0">{props.title}</h6>
			<small className="text-muted m-0">
				{props.author} | {props.description}
			</small>
		</div>
	);
}
