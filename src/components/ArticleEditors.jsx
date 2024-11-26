import React, { useState } from "react";
import fmr from "@/assets/images/fmr_main.jpg";
import copy from "@/assets/images/copy.svg";
import ArticleEditorsTab from "./tab/ArticleEditorsTab";
import ArticleEditorsDt from "./datatables/ArticleEditorsDt";
import {
  Button,
  Card,
  Col,
  Container,
  Dropdown,
  Modal,
  Row,
  Form,
} from "react-bootstrap";

function ArticleEditors() {
  const [showmodal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <main>
      <section>
        <Container fluid>
          <Row>
            <Col>
              <div className="editors">
                <ArticleEditorsTab />
                <div className="editors-body mb-4">
                  <Card>
                    <Card.Body>
                      <Dropdown className="text-end">
                        <Dropdown.Toggle
                          className="bg-transparent no-caret border-0 p-0 text-reset"
                          type="button"
                          id="actionsDropdown"
                        >
                          <i className="fa-solid fa-ellipsis-vertical"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item className="" href="#">
                            Action
                          </Dropdown.Item>
                          <Dropdown.Item className="" href="#">
                            Another action
                          </Dropdown.Item>
                          <Dropdown.Item className="" href="#">
                            Something else here
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <div className="editors-body-desc border-bottom pb-md-4 mb-4">
                        <Row className="align-items-center">
                          <Col md={2} className="mb-3">
                            <img
                              src={fmr}
                              alt="fmr"
                              className="img-fluid w-100"
                            />
                          </Col>
                          <Col md={7} className="mb-3">
                            <h2 className="font-24 font-600">
                              Find My Response
                            </h2>
                            <p>
                              <a
                                href="#"
                                onClick={(e) => e.preventDefault()}
                                className="text-reset"
                              >
                                www.findmyresponse.com{" "}
                                <img
                                  src={copy}
                                  alt="copy"
                                  className="img-fluid"
                                />
                              </a>
                            </p>
                            <Row className="">
                              <Col xs={4} md={2} className="">
                                <p className="font-12 font-500 mb-2 text-nowrap">
                                  Articles
                                </p>
                                <h2 className="font-600">1200</h2>
                              </Col>
                              <Col xs={4} md={2} className="">
                                <p className="font-12 font-500 mb-2 text-nowrap">
                                  Categories
                                </p>
                                <h2 className="font-600">06</h2>
                              </Col>
                              <Col xs={4} md={2} className="">
                                <p className="font-12 font-500 mb-2 text-nowrap">
                                  Author
                                </p>
                                <h2 className="font-600">12</h2>
                              </Col>
                            </Row>
                          </Col>
                          <Col
                            md={3}
                            className="d-flex align-items-md-center justify-content-center flex-column mb-3"
                          >
                            <a
                              href="#"
                              onClick={(e) => e.preventDefault()}
                              className="btn primarybtn mb-2"
                            >
                              <i className="fa-solid fa-plus pe-1"></i> Add New
                              Article
                            </a>
                            <p className="font-12">Want to post an article?</p>
                          </Col>
                        </Row>
                      </div>
                      <div className="editors-body-table">
                        <ArticleEditorsDt clickHandle={handleShow}/>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Modal
          show={showmodal}
          onHide={handleClose}
          centered
          size="lg"
          scrollable
        >
          <Modal.Header closeButton>
            <h3 className="modal-title font-600" id="editArticleLabel">
              Edit
            </h3>
          </Modal.Header>
          <Modal.Body>
            <form className="add-article-form">
              <Row className="">
                <Col sm={6}>
                  <Form.Group className="mb-4">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="Enter Title"
                      style={{ height: "90px" }}
                    />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group className="mb-4">
                    <Form.Label>Title Image URL</Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="Enter URL"
                      style={{ height: "90px" }}
                    />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group className="mb-4">
                    <Form.Label>Description 1</Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="Enter Description 1"
                      style={{ height: "160px" }}
                    />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group className="mb-4">
                    <Form.Label>Description 2</Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="Enter Description 2"
                      style={{ height: "160px" }}
                    />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group className="mb-4">
                    <Form.Label>Page URL</Form.Label>
                    <Form.Control type="text" placeholder="Enter URL" />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group className="mb-4">
                    <Form.Label>Categories</Form.Label>
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
                    <Form.Label>Author</Form.Label>
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
                    <Form.Label>User Id</Form.Label>
                    <Form.Control type="text" placeholder="Enter User ID" />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group className="mb-4">
                    <Form.Label>Total Comments</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Total Comments"
                    />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group className="mb-4">
                    <Form.Label>Read Time</Form.Label>
                    <Form.Control type="text" placeholder="Enter Read Time" />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group className="mb-4">
                    <Form.Label>Total Views</Form.Label>
                    <Form.Control type="text" placeholder="Enter Total Views" />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group className="mb-4">
                    <Form.Label>Meta Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter Meta Title" />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group className="mb-4">
                    <Form.Label>Meta Description</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Meta Description"
                    />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group className="mb-4">
                    <Form.Label>Meta Keywords</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Meta Keywords"
                    />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group className="mb-4">
                    <Form.Label>Publish Date</Form.Label>
                    <Form.Control type="text" placeholder="mm/dd/yyyy" />
                  </Form.Group>
                </Col>
              </Row>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Row className="w-100">
              <Col sm={6} className="mb-4">
                <button
                  href="#"
                  onClick={handleClose}
                  className="btn outline-btn w-100">
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
    </main>
  );
}

export default ArticleEditors;
