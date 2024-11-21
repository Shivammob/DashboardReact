import React, { useState } from "react";
import { Card, Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import refresh from "@/assets/images/refresh.svg";
import calendar from "@/assets/images/calendar.svg";
import spend from "@/assets/images/spend.svg";
import greenup from "@/assets/images/greenup.svg";
import revenue from "@/assets/images/revenue.svg";
import searches from "@/assets/images/searches.svg";
import rpc from "@/assets/images/rpc.svg";
import clicks from "@/assets/images/clicks.svg";
import PerformanceCompare from "./charts/PerformanceCompare";
import TotalRevenue from "./charts/TotalRevenue";
import TeamReport from "./charts/TeamReport";
import PerformanceDonut from "./charts/PerformanceDonut";
import RevenueRpc from "../components/RevenueRpc";
import CustomSelect from "./CustomSelect";


function Dashboard() {

  return (
    <main>
      <section>
        <Container fluid className="">
          <Row className="">
            <Col className="">
              <div className="insights mb-4">
                <div className="insights-heading d-flex justify-content-between mb-4">
                  <h1 className="mb-0">Dashboard</h1>
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    <img src={refresh} alt="refresh" className="img-fluid" />
                  </a>
                </div>
                <Card className="">
                  <Card.Body className="p-3">
                    <div className="insights-subhead d-flex align-items-center justify-content-between flex-wrap mb-3">
                      <div className="insights-subhead-heading mb-3 mb-md-0">
                        <h4 className="font-600">Todays Insights</h4>
                        <p className="mb-0">
                          Tracking our path to prosperity, one dollar at a time.
                        </p>
                      </div>
                      <div className="insights-subhead-select">
                        <span className="me-3 text-black-50">
                          <img
                            src={calendar}
                            alt="calendar"
                            className="img-fluid"
                          />{" "}
                          Tue, Sept 03
                        </span>
                        <CustomSelect/>
                        
                      </div>
                    </div>
                    <div className="hstack gap-3">
                      <div className="insights-detail">
                        <div className="insights-detail-head d-flex align-items-center justify-content-between mb-3">
                          <p className="mb-0">Total Spend</p>
                          <img src={spend} alt="spend" className="img-fluid" />
                        </div>
                        <div className="insights-detail-points d-flex align-items-center justify-content-between">
                          <h2 className="font-600 mb-0">$120,000</h2>
                          <span className="increment bg-box">
                            <img
                              src={greenup}
                              alt="arrow up"
                              className="img-fluid me-1"
                            />
                            8.0%
                          </span>
                        </div>
                      </div>
                      <div className="insights-detail">
                        <div className="insights-detail-head d-flex align-items-center justify-content-between mb-3">
                          <p className="mb-0">Revenues($)</p>
                          <img
                            src={revenue}
                            alt="Revenues($)"
                            className="img-fluid"
                          />
                        </div>
                        <div className="insights-detail-points d-flex align-items-center justify-content-between">
                          <h2 className="font-600 mb-0">$10,00,000</h2>
                          <span className="increment bg-box">
                            <img
                              src={greenup}
                              alt="arrow up"
                              className="img-fluid me-1"
                            />
                            8.0%
                          </span>
                        </div>
                      </div>
                      <div className="insights-detail">
                        <div className="insights-detail-head d-flex align-items-center justify-content-between mb-3">
                          <p className="mb-0">RPC($)</p>
                          <img src={rpc} alt="RPC($)" className="img-fluid" />
                        </div>
                        <div className="insights-detail-points d-flex align-items-center justify-content-between">
                          <h2 className="font-600 mb-0">0.09</h2>
                          <span className="increment bg-box">
                            <img
                              src={greenup}
                              alt="arrow up"
                              className="img-fluid me-1"
                            />
                            8.0%
                          </span>
                        </div>
                      </div>
                      <div className="insights-detail">
                        <div className="insights-detail-head d-flex align-items-center justify-content-between mb-3">
                          <p className="mb-0">Clicks</p>
                          <img
                            src={clicks}
                            alt="Clicks"
                            className="img-fluid"
                          />
                        </div>
                        <div className="insights-detail-points d-flex align-items-center justify-content-between">
                          <h2 className="font-600 mb-0">3,425</h2>
                          <span className="increment bg-box">
                            <img
                              src={greenup}
                              alt="arrow up"
                              className="img-fluid me-1"
                            />
                            8.0%
                          </span>
                        </div>
                      </div>
                      <div className="insights-detail">
                        <div className="insights-detail-head d-flex align-items-center justify-content-between mb-3">
                          <p className="mb-0">Searches</p>
                          <img
                            src={searches}
                            alt="Searches"
                            className="img-fluid"
                          />
                        </div>
                        <div className="insights-detail-points d-flex align-items-center justify-content-between">
                          <h2 className="font-600 mb-0">6,823</h2>
                          <span className="increment bg-box">
                            <img
                              src={greenup}
                              alt="arrow up"
                              className="img-fluid me-1"
                            />
                            8.0%
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              <div className="revenue">
                <Row className="">
                  <Col md={6} className="mb-4">
                    <TotalRevenue />
                  </Col>
                  <Col md={6} className="mb-4">
                    <Card className="">
                      <Card.Body className="">
                        <figure className="highcharts-figure">
                          <PerformanceCompare />
                        </figure>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
              <div className="rpc mb-4">
                <Card className="">
                  <Card.Body className="">
                    <div className="rpc-subhead mb-4">
                      <h4 className="font-600">Revenue & RPC</h4>
                      <p className="mb-0">
                        Revenue at a glance: insights that inspire action.
                      </p>
                    </div>
                    <Row className="">
                      <RevenueRpc />
                      <RevenueRpc />
                    </Row>
                  </Card.Body>
                </Card>
              </div>
              <div className="performance-report position-relative mb-4">
                <Card className="">
                  <Card.Body className="">
                    <div className="performance-report-head">
                      <h4 className="font-600">Performance Report</h4>
                      <p className="mb-2">
                        Tracking our path to prosperity, one dollar at a time.
                      </p>
                    </div>
                    <figure className="highcharts-figure">
                      <TeamReport />
                    </figure>
                  </Card.Body>
                </Card>
              </div>
              <div className="performance-domain">
                <Row className="">
                  <Col md={6} className="mb-4">
                    <PerformanceDonut />
                  </Col>
                  <Col md={6} className="mb-4">
                    <PerformanceDonut />
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

export default Dashboard;
