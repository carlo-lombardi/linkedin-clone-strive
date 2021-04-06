import ExperienceAndEdu from "./ExperienceAndEdu";
import Skills from "./Skills";
import Acomplishments from "./Acomplishments";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Profile() {
	return (
		<Container>
			<h1>Profile</h1>

			<Row>
				<Col>
					<ExperienceAndEdu />
					<Skills />
					<Acomplishments />
				</Col>
			</Row>
		</Container>
	);
}
