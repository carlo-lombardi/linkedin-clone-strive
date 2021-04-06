import React from "react";
import { Button } from "react-bootstrap";
import { FaPen, FaPlus } from "react-icons/fa";
import CardElement from "./CardElement";

export default function Experience() {
	return (
		<div>
			<div className=" m-3 d-flex   align-items-center ">
				<h4>Experience</h4>

				{/* <i class="fas fa-plus"></i> */}
				<p className="ml-auto">
					<FaPlus />
				</p>
			</div>
			<div className=" m-3 d-flex align-items-center">
				<CardElement
					img="https://via.placeholder.com/100"
					title="job title"
					subtitle="job description"
					text="job duration"
				/>
				<p className="ml-auto">
					<FaPen />
				</p>
			</div>
			<div className=" m-3 d-flex align-items-center">
				<CardElement
					img="https://via.placeholder.com/100"
					title="job title"
					subtitle="job description"
					text="job duration"
				/>
				<p className="ml-auto">
					<FaPen />
				</p>
			</div>
		</div>
	);
}
