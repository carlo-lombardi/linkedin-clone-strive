import React from "react";
import { FaPen, FaPlus } from "react-icons/fa";
import Job from "./Job";

export default function VoluntierExperience() {
	return (
		<div>
			<div className=" mx-1 px-1 d-flex   align-items-center ">
				<h4>Volunteer Experience</h4>

				{/* <i class="fas fa-plus"></i> */}
				<p className="ml-auto">
					<FaPlus />
				</p>
			</div>
			<div className=" mx-2 px-2 d-flex align-items-center">
				<Job
					img="https://dittytv.com/wp-content/uploads/2015/05/Facebook-Logo-PNG.png"
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
