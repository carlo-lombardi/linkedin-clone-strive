import React from "react";
import { Card, Button } from "react-bootstrap";

export default function CardElement(props) {
	return (
		<div>
			<Card className="d-flex flex-row m-3 border-0 align-items-center">
				<Card.Img
					className="w-25% img-fluid m-1"
					variant="left"
					src={props.img}
					alt={props.img}
				/>
				<Card.Body className="w-75% m-1 align-item-start justify-content-start">
					<Card.Title>{props.title}</Card.Title>
					<Card.Text>
						<p>{props.subtitle}</p>
						<p>{props.text}</p>
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
}
