import React from "react";
import refresh from "@/assets/images/refresh.svg"
import search from "@/assets/images/search.svg"
import { Card, Col, Container, Dropdown, Row } from "react-bootstrap";
import ActiveAlertsDt from "./datatables/ActiveALertsDt";

function ActiveAlerts() {
  return (
    <main>
      <section>
        <Container fluid className="">
          <Row className="">
            <Col className="">
              <div className="notify">
                <div className="notify-heading d-flex justify-content-between flex-wrap mb-4">
                  <h1 className="mb-0">Notification</h1>
                  <a href="#" onClick={(e) => e.preventDefault()} className="me-2">
                    <img
                      src={refresh}
                      alt="refresh"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="nav-lists bg-grey mb-4 p-3 p-md-4">
                  <ul className="bg-white d-flex align-items-center p-0 mb-0">
                    <li>
                      <a href="#" onClick={(e) => e.preventDefault()} className="active">
                        Active Alerts
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={(e) => e.preventDefault()}>Closed Alerts</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="notify-acc position-relative mb-4">
                <Card className="">
                  <Card.Body className="">
                    <div className="d-flex justify-content-between mb-2">
                      <div className="notify-acc-head">
                        <h4 className="font-600">Active Alerts</h4>
                        <p className="">Where action meets opportunity.</p>
                      </div>
                      <div className="d-flex align-items-center">
                        <a href="#" onClick={(e) => e.preventDefault()}>
                          <img
                            src={search}
                            alt="search"
                            className="img-fluid pe-3"
                          />
                        </a>
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
                    </div>
                    <ActiveAlertsDt/>
                    {/* <div className="table-responsive">
                      <table
                        className="table stripe table-hover text-nowrap"
                        width="100%"
                        id="activeAlerts"
                      >
                        <thead>
                          <tr>
                            <th>Sr. No.</th>
                            <th>Campaign Name</th>
                            <th>Alert Type</th>
                            <th>Alert Param</th>
                            <th>Alert Value</th>
                            <th>Alert Date & Time</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody className="border-0">
                          <tr>
                            <td>01</td>
                            <td>
                              all-inclusive-vacation-packages-4720632.world
                            </td>
                            <td>Last 6 Hours</td>
                            <td>RPC</td>
                            <td>0.03</td>
                            <td>2024-09-20 05:37:18</td>
                            <td>
                              <a href="#" onClick={(e) => e.preventDefault()} className="btn redbtn">
                                Close
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>Text</td>
                            <td>Mayank Chauhan</td>
                            <td>Text</td>
                            <td>Text</td>
                            <td>Text</td>
                            <td>Text</td>
                            <td>
                              <a href="#" onClick={(e) => e.preventDefault()} className="btn redbtn">
                                Close
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>Text</td>
                            <td>Text</td>
                            <td>Text</td>
                            <td>Text</td>
                            <td>Text</td>
                            <td>Text</td>
                            <td>
                              <a href="#" onClick={(e) => e.preventDefault()} className="">
                                Close
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>Text</td>
                            <td>Text</td>
                            <td>Text</td>
                            <td>Text</td>
                            <td>Text</td>
                            <td>Text</td>
                            <td>
                              <a href="#" onClick={(e) => e.preventDefault()} className="">
                                Close
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>Text</td>
                            <td>Text</td>
                            <td>Text</td>
                            <td>Text</td>
                            <td>Text</td>
                            <td>Text</td>
                            <td>
                              <a href="#" onClick={(e) => e.preventDefault()} className="">
                                Close
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>Text</td>
                            <td>Text</td>
                            <td>Text</td>
                            <td>Text</td>
                            <td>Text</td>
                            <td>Text</td>
                            <td>
                              <a href="#" onClick={(e) => e.preventDefault()} className="">
                                Close
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>Text</td>
                            <td>Text</td>
                            <td>Text</td>
                            <td>Text</td>
                            <td>Text</td>
                            <td>Text</td>
                            <td>
                              <a href="#" onClick={(e) => e.preventDefault()} className="">
                                Close
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div> */}
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
     
    </main>
  );
}

export default ActiveAlerts;
