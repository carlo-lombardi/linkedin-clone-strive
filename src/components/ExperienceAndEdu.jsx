import Experience from "./Experience";
import Education from "./Education";
import VoluntierExperience from "./VoluntierExperience";

export default function ExperienceAndEdu() {
  return (
    <div className="border bg-white px-3 pt-3 my-2 round-border">
      <Experience />
      <hr />
      <Education />
      <hr />
      <VoluntierExperience />
    </div>
  );
}
