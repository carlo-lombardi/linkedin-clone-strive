import { useState, useEffect } from "react";
import { getProfileById, getUserExperiences } from "../functions/functions";
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

export default function Profile(props) {
  const [profileData, updateProfileData] = useState([]);
  const [experiences, updateExperiences] = useState([]);
  async function fetchData() {
    const dataExp = await getUserExperiences(props.match.params.profileID);

    updateExperiences(dataExp);
    updateProfileData(await getProfileById(props.match.params.profileID));
  }
  useEffect(async () => {
    await fetchData();
  }, [props.match.params.profileID]);
  console.log("profileData in profile", profileData);
  console.log("These are the experiences", experiences);
  return (
    <div className="container">
      <div className="row">
        <div className="left col d-flex flex-column col-12 col-lg-8 px-2 py-2">
          {/* components on left go here */}
          <Header
            userId={profileData._id}
            name={profileData.name}
            surname={profileData.surname}
            email={profileData.email}
            title={profileData.title}
            area={profileData.area}
            bio={profileData.bio}
            image={profileData.image}
            username={profileData.username}
            refreshData={fetchData}
          />
          <Highlights />
          <Activity />
          <ExperienceAndEdu userId={experiences} />
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
