import React from "react";
import { AiFillHome } from "react-icons/ai";
import {
  FaBell,
  FaLinkedin,
  FaSign,
  FaUserCircle,
  FaUserFriends,
} from "react-icons/fa";
import { BsFillBriefcaseFill, BsFillChatDotsFill } from "react-icons/bs";
import { ImSearch } from "react-icons/im";
import { CgMenuGridR } from "react-icons/cg";
import {
  Container,
  Form,
  FormControl,
  InputGroup,
  ListGroup,
  Navbar,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar({ userId }) {
  return (
    <Navbar className="p-0" bg="light" expand="lg">
      <Row className="mx-auto flex-row">
        <Container className="flex-row justify-content-start">
          <Navbar.Brand href="#home" className="mr-1">
            <FaLinkedin id="brand_logo" />
          </Navbar.Brand>
          <Form className="my-2 mr-5">
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">
                  <ImSearch />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Form>
        </Container>
        <Container className="ml-5 my-2">
          <ListGroup className="flex-row">
            <ListGroup.Item className="p-0 mx-2 navItems">
              <Container className="mx-3 p-0 flex-column">
                <Link to="/home">
                  <AiFillHome className="navIcons" />
                </Link>

                <Link to="/home" className="navText">
                  Home
                </Link>
              </Container>
            </ListGroup.Item>
            <ListGroup.Item className="p-0 mx-2 navItems">
              <Container className="mx-3 p-0 flex-column">
                <FaUserFriends className="navIcons" />
                <span className="navText">My Network</span>
              </Container>
            </ListGroup.Item>
            <ListGroup.Item className="p-0 mx-2 navItems">
              <Container className="mx-3 p-0 flex-column">
                <BsFillBriefcaseFill className="navIcons" />
                <span className="navText">Jobs</span>
              </Container>
            </ListGroup.Item>
            <ListGroup.Item className="p-0 mx-2 navItems">
              <Container className="mx-3 p-0 flex-column">
                <BsFillChatDotsFill className="navIcons" />
                <span className="navText">Messaging</span>
              </Container>
            </ListGroup.Item>
            <ListGroup.Item className="p-0 mx-2 navItems">
              <Container className="mx-3 p-0 flex-column">
                <FaBell className="navIcons" />
                <span className="navText">Notifications</span>
              </Container>
            </ListGroup.Item>
            <ListGroup.Item className="p-0 mx-2 navItems">
              <Link to={`/profile/` + userId}>
                <Container className="mx-3 p-0 flex-column">
                  <FaUserCircle className="navIcons" />
                  <span className="navText">Me</span>
                </Container>
              </Link>
            </ListGroup.Item>
            {localStorage.getItem("token") === null ? (
              <></>
            ) : (
              <ListGroup.Item className="p-0 mx-2 navItems">
                <Link to={"/"} onClick={() => localStorage.clear()}>
                  <Container className="mx-3 p-0 flex-column">
                    <FaUserCircle className="navIcons" />
                    <span className="navText">Sign Out</span>
                  </Container>
                </Link>
              </ListGroup.Item>
            )}
            <ListGroup.Item className="p-0 mx-2 navItems">
              <Container className="mx-3 p-0 flex-column">
                <CgMenuGridR className="navIcons" />
                <span className="navText">Work</span>
              </Container>
            </ListGroup.Item>
            <ListGroup.Item className="p-0 mx-2 navItems">
              <Container className="mx-3 p-0 flex-column">
                <FaSign className="navIcons" />
                <span className="navText">Hire</span>
              </Container>
            </ListGroup.Item>
          </ListGroup>
        </Container>
      </Row>
    </Navbar>
  );
}
