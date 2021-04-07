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
export default function Profile() {
  return (
    <div className="container">
      <div className="row">
        <div className="left col d-flex flex-column col-12 col-lg-8 px-2">
          {/* components on left go here */}
          <Header />
          <Highlights />
          <Activity />
          <ExperienceAndEdu />
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
