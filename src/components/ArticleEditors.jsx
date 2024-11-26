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
import ArticleEditorModal from "./modals/ArticleEditorModal";

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
     
     <ArticleEditorModal handleClose={handleClose} showmodal={showmodal}/>
    </main>
  );
}

export default ArticleEditors;
