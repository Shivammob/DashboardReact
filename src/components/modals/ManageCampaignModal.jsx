import React from "react";
import { Col, Form, Modal, Row } from "react-bootstrap";

function ManageCampaignModal({ showmodal, handleClose }) {
  return (
    <>
      <Modal
        show={showmodal}
        onHide={handleClose}
        centered
        aria-labelledby="addCampaign"
        className="account-modal mangecamp-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title id="addCampaign">
            <h5 className="modal-title font-600 mb-1">Add Campaign</h5>
            <p className="font-12 mb-0 font-400">Create a new campaign effortlessly.</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="add-article-form">
            <Row className="">
              <Col xs={12}>
                <Form.Group className="mb-4" controlId="platform">
                  <Form.Label>Platform</Form.Label>
                  <Form.Select aria-label="Select Platform">
                    <option>Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col xs={12}>
                <Form.Group className="mb-4" controlId="selectaccount">
                  <Form.Label>Select Account</Form.Label>
                  <Form.Select aria-label="Select Account">
                    <option>Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col xs={12}>
                <Form.Group className="mb-4" controlId="campaignID">
                  <Form.Label>Campaign ID</Form.Label>
                  <Form.Control type="text" placeholder="Type..." />
                </Form.Group>
              </Col>
              <Col xs={12}>
                <Form.Group className="mb-4" controlId="campaignName">
                  <Form.Label>Campaign Name</Form.Label>
                  <Form.Control type="text" placeholder="Type..." />
                </Form.Group>
              </Col>
              <Col xs={12} className="mb-4">
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="btn primarybtn w-100"
                >
                  Save
                </a>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ManageCampaignModal;
