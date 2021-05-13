import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { editProfile } from "../functions/functions";

export default function Example(props) {
  const [name, setName] = useState(props.name);
  const [surname, setSurname] = useState(props.surname);
  const [email, setEmail] = useState(props.email);
  const [username, setUsername] = useState(props.username);
  const [bio, setBio] = useState(props.bio);
  const [title, setTitle] = useState(props.title);
  const [area, setArea] = useState(props.area);

  async function submitEditedProfile() {
    await editProfile(props.userID, name, surname, email, username, bio, title, area);
    props.handleClose();
    await props.refreshData();
  }
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit profile details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <InputGroup>
              <FormControl as="Input" placeholder="Enter name" value={props.name} onChange={(event) => setName(event.target.value)} />
            </InputGroup>
          </Form.Group>
          <Form.Group>
            <Form.Label>Surname</Form.Label>
            <InputGroup>
              <FormControl as="Input" placeholder="Enter surname" value={props.surname} onChange={(event) => setSurname(event.target.value)} />
            </InputGroup>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <InputGroup>
              <FormControl as="Input" type="email" placeholder="Enter email" value={props.email} onChange={(event) => setEmail(event.target.value)} />
            </InputGroup>
          </Form.Group>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <InputGroup>
              <FormControl as="Input" placeholder="Enter username" value={props.username} onChange={(event) => setUsername(event.target.value)} />
            </InputGroup>
          </Form.Group>
          <Form.Group>
            <Form.Label>Bio</Form.Label>
            <InputGroup>
              <FormControl as="Input" placeholder="Enter bio" value={props.bio} onChange={(event) => setBio(event.target.value)} />
            </InputGroup>
          </Form.Group>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <InputGroup>
              <FormControl as="Input" placeholder="Enter title" value={props.title} onChange={(event) => setTitle(event.target.value)} />
            </InputGroup>
          </Form.Group>
          <Form.Group>
            <Form.Label>Area</Form.Label>
            <InputGroup>
              <FormControl as="Input" placeholder="Enter area" value={props.area} onChange={(event) => setArea(event.target.value)} />
            </InputGroup>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Cancel
          </Button>
          <Button onClick={submitEditedProfile} variant="primary">
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
