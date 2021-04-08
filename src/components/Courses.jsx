import React from "react";
import { FaArrowRight, FaInfoCircle } from "react-icons/fa";
import CourseItem from "./CourseItem";

export default function Courses() {
	return (
		<div className="p-3 my-2 border bg-white " style={{ borderRadius: "4px" }}>
			<div className="d-flex justify-content-between">
				<h5 className="mt-2 text-left">Today's most viewed courses</h5>
				<p className="my-2">
					<FaInfoCircle />
				</p>
			</div>
			<ol className="d-flex flex-column my-4">
				<li style={{ fontWeight: "bold" }}>
					<CourseItem
						title="The Six Morning Habits Of Hight Perfor..."
						author="Pete Mockaitis"
						description="How to Be Awesome at Your J..."
					/>
				</li>
				<li style={{ fontWeight: "bold" }}>
					<CourseItem
						title="Speaking Confidently and Effectively"
						author="Pete Mockaitis"
						description="How to Be Awesome at Your J..."
					/>
				</li>
				<li style={{ fontWeight: "bold" }}>
					<CourseItem title="Building Resilience" author="Tatiana Kolovou" />
				</li>
			</ol>
			<div>
				<p>
					Show more on LinkedIn Learning <FaArrowRight />
				</p>
			</div>
		</div>
	);
}
