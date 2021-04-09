import React from "react";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { FaPlus, FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom"
class RecomandedItem extends React.Component {
	state = {
		follow: "false",
	};

	render() {
		return (
			<div>
				<div className="row my-1 px-3 fs-6">
					<div className="col col-2 px-2">
						<Image roundedCircle fluid src={this.props.image} alt="" />
					</div>
					<div className="col col-10 p-1 flex-column d-flex ">
						<div className="name-wrapper d-flex" style={{ lineHeight: "2px" }}>
							<Link className="no-decoration" to={`/profile/` + this.props.id}><p className="font-weight-bold text-left m-0">{`${this.props.name} ${this.props.surname}`}</p></Link>
						</div>

						<small className="text-muted text-left m-2 ">
							{this.props.title}
						</small>
						<Button
							size="sm"
							className="rounded-pill my-1 font-weight-bold"
							variant="outline-secondary"
							style={{ width: "40%" }}
							onClick={() => {
								this.state.follow === "false"
									? this.setState({ follow: "true" })
									: this.setState({ follow: "false" });
							}}
						>
							{this.state.follow === "false" ? (
								<p className="m-0">
									<FaPlus /> Follow
								</p>
							) : (
								<p className="m-0">
									<FaCheck /> Following
								</p>
							)}
						</Button>
					</div>
				</div>
			</div>
		);
	}
}
export default RecomandedItem;
