import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";

class Header extends React.Component {
  state = {
    isLoading: false,
    isError: false,
    user: [],
  };

  componentDidMount = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/606d93759f7fce00153ad1d0",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZkOTM3NTlmN2ZjZTAwMTUzYWQxZDAiLCJpYXQiOjE2MTc3OTM5MTAsImV4cCI6MTYxOTAwMzUxMH0.drHNeuAuRKP7Hh2ong_ccbm0uDVmCwNa8CZNE5DF5Z8",
          },
        }
      );
      console.log(response);
      if (response.ok) {
        let user = await response.json();
        this.setState({
          user,
        });
        console.log(user);
      } else {
        this.setState({
          isLoading: false,
          isError: true,
        });
      }
    } catch (error) {
      this.setState({
        isLoading: false,
        isError: true,
      });
      console.log(error);
    }
  };

  render() {
    return (
      <Container>
        <Container className="header col-9 ml-0 my-2">
          <Row
            style={{
              background: "rgb(34,193,195)",
              background:
                "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
              width: "830px",
              height: "195px",
              "border-top-left-radius": "10px",
              "border-top-right-radius": "10px",
            }}
          ></Row>
          <Row className="justify-content-end mb-5">
            <Image className="profile" src={this.state.user.image}></Image>
            <Button className="headerButton mr-3 my-3" variant="primary">
              Connect
            </Button>
            <Button
              className="headerButton mr-3 my-3"
              variant="outline-secondary"
            >
              Message
            </Button>
            <Button className="headerButton mr-3 my-3" variant="light">
              ...
            </Button>
          </Row>
          <Row className="px-3">
            <Col className="flex-column">
              <p>
                {this.state.user.name} {this.state.user.surname}
              </p>
              <p>{this.state.user.title}</p>
              <p>{this.state.user.area}</p>
            </Col>
            <Col className="flex-column">
              <p>{this.state.user.bio}</p>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default Header;
