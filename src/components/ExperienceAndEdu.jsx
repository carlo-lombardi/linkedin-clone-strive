import Experience from "./Experience";
import Education from "./Education";
import VoluntierExperience from "./VoluntierExperience";

export default function ExperienceAndEdu() {
	return (
		<div className="border border-secondary rounded">
			<Experience />
			<hr />
			<Education />
			<hr />
			<VoluntierExperience />
		</div>
	);
}
