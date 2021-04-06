import React from "react";
import CardElement from "./CardElement";
import { FaPen, FaPlus } from "react-icons/fa";

export default function Education() {
	return (
		<div>
			<div className=" m-3 d-flex   align-items-center ">
				<h3>Education</h3>

				{/* <i class="fas fa-plus"></i> */}
				<p className="ml-auto">
					<FaPlus />
				</p>
			</div>
			<div className=" m-3 d-flex align-items-center">
				<CardElement
					img="school img"
					title="course title"
					subtitle="course description"
					text="course duration"
				/>
				<p className="ml-auto">
					<FaPen />
				</p>
			</div>
			<div className=" m-3 d-flex align-items-center">
				<CardElement
					img="school img"
					title="course title"
					subtitle="course description"
					text="course duration"
				/>
				<p className="ml-auto">
					<FaPen />
				</p>
			</div>
		</div>
	);
}
