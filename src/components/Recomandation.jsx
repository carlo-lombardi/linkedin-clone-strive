import RecomandedItem from "./RecomandedItem";
import { getAllProfiles } from "../functions/functions";
import { useState, useEffect } from "react";

import { FaArrowRight, FaInfoCircle } from "react-icons/fa";
const auth =
	"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZjMWE0NjZmZDIyODAwMTUzZmRiYjIiLCJpYXQiOjE2MTc2OTczNTEsImV4cCI6MTYxODkwNjk1MX0.z50JfhhjKZpYGwCvaA1tJAjx8DT5qtEdJK-7K47cYAw";

export default function Recomandation() {
	const [profilesData, updateProfilesData] = useState([]);
	useEffect(async () => {
		updateProfilesData(await getAllProfiles(auth));
	}, []);
	console.log("profilesData", profilesData);
	function mapProfiles(limit) {
		return profilesData.slice(101, limit).map((profile) => {
			return (
				<RecomandedItem
					key={profile._id}
					id={profile._id}
					image={profile.image}
					name={profile.name}
					surname={profile.surname}
					title={profile.title}
				/>
			);
		});
	}
	return (
		<div className="p-3 my-2 border bg-white round-border">
			<div className="d-flex justify-content-between">
				<h5 className="mt-2 text-left">Add to your feed</h5>
				<p className="my-2">
					<FaInfoCircle />
				</p>
			</div>
			<div className="d-flex flex-column my-4">{mapProfiles(104)}</div>
			<div>
				<p className="mb-0">
					View all recommendations  <FaArrowRight />
				</p>
			</div>
		</div>
	);
}
