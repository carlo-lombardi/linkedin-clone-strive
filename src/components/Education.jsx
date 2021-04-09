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
					img="http://www.carynesplin.com/wp-content/uploads/images/Harvard_Wreath_Logo_1.png"
					title="Harvard School of Law"
					subtitle="Magna Cum Laude"
					text="2010-2014"
				/>
				<p className="ml-auto">
					<FaPen />
				</p>
			</div>
			<div className=" mx-2 px-2 d-flex align-items-center">
				<Course
					img="https://wonderfulengineering.com/wp-content/uploads/2013/12/MIT-seal-wallpaper-2-610x610.png"
					title="Massachusetts Institute of Technology"
					subtitle="MBA AI Learning"
					text="2015-2018"
				/>
				<p className="ml-auto">
					<FaPen />
				</p>
			</div>
		</div>
	);
}
