import { useState, useEffect } from "react";
import { getProfileById } from "../functions/functions";
import ExperienceAndEdu from "./ExperienceAndEdu";
import Skills from "./Skills";
import Acomplishments from "./Acomplishments";
import Interests from "./Interests";
import LearningColumn from "./LearningColumn";
import PeopleColumn from "./PeopleColumn";
import Header from "./Header";
import Highlights from "./Highlights";
import Activity from "./Activity";
import Footer from "./Footer";
const auth =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZjMWE0NjZmZDIyODAwMTUzZmRiYjIiLCJpYXQiOjE2MTc2OTczNTEsImV4cCI6MTYxODkwNjk1MX0.z50JfhhjKZpYGwCvaA1tJAjx8DT5qtEdJK-7K47cYAw";
export default function Profile(props) {
  const [profileData, updateProfileData] = useState("");
  useEffect(async () => {
    updateProfileData(await getProfileById(props.match.params.profileID));
  }, [props.match.params.profileID]);
  return (
    <div className="container">
      <div className="row">
        <div className="left col d-flex flex-column col-12 col-lg-8 px-2 py-2">
          {/* components on left go here */}
          <Header
            userID={profileData._id}
            name={profileData.name}
            surname={profileData.surname}
            email={profileData.email}
            title={profileData.title}
            area={profileData.area}
            bio={profileData.bio}
            image={profileData.image}
          />
          <Highlights />
          <Activity />
          <ExperienceAndEdu userID={profileData._id} />
          <Skills />
          <Acomplishments />
          <Interests />
        </div>
        <div className="right col d-flex flex-column col-12 col-lg-4 px-2">
          <PeopleColumn className="mb-2" />
          <LearningColumn className="mb-2" />
        </div>
      </div>
      <div className="row">
        <Footer />
      </div>
    </div>
  );
}
