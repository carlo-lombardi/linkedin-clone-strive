import React from "react";
import { Card } from "react-bootstrap";

class Course extends React.Component {
	render() {
		return (
			<div>
				<Card className="d-flex flex-row m-3 border-0 align-items-center">
					<Card.Img
						className="w-25% img-fluid m-1 max-width-img"
						variant="left"
						src={this.props.img}
						alt={this.props.img}
					/>
					<Card.Body className="w-75% m-1 align-item-start justify-content-start">
						<Card.Title>{this.props.title}</Card.Title>
						<Card.Text>
							<div>{this.props.subtitle}</div>
							<div>{this.props.text}</div>
							<div className="text-muted">{this.props.folowers}</div>
							<div className="text-muted">{this.props.members}</div>
						</Card.Text>
					</Card.Body>
				</Card>
			</div>
		);
	}
}

export default Course;
