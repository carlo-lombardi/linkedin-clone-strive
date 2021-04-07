import Experience from "./Experience";
import Education from "./Education";
import VoluntierExperience from "./VoluntierExperience";

export default function ExperienceAndEdu() {
  return (
    <div className="border border-secondary rounded m-1 bg-white">
      <Experience />
      <hr />
      <Education />
      <hr />
      <VoluntierExperience />
    </div>
  );
}
