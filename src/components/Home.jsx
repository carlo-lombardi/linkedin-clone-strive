import Recomandation from "./Recomandation";
import Courses from "./Courses";
import FooterLinks from "./FooterLinks";

import PostsContainer from "./PostsContainer";
import { useState, useEffect } from "react";
import { getAllPosts, getProfileById } from "../functions/functions";
import UserInfo from "./UserInfo";
import Discover from "./Discover";
import CreatePost from "./CreatePost";
const userID = "606c1a466fd22800153fdbb2";
const auth =
	"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZjMWE0NjZmZDIyODAwMTUzZmRiYjIiLCJpYXQiOjE2MTc2OTczNTEsImV4cCI6MTYxODkwNjk1MX0.z50JfhhjKZpYGwCvaA1tJAjx8DT5qtEdJK-7K47cYAw";
export default function Home() {
	const [data, updateData] = useState([]);
	const [profileData, updateProfileData] = useState("");
	async function fetchData() {
		updateData(await getAllPosts(auth));
	}
	useEffect(async () => {
		fetchData();
		updateProfileData(await getProfileById(userID, auth));
	}, []);
	console.log("profiledata on home", profileData);
	return (
		<div className="container">
			<div className="row vh-100 pt-2">
				<div className="left col d-none col-12 d-lg-block col-md-2 px-0 mt-2">
					{/* left columns go here */}
					<UserInfo profileData={profileData} />
					<Discover />
				</div>
				<div className="mid col-12 col-md-6 mt-2">
					{/* mid columns go here  */}
					<CreatePost
						profileData={profileData}
						refreshData={fetchData}
						userID={userID}
						auth={auth}
					/>
					<PostsContainer
						postsData={data}
						refreshData={fetchData}
						auth={auth}
					/>
				</div>
				<div className="right col col-12 col-md-4">
					{/* right columns go here */}
					<Recomandation />
					<Courses />
					<FooterLinks />
				</div>
			</div>
		</div>
	);
}
