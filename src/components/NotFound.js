import React from "react";
import { Container, Modal, Button} from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container>
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>Error: this page not found</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Please, check your search</p>
      </Modal.Body>

      <Modal.Footer>
        <Link to='/'><Button variant="primary">Back Home</Button></Link>
      </Modal.Footer>
    </Modal.Dialog>
  </Container>
  )
}

export default NotFound;
