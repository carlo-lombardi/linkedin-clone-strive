import React from "react";
import { Card } from "react-bootstrap";
import { FaPen, FaPlus } from "react-icons/fa";

class Job extends React.Component {
  state = {
    experiences: [],
    experience: {
      role: "",
      company: "",
      startDate: "",
      endDate: "", //could be null
      description: "",
      area: "",
      image: "",
    },
  };
  componentDidMount = async () => {
    try {
      let resp = await fetch(
        `http://localhost:3001/profile/${this.props.userID}/experiences`
      );
      let exp = await resp.json();
      setTimeout(() => {
        this.setState({
          experiences: exp,
        });
      }, 2000);

      console.log(this.state.experiences);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        {this.state.experiences.map((experience) => (
          <>
            <Card className="d-flex flex-row m-3 border-0 align-items-center">
              <Card.Img
                className="w-25% img-fluid m-1"
                variant="left"
                src={experience.image}
                alt={experience.image}
              />
              <Card.Body className="w-75% m-1 align-item-start justify-content-start">
                <Card.Title>{experience.company}</Card.Title>
                <Card.Text>
                  <div>{experience.area}</div>
                  <div>{experience.role}</div>
                  <div>{experience.description}</div>
                  <div className="text-muted">{this.props.folowers}</div>
                  <div className="text-muted">{this.props.members}</div>
                </Card.Text>
              </Card.Body>
              <FaPen />
            </Card>
          </>
        ))}
      </div>
    );
  }
}

export default Job;
