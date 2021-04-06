import ExperienceAndEdu from "./ExperienceAndEdu";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function () {
	return (
		<Container>
			<h1>Profile</h1>

			<Row>
				<Col>
					<ExperienceAndEdu />
				</Col>
			</Row>
		</Container>
	);
}
