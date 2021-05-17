import Experience from "./Experience";
import Education from "./Education";
import VoluntierExperience from "./VoluntierExperience";
import { propTypes } from "react-bootstrap/esm/Image";

export default function ExperienceAndEdu({ userId }) {
  return (
    <div className="border bg-white px-3 pt-3 my-2 round-border">
      <Experience userID={userId} />
      <hr />
      <Education />
      <hr />
      <VoluntierExperience userId={userId} />
    </div>
  );
}
