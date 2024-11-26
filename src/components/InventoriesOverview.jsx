import React from "react";
import { Card, Col, Container, Dropdown, Row } from "react-bootstrap";
import fmr from "@/assets/images/fmr.jpg";
import copy from "@/assets/images/copy.svg";

function InventoriesOverview() {
  return (
    <main>
      <section>
        <Container fluid>
          <Row>
            <Col>
              <div className="inventory">
                <div className="inventory-heading d-flex justify-content-between align-items-center flex-wrap mb-4">
                  <h1 className="mb-0">Overview</h1>
                  <a href="javascript:void(0)" className="btn primarybtn mb-2">
                    <i className="fa-solid fa-plus pe-1"></i> Add Inventories
                  </a>
                </div>
              </div>
              <div className="inventories">
                <Row>
                  <Col sm={6} md={4} className="mb-4">
                    <Card className="">
                      <Card.Body className="">
                        <div className="inventories-head d-flex align-items-start justify-content-between mb-3">
                          <div className="inventories-head-left d-flex align-items-center">
                            <img
                              src={fmr}
                              alt="fmr"
                              className="img-fluid pe-2"
                            />
                            <div className="inventories-head-left-desc">
                              <h6 className="font-600 mb-1">
                                Find My Response
                              </h6>
                              <p className="font-10 mb-0">
                                www.findmyresponse.com{" "}
                                <a href="javascript:void(0)">
                                  <img
                                    src={copy}
                                    alt="copy"
                                    className="img-fluid ps-1"
                                  />
                                </a>
                              </p>
                            </div>
                          </div>
                          <Dropdown>
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
                        </div>
                        <div className="inventories-body border-bottom mb-3 pb-2">
                          <Row>
                            <Col xs={4}>
                              <p className="font-12 font-500 mb-2 text-nowrap">
                                Articles
                              </p>
                              <h2 className="font-600">1200</h2>
                            </Col>
                            <Col xs={4}>
                              <p className="font-12 font-500 mb-2 text-nowrap">
                                Categories
                              </p>
                              <h2 className="font-600">06</h2>
                            </Col>
                            <Col xs={4}>
                              <p className="font-12 font-500 mb-2 text-nowrap">
                                Author
                              </p>
                              <h2 className="font-600">12</h2>
                            </Col>
                          </Row>
                        </div>
                        <div className="inventories-footer d-flex align-items-center justify-content-between flex-wrap">
                          <p className="font-12 mb-2">
                            Want to post an article?
                          </p>
                          <a
                            href="javascript:void(0)"
                            className="btn primarybtn py-2 px-3 mb-2"
                          >
                            View More
                          </a>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col sm={6} md={4} className="mb-4">
                    <Card className="">
                      <Card.Body className="">
                        <div className="inventories-head d-flex align-items-start justify-content-between mb-3">
                          <div className="inventories-head-left d-flex align-items-center">
                            <img
                              src={fmr}
                              alt="fmr"
                              className="img-fluid pe-2"
                            />
                            <div className="inventories-head-left-desc">
                              <h6 className="font-600 mb-1">
                                Find My Response
                              </h6>
                              <p className="font-10 mb-0">
                                www.findmyresponse.com{" "}
                                <a href="javascript:void(0)">
                                  <img
                                    src={copy}
                                    alt="copy"
                                    className="img-fluid ps-1"
                                  />
                                </a>
                              </p>
                            </div>
                          </div>
                          <Dropdown>
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
                        </div>
                        <div className="inventories-body border-bottom mb-3 pb-2">
                          <Row>
                            <Col xs={4}>
                              <p className="font-12 font-500 mb-2 text-nowrap">
                                Articles
                              </p>
                              <h2 className="font-600">1200</h2>
                            </Col>
                            <Col xs={4}>
                              <p className="font-12 font-500 mb-2 text-nowrap">
                                Categories
                              </p>
                              <h2 className="font-600">06</h2>
                            </Col>
                            <Col xs={4}>
                              <p className="font-12 font-500 mb-2 text-nowrap">
                                Author
                              </p>
                              <h2 className="font-600">12</h2>
                            </Col>
                          </Row>
                        </div>
                        <div className="inventories-footer d-flex align-items-center justify-content-between flex-wrap">
                          <p className="font-12 mb-2">
                            Want to post an article?
                          </p>
                          <a
                            href="javascript:void(0)"
                            className="btn primarybtn py-2 px-3 mb-2"
                          >
                            View More
                          </a>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col sm={6} md={4} className="mb-4">
                    <Card className="">
                      <Card.Body className="">
                        <div className="inventories-head d-flex align-items-start justify-content-between mb-3">
                          <div className="inventories-head-left d-flex align-items-center">
                            <img
                              src={fmr}
                              alt="fmr"
                              className="img-fluid pe-2"
                            />
                            <div className="inventories-head-left-desc">
                              <h6 className="font-600 mb-1">
                                Find My Response
                              </h6>
                              <p className="font-10 mb-0">
                                www.findmyresponse.com{" "}
                                <a href="javascript:void(0)">
                                  <img
                                    src={copy}
                                    alt="copy"
                                    className="img-fluid ps-1"
                                  />
                                </a>
                              </p>
                            </div>
                          </div>
                          <Dropdown>
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
                        </div>
                        <div className="inventories-body border-bottom mb-3 pb-2">
                          <Row>
                            <Col xs={4}>
                              <p className="font-12 font-500 mb-2 text-nowrap">
                                Articles
                              </p>
                              <h2 className="font-600">1200</h2>
                            </Col>
                            <Col xs={4}>
                              <p className="font-12 font-500 mb-2 text-nowrap">
                                Categories
                              </p>
                              <h2 className="font-600">06</h2>
                            </Col>
                            <Col xs={4}>
                              <p className="font-12 font-500 mb-2 text-nowrap">
                                Author
                              </p>
                              <h2 className="font-600">12</h2>
                            </Col>
                          </Row>
                        </div>
                        <div className="inventories-footer d-flex align-items-center justify-content-between flex-wrap">
                          <p className="font-12 mb-2">
                            Want to post an article?
                          </p>
                          <a
                            href="javascript:void(0)"
                            className="btn primarybtn py-2 px-3 mb-2"
                          >
                            View More
                          </a>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col sm={6} md={4} className="mb-4">
                    <Card className="">
                      <Card.Body className="">
                        <div className="inventories-head d-flex align-items-start justify-content-between mb-3">
                          <div className="inventories-head-left d-flex align-items-center">
                            <img
                              src={fmr}
                              alt="fmr"
                              className="img-fluid pe-2"
                            />
                            <div className="inventories-head-left-desc">
                              <h6 className="font-600 mb-1">
                                Find My Response
                              </h6>
                              <p className="font-10 mb-0">
                                www.findmyresponse.com{" "}
                                <a href="javascript:void(0)">
                                  <img
                                    src={copy}
                                    alt="copy"
                                    className="img-fluid ps-1"
                                  />
                                </a>
                              </p>
                            </div>
                          </div>
                          <Dropdown>
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
                        </div>
                        <div className="inventories-body border-bottom mb-3 pb-2">
                          <Row>
                            <Col xs={4}>
                              <p className="font-12 font-500 mb-2 text-nowrap">
                                Articles
                              </p>
                              <h2 className="font-600">1200</h2>
                            </Col>
                            <Col xs={4}>
                              <p className="font-12 font-500 mb-2 text-nowrap">
                                Categories
                              </p>
                              <h2 className="font-600">06</h2>
                            </Col>
                            <Col xs={4}>
                              <p className="font-12 font-500 mb-2 text-nowrap">
                                Author
                              </p>
                              <h2 className="font-600">12</h2>
                            </Col>
                          </Row>
                        </div>
                        <div className="inventories-footer d-flex align-items-center justify-content-between flex-wrap">
                          <p className="font-12 mb-2">
                            Want to post an article?
                          </p>
                          <a
                            href="javascript:void(0)"
                            className="btn primarybtn py-2 px-3 mb-2"
                          >
                            View More
                          </a>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col sm={6} md={4} className="mb-4">
                    <Card className="">
                      <Card.Body className="">
                        <div className="inventories-head d-flex align-items-start justify-content-between mb-3">
                          <div className="inventories-head-left d-flex align-items-center">
                            <img
                              src={fmr}
                              alt="fmr"
                              className="img-fluid pe-2"
                            />
                            <div className="inventories-head-left-desc">
                              <h6 className="font-600 mb-1">
                                Find My Response
                              </h6>
                              <p className="font-10 mb-0">
                                www.findmyresponse.com{" "}
                                <a href="javascript:void(0)">
                                  <img
                                    src={copy}
                                    alt="copy"
                                    className="img-fluid ps-1"
                                  />
                                </a>
                              </p>
                            </div>
                          </div>
                          <Dropdown>
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
                        </div>
                        <div className="inventories-body border-bottom mb-3 pb-2">
                          <Row>
                            <Col xs={4}>
                              <p className="font-12 font-500 mb-2 text-nowrap">
                                Articles
                              </p>
                              <h2 className="font-600">1200</h2>
                            </Col>
                            <Col xs={4}>
                              <p className="font-12 font-500 mb-2 text-nowrap">
                                Categories
                              </p>
                              <h2 className="font-600">06</h2>
                            </Col>
                            <Col xs={4}>
                              <p className="font-12 font-500 mb-2 text-nowrap">
                                Author
                              </p>
                              <h2 className="font-600">12</h2>
                            </Col>
                          </Row>
                        </div>
                        <div className="inventories-footer d-flex align-items-center justify-content-between flex-wrap">
                          <p className="font-12 mb-2">
                            Want to post an article?
                          </p>
                          <a
                            href="javascript:void(0)"
                            className="btn primarybtn py-2 px-3 mb-2"
                          >
                            View More
                          </a>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col sm={6} md={4} className="mb-4">
                    <Card className="">
                      <Card.Body className="">
                        <div className="inventories-head d-flex align-items-start justify-content-between mb-3">
                          <div className="inventories-head-left d-flex align-items-center">
                            <img
                              src={fmr}
                              alt="fmr"
                              className="img-fluid pe-2"
                            />
                            <div className="inventories-head-left-desc">
                              <h6 className="font-600 mb-1">
                                Find My Response
                              </h6>
                              <p className="font-10 mb-0">
                                www.findmyresponse.com{" "}
                                <a href="javascript:void(0)">
                                  <img
                                    src={copy}
                                    alt="copy"
                                    className="img-fluid ps-1"
                                  />
                                </a>
                              </p>
                            </div>
                          </div>
                          <Dropdown>
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
                        </div>
                        <div className="inventories-body border-bottom mb-3 pb-2">
                          <Row>
                            <Col xs={4}>
                              <p className="font-12 font-500 mb-2 text-nowrap">
                                Articles
                              </p>
                              <h2 className="font-600">1200</h2>
                            </Col>
                            <Col xs={4}>
                              <p className="font-12 font-500 mb-2 text-nowrap">
                                Categories
                              </p>
                              <h2 className="font-600">06</h2>
                            </Col>
                            <Col xs={4}>
                              <p className="font-12 font-500 mb-2 text-nowrap">
                                Author
                              </p>
                              <h2 className="font-600">12</h2>
                            </Col>
                          </Row>
                        </div>
                        <div className="inventories-footer d-flex align-items-center justify-content-between flex-wrap">
                          <p className="font-12 mb-2">
                            Want to post an article?
                          </p>
                          <a
                            href="javascript:void(0)"
                            className="btn primarybtn py-2 px-3 mb-2"
                          >
                            View More
                          </a>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col sm={6} md={4} className="mb-4">
                    <Card className="">
                      <Card.Body className="">
                        <div className="inventories-head d-flex align-items-start justify-content-between mb-3">
                          <div className="inventories-head-left d-flex align-items-center">
                            <img
                              src={fmr}
                              alt="fmr"
                              className="img-fluid pe-2"
                            />
                            <div className="inventories-head-left-desc">
                              <h6 className="font-600 mb-1">
                                Find My Response
                              </h6>
                              <p className="font-10 mb-0">
                                www.findmyresponse.com{" "}
                                <a href="javascript:void(0)">
                                  <img
                                    src={copy}
                                    alt="copy"
                                    className="img-fluid ps-1"
                                  />
                                </a>
                              </p>
                            </div>
                          </div>
                          <Dropdown>
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
                        </div>
                        <div className="inventories-body border-bottom mb-3 pb-2">
                          <Row>
                            <Col xs={4}>
                              <p className="font-12 font-500 mb-2 text-nowrap">
                                Articles
                              </p>
                              <h2 className="font-600">1200</h2>
                            </Col>
                            <Col xs={4}>
                              <p className="font-12 font-500 mb-2 text-nowrap">
                                Categories
                              </p>
                              <h2 className="font-600">06</h2>
                            </Col>
                            <Col xs={4}>
                              <p className="font-12 font-500 mb-2 text-nowrap">
                                Author
                              </p>
                              <h2 className="font-600">12</h2>
                            </Col>
                          </Row>
                        </div>
                        <div className="inventories-footer d-flex align-items-center justify-content-between flex-wrap">
                          <p className="font-12 mb-2">
                            Want to post an article?
                          </p>
                          <a
                            href="javascript:void(0)"
                            className="btn primarybtn py-2 px-3 mb-2"
                          >
                            View More
                          </a>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col sm={6} md={4} className="mb-4">
                    <Card className="">
                      <Card.Body className="">
                        <div className="inventories-head d-flex align-items-start justify-content-between mb-3">
                          <div className="inventories-head-left d-flex align-items-center">
                            <img
                              src={fmr}
                              alt="fmr"
                              className="img-fluid pe-2"
                            />
                            <div className="inventories-head-left-desc">
                              <h6 className="font-600 mb-1">
                                Find My Response
                              </h6>
                              <p className="font-10 mb-0">
                                www.findmyresponse.com{" "}
                                <a href="javascript:void(0)">
                                  <img
                                    src={copy}
                                    alt="copy"
                                    className="img-fluid ps-1"
                                  />
                                </a>
                              </p>
                            </div>
                          </div>
                          <Dropdown>
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
                        </div>
                        <div className="inventories-body border-bottom mb-3 pb-2">
                          <Row>
                            <Col xs={4}>
                              <p className="font-12 font-500 mb-2 text-nowrap">
                                Articles
                              </p>
                              <h2 className="font-600">1200</h2>
                            </Col>
                            <Col xs={4}>
                              <p className="font-12 font-500 mb-2 text-nowrap">
                                Categories
                              </p>
                              <h2 className="font-600">06</h2>
                            </Col>
                            <Col xs={4}>
                              <p className="font-12 font-500 mb-2 text-nowrap">
                                Author
                              </p>
                              <h2 className="font-600">12</h2>
                            </Col>
                          </Row>
                        </div>
                        <div className="inventories-footer d-flex align-items-center justify-content-between flex-wrap">
                          <p className="font-12 mb-2">
                            Want to post an article?
                          </p>
                          <a
                            href="javascript:void(0)"
                            className="btn primarybtn py-2 px-3 mb-2"
                          >
                            View More
                          </a>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col sm={6} md={4} className="mb-4">
                    <Card className="">
                      <Card.Body className="">
                        <div className="inventories-head d-flex align-items-start justify-content-between mb-3">
                          <div className="inventories-head-left d-flex align-items-center">
                            <img
                              src={fmr}
                              alt="fmr"
                              className="img-fluid pe-2"
                            />
                            <div className="inventories-head-left-desc">
                              <h6 className="font-600 mb-1">
                                Find My Response
                              </h6>
                              <p className="font-10 mb-0">
                                www.findmyresponse.com{" "}
                                <a href="javascript:void(0)">
                                  <img
                                    src={copy}
                                    alt="copy"
                                    className="img-fluid ps-1"
                                  />
                                </a>
                              </p>
                            </div>
                          </div>
                          <Dropdown>
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
                        </div>
                        <div className="inventories-body border-bottom mb-3 pb-2">
                          <Row>
                            <Col xs={4}>
                              <p className="font-12 font-500 mb-2 text-nowrap">
                                Articles
                              </p>
                              <h2 className="font-600">1200</h2>
                            </Col>
                            <Col xs={4}>
                              <p className="font-12 font-500 mb-2 text-nowrap">
                                Categories
                              </p>
                              <h2 className="font-600">06</h2>
                            </Col>
                            <Col xs={4}>
                              <p className="font-12 font-500 mb-2 text-nowrap">
                                Author
                              </p>
                              <h2 className="font-600">12</h2>
                            </Col>
                          </Row>
                        </div>
                        <div className="inventories-footer d-flex align-items-center justify-content-between flex-wrap">
                          <p className="font-12 mb-2">
                            Want to post an article?
                          </p>
                          <a
                            href="javascript:void(0)"
                            className="btn primarybtn py-2 px-3 mb-2"
                          >
                            View More
                          </a>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}

export default InventoriesOverview;
