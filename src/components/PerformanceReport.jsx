import React from "react";
import refresh from "@/assets/images/refresh.svg";
import search from "@/assets/images/search.svg";
import { Card, Col, Container, Dropdown, Row } from "react-bootstrap";
import TeamReportTree from "./charts/TeamReportTree";
import SettingTab from "./tab/SettingTab";

function PerformanceReport() {
  return (
    <main>
      <section>
        <Container fluid>
          <Row>
            <Col>
              <div className="performance">
                <SettingTab/>
              </div>
              <div className="performance-report position-relative mb-4">
                <Card>
                  <Card.Body>
                    <div className="d-flex justify-content-between mb-2">
                      <div className="performance-report-head">
                        <h4 className="font-600">Performance Report</h4>
                        <p className="mb-0">
                          Tracking our path to prosperity, one dollar at a time.
                        </p>
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
                    <TeamReportTree/>
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

export default PerformanceReport;
