import React from "react";
import { FaAngleDown, FaLinkedin, FaRegCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function FooterLinks() {
	return (
		<div
			className="px-5 my-2  border bg-white text-center round-border"
			style={{ textSize: "1" }}
		>
			<small className="m-2">
				<Link to="#" className="text-muted">
					About
				</Link>
			</small>
			<small className="m-2">
				<Link to="#" className="text-muted">
					Accessibility
				</Link>
			</small>
			<small className="m-2">
				<Link to="#" className="text-muted">
					Help Center
				</Link>
			</small>

			<small className="m-2">
				<Link to="#" className="text-muted">
					Privacy & Terms <FaAngleDown />
				</Link>
			</small>
			<small className="m-2">
				<Link to="#" className="text-muted">
					Ad Choices
				</Link>
			</small>
			<small className="m-2">
				<Link to="#" className="text-muted">
					Advertising
				</Link>
			</small>
			<small className="m-2">
				<Link to="#" className="text-muted">
					Business Services <FaAngleDown />
				</Link>
			</small>
			<small className="m-2">
				<Link to="#" className="text-muted">
					Get the LinkedIn App
				</Link>
			</small>
			<small className="m-2">
				<Link to="#" className="text-muted">
					More
				</Link>
			</small>
			<div>
				<small className="text-primary">
					Linked
					<FaLinkedin />
				</small>
				<small className="text-reset">
					LinkedIn Corporation <FaRegCopyright /> 2021
				</small>
			</div>
		</div>
	);
}
