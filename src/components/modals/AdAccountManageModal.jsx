import React from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";

const AddNewAccountModal = ({ showmodal, handleClose }) => {
  return (
    <Modal
      show={showmodal}
      onHide={handleClose}
      centered
      aria-labelledby="addNewAccountLabel"
    >
      <Modal.Header closeButton>
        <Modal.Title id="addNewAccountLabel" className="mb-2">
        <h5 class="modal-title font-600 mb-2" id="addNewAccountLabel">Add New Account</h5>
        <p class="mb-0 font-12">Set up an ad account and assign users.</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="add-article-form">
          <Row>
            <Col xs={12}>
              <Form.Group className="mb-4" controlId="platform">
                <Form.Label>Platform</Form.Label>
                <Form.Select aria-label="Select platform">
                  <option>Select</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col xs={12}>
              <Form.Group className="mb-4" controlId="accountId">
                <Form.Label>Account Id</Form.Label>
                <Form.Control type="text" placeholder="Type..." />
              </Form.Group>
            </Col>
            <Col xs={12}>
              <Form.Group className="mb-4" controlId="accountName">
                <Form.Label>Account Name</Form.Label>
                <Form.Control type="text" placeholder="Type..." />
              </Form.Group>
            </Col>
            <Col xs={12}>
              <Button
                className="btn primarybtn w-100"
                onClick={() => {
                  // Add your save logic here
                  handleClose();
                }}
              >
                Save
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddNewAccountModal;
