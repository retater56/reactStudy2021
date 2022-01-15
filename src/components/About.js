import React from "react";
import { Container, Modal, Button} from "react-bootstrap";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Container>
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>About info</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>This search work with <a href="https://www.flickr.com/" target="_blank">flickr.com</a> API</p>
          <p>Created for task : <a href="https://github.com/rolling-scopes-school/tasks/blob/master/tasks/react/react-routing.md" target="_blank">React Router</a></p>
        </Modal.Body>

        <Modal.Footer>
          <Link to='/'><Button variant="primary">Back Home</Button></Link>
        </Modal.Footer>
      </Modal.Dialog>
    </Container>
  );
};

export default About;
