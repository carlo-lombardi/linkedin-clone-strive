import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { editPost } from "../functions/functions";

export default function Example(props) {
  const [postText, setPostText] = useState(props.postText);
  async function submitEditedPost() {
    console.log(postText);
    await editPost(props.postID, props.auth, postText);
    await props.refreshData();
  }
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup>
            <FormControl
              as="textarea"
              aria-label="With textarea"
              value={postText}
              onChange={(event) => setPostText(event.target.value)}
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Cancel
          </Button>
          <Button onClick={submitEditedPost} variant="primary">
            Post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
