import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { FaCog, FaQuestionCircle, FaLinkedin } from "react-icons/fa";

export default function Footer() {
	return (
		<Container>
			<Row>
				<h5 className="text-primary pl-5">
					Linked
					<FaLinkedin />
				</h5>
			</Row>
			<Row className="fs-6 fw-bold text-muted">
				<Col xs={2} className="p-5">
					<p>About</p>
					<p>Community Guidelines</p>
					<p>Privacy & Terms</p>
					<p>Sales Solution</p>
				</Col>
				<Col xs={2} className="p-5">
					<p>Accessibility</p>
					<p>Careers</p>
					<p>Ad Choices</p>
					<p>Mobile</p>
				</Col>
				<Col xs={2} className="p-5">
					<p>Talent Solutions</p>
					<p>Marketing Solutions</p>
					<p>Advertising</p>
					<p>Small Business</p>
				</Col>
				<Col xs={3} className="p-5">
					<div className="pb-5">
						<p className="mb-0">
							<FaQuestionCircle />
							Question ?
						</p>
						<small>Visit our Help Center</small>
					</div>
					<div>
						<p className="mb-0">
							<FaCog /> Manage your account and privacy
						</p>
						<small>Go to your seting</small>
					</div>
				</Col>
				<Col xs={3} className="p-5">
					<div>
						<Form.Group controlId="exampleForm.ControlSelect1">
							<Form.Label>Select Language</Form.Label>
							<Form.Control as="select">
								<option>English (English)</option>
								<option>Italiano (Italian)</option>
								<option>Polski (Polish)</option>
								<option>Deutsch (German)</option>
								<option>Francais (French)</option>
								<option>Romana (Roumanian)</option>
								<option>Svensk (Swedish)</option>
								<option>Turkce (Turkish)</option>
								<option>Nederlands (Dutch)</option>
							</Form.Control>
						</Form.Group>
					</div>
				</Col>
			</Row>
		</Container>
	);
}
