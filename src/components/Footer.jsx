import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import {
	FaCog,
	FaQuestionCircle,
	FaLinkedin,
	FaAngleDown,
} from "react-icons/fa";

export default function Footer() {
	return (
		<div>
			<div>
				<h4 className="text-primary pl-5">
					Linked
					<FaLinkedin />
				</h4>
			</div>
			<div className="fs-6 fw-bold text-muted d-flex">
				<div className=" xs-2 p-5">
					<p>About</p>
					<p>Community Guidelines</p>
					<p>
						Privacy & Terms <FaAngleDown />
					</p>
					<p>Sales Solution</p>
				</div>
				<div className="xs-2 p-5">
					<p>Accessibility</p>
					<p>Careers</p>
					<p>Ad Choices</p>
					<p>Mobile</p>
				</div>
				<div className="xs-2 p-5">
					<p>Talent Solutions</p>
					<p>Marketing Solutions</p>
					<p>Advertising</p>
					<p>Small Business</p>
				</div>
				<div className="p-5 xs-3">
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
				</div>
				<div className="p-5 xs-3">
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
				</div>
			</div>
		</div>
	);
}
