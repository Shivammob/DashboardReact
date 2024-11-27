import React from "react";
import { Col, Modal, Row, Form } from "react-bootstrap";

function ArticleEditorEdit({ showmodal, handleClose }) {
  return (
    <Modal show={showmodal} onHide={handleClose} centered size="lg" scrollable>
      <Modal.Header closeButton>
        <h3 className="modal-title font-600" id="editArticleLabel">
          Edit
        </h3>
      </Modal.Header>
      <Modal.Body>
        <Form className="add-article-form">
          <Row className="">
            <Col sm={6}>
              <Form.Group className="mb-4">
                <Form.Label htmlFor="title">Title</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Enter Title"
                  style={{ height: "90px" }}
                />
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group className="mb-4">
                <Form.Label htmlFor="imageUrl">Title Image URL</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Enter URL"
                  style={{ height: "90px" }}
                />
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group className="mb-4">
                <Form.Label htmlFor="description1">Description 1</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Enter Description 1"
                  style={{ height: "160px" }}
                />
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group className="mb-4">
                <Form.Label htmlFor="description2">Description 2</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Enter Description 2"
                  style={{ height: "160px" }}
                />
              </Form.Group>
            </Col>
            <Col md={12}>
              <Form.Group className="mb-4">
                <Form.Label htmlFor="pageUrl">Page URL</Form.Label>
                <Form.Control type="text" placeholder="Enter URL" />
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group className="mb-4">
                <Form.Label htmlFor="categories">Categories</Form.Label>
                <Form.Select>
                  <option>Select</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group className="mb-4">
                <Form.Label htmlFor="author">Author</Form.Label>
                <Form.Select>
                  <option>Select</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group className="mb-4">
                <Form.Label htmlFor="userId">User Id</Form.Label>
                <Form.Control type="text" placeholder="Enter User ID" />
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group className="mb-4">
                <Form.Label htmlFor="totalComments">Total Comments</Form.Label>
                <Form.Control type="text" placeholder="Enter Total Comments" />
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group className="mb-4">
                <Form.Label htmlFor="readTime">Read Time</Form.Label>
                <Form.Control type="text" placeholder="Enter Read Time" />
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group className="mb-4">
                <Form.Label htmlFor="totalViews">Total Views</Form.Label>
                <Form.Control type="text" placeholder="Enter Total Views" />
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group className="mb-4">
                <Form.Label htmlFor="metaTitle">Meta Title</Form.Label>
                <Form.Control type="text" placeholder="Enter Meta Title" />
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group className="mb-4">
                <Form.Label htmlFor="metaDesc">Meta Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Meta Description"
                />
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group className="mb-4">
                <Form.Label htmlFor="metaKeyword">Meta Keywords</Form.Label>
                <Form.Control type="text" placeholder="Enter Meta Keywords" />
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group className="mb-4">
                <Form.Label htmlFor="publishDate">Publish Date</Form.Label>
                <Form.Control type="text" placeholder="mm/dd/yyyy" />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Row className="w-100">
          <Col sm={6} className="mb-4">
            <button
              href="#"
              onClick={handleClose}
              className="btn outline-btn w-100"
            >
              Back
            </button>
          </Col>
          <Col sm={6} className="mb-4">
            <button
              href="#"
              onClick={() => alert("Publish clicked!")}
              className="btn primarybtn w-100"
            >
              Publish
            </button>
          </Col>
        </Row>
      </Modal.Footer>
    </Modal>
  );
}

export default ArticleEditorEdit;
