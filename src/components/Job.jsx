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
    },
  };
  componentDidMount = async () => {
    try {
      let resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/606c1c826fd22800153fdbb7/experiences",
        {
          headers: {
            Authorization:
              " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZjMWM4MjZmZDIyODAwMTUzZmRiYjciLCJpYXQiOjE2MTc3ODkxMzcsImV4cCI6MTYxODk5ODczN30.gz4UQIrTBO0py4rcV33aaDqWYrf42Amz_3ePOPzGlbw",
          },
        }
      );
      let exp = await resp.json();
      console.log(exp);
      this.setState({
        experiences: exp,
      });

      console.log(this.state.experience);
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
              <Card.Img className="w-25% img-fluid m-1" variant="left" src={this.props.img} alt={this.props.img} />
              <Card.Body className="w-75% m-1 align-item-start justify-content-start">
                <Card.Title>{experience.company}</Card.Title>
                <Card.Text>
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
