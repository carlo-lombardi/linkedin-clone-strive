import React from "react";
import Course from "./Course";
import { FaPen, FaPlus } from "react-icons/fa";

export default function Education() {
	return (
		<div>
			<div className=" mx-1 px-1 d-flex   align-items-center ">
				<h4>Education</h4>

				{/* <i class="fas fa-plus"></i> */}
				<p className="ml-auto">
					<FaPlus />
				</p>
			</div>
			<div className=" mx-2 px-2 d-flex align-items-center">
				<Course
					img="https://via.placeholder.com/100"
					title="course title"
					subtitle="course description"
					text="course duration"
				/>
				<p className="ml-auto">
					<FaPen />
				</p>
			</div>
			<div className=" mx-2 px-2 d-flex align-items-center">
				<Course
					img="https://via.placeholder.com/100"
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
