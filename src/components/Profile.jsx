import ExperienceAndEdu from "./ExperienceAndEdu";
import Skills from "./Skills";
import Acomplishments from "./Acomplishments";
import Interests from "./Interests";
import LearningColumn from "./LearningColumn";
import PeopleColumn from "./PeopleColumn";
export default function Profile() {
	return (
		<div className="container bg-light">
			<div className="row vh-100">
				<div className="left col d-flex flex-column bg-warning col-12 col-lg-8 px-2">
					{/* components on left go here */}
					<ExperienceAndEdu />
					<Skills />
					<Acomplishments />
					<Interests />
				</div>
				<div className="right col d-flex flex-column bg-light col-12 col-lg-4 px-2">
					<PeopleColumn className="mb-2" />
					<LearningColumn className="mb-2" />
				</div>
			</div>
			<div className="row">{/* footer goes here */}</div>
		</div>
	);
}
