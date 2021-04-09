import React from "react";
import { FaPen, FaPlus } from "react-icons/fa";
import Job from "./Job";

export default function VoluntierExperience() {
	return (
		<div>
			<div className=" mx-3 px-3 d-flex   align-items-center ">
				<h4>Voluntier experience</h4>

				{/* <i class="fas fa-plus"></i> */}
				<p className="ml-auto">
					<FaPlus />
				</p>
			</div>
			<div className=" mx-3 px-3 d-flex align-items-center">
				<Job
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
