import React, { useState } from "react";

import CustomSelect from "./CustomSelect";
import filter from "@/assets/images/filter.svg";
import refresh from "@/assets/images/refresh.svg";
import spend from "@/assets/images/spend.svg";
import greenup from "@/assets/images/greenup.svg";
import revenue from "@/assets/images/revenue.svg";
import rpc from "@/assets/images/rpc.svg";
import clicks from "@/assets/images/clicks.svg";
import searches from "@/assets/images/searches.svg";
import search from "@/assets/images/search.svg";
import RpcRevenueBar from "./charts/RpcRevenueBar";
import { Card, Col, Container, Row } from "react-bootstrap";
import DateRangePick from "./DateRangePick";
import ReportDt from "./datatables/ReportDt";

function OverviewReports() {
  const [show, setShow] = useState(false);

  return (
    <main>
      <section>
        <Container fluid>
          <Row>
            <Col>
              <div className="insights mb-4">
                <div className="insights-heading d-flex justify-content-between align-items-center flex-wrap">
                  <h1 className="mb-3">Overview Reports</h1>
                  <div className="d-flex align-items-center flex-wrap">
                    <div className="mb-4 me-2">
                      <CustomSelect />
                    </div>

                    <a
                      href="#"
                      onClick={() => setShow((prevState) => !prevState)}
                      className={`me-2 rounded-circle mb-4 ${
                        show ? "bg-white" : ""
                      }`}
                      id="filterCampign"
                    >
                      <img src={filter} alt="filter" className="img-fluid" />
                    </a>
                    <a href="#" className="me-2 mb-4">
                      <img src={refresh} alt="refresh" className="img-fluid" />
                    </a>
                  </div>
                </div>
                {show && (
                  <div className="insights-filter bg-grey">
                    <Row className="align-items-end">
                      <Col md={10}>
                        <Row>
                          <Col md={4} className="mb-3">
                            <DateRangePick />
                          </Col>
                          <Col md={4} className="mb-3">
                            <div className="insights-filter-select">
                              <span className="d-block text-nowrap mb-2">
                                Campaign(System 1)
                              </span>
                              <input
                                type="text"
                                list="campaigns"
                                name="campaign"
                                id="campaign"
                                placeholder="--select--"
                              />
                              <i className="fas fa-caret-down dropdown-icon"></i>
                              <datalist id="campaigns">
                                <option value="Edge" />
                                <option value="Firefox" />
                                <option value="Chrome" />
                                <option value="Opera" />
                                <option value="Safari" />
                              </datalist>
                            </div>
                          </Col>
                          <Col md={4} className="mb-3">
                            <div className="insights-filter-select">
                              <span className="d-block text-nowrap mb-2">
                                Sub ID
                              </span>
                              <input
                                type="text"
                                list="subs"
                                name="sub"
                                id="sub"
                                placeholder="--select--"
                              />
                              <i className="fas fa-caret-down dropdown-icon"></i>
                              <datalist id="subs">
                                <option value="Edge" />
                                <option value="Firefox" />
                                <option value="Chrome" />
                                <option value="Opera" />
                                <option value="Safari" />
                              </datalist>
                            </div>
                          </Col>
                          <Col md={4} className="mb-3">
                            <div className="insights-filter-select">
                              <span className="d-block text-nowrap mb-2">
                                Adaccount (Facebook)
                              </span>
                              <input
                                type="text"
                                list="adaccounts"
                                name="addaccount"
                                id="addaccount"
                                placeholder="--select--"
                              />
                              <i className="fas fa-caret-down dropdown-icon"></i>
                              <datalist id="adaccounts">
                                <option value="Edge" />
                                <option value="Firefox" />
                                <option value="Chrome" />
                                <option value="Opera" />
                                <option value="Safari" />
                              </datalist>
                            </div>
                          </Col>
                          <Col md={4} className="mb-3">
                            <div className="insights-filter-select">
                              <span className="d-block text-nowrap mb-2">
                                Campaign (Facebook)
                              </span>
                              <input
                                type="text"
                                list="campaignsfacebook"
                                name="campaignfacebook"
                                id="campaignfacebook"
                                placeholder="--select--"
                              />
                              <i className="fas fa-caret-down dropdown-icon"></i>
                              <datalist id="campaignsfacebook">
                                <option value="Edge" />
                                <option value="Firefox" />
                                <option value="Chrome" />
                                <option value="Opera" />
                                <option value="Safari" />
                              </datalist>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                      <div
                        md={2}
                        className="mb-3 d-flex justify-content-end align-items-center"
                      >
                        <a href="#" className="btn primarybtn">
                          Submit
                        </a>
                      </div>
                    </Row>
                  </div>
                )}
                <Row>
                  <Col md={7} className="mb-4">
                    <Card>
                      <Card.Body className="p-2">
                        <Row className="g-0">
                          <Col md={6} xl={4} className="mb-3 pe-2">
                            <div className="insights-detail w-100 h-100">
                              <div className="insights-detail-head d-flex align-items-center justify-content-between mb-3">
                                <p className="mb-0">Total Spend</p>
                                <img
                                  src={spend}
                                  alt="spend"
                                  className="img-fluid"
                                />
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
                          </Col>
                          <Col md={6} xl={4} className="mb-3 pe-2">
                            <div className="insights-detail w-100 h-100">
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
                          </Col>
                          <Col md={6} xl={4} className="mb-3">
                            <div className="insights-detail w-100 h-100">
                              <div className="insights-detail-head d-flex align-items-center justify-content-between mb-3">
                                <p className="mb-0">RPC($)</p>
                                <img
                                  src={rpc}
                                  alt="RPC($)"
                                  className="img-fluid"
                                />
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
                          </Col>
                          <Col md={6} xl={4} className="mb-3 pe-2">
                            <div className="insights-detail w-100 h-100">
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
                          </Col>
                          <Col md={6} xl={4} className="mb-3 pe-2">
                            <div className="insights-detail w-100 h-100">
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
                          </Col>
                          <Col md={6} xl={4} className="mb-3">
                            <div className="insights-detail w-100 h-100">
                              <div className="insights-detail-head d-flex align-items-center justify-content-between mb-3">
                                <p className="mb-0">Lorem</p>
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
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={5} className="mb-5 mb-md-0 pb-4 pb-md-0">
                    <RpcRevenueBar />
                  </Col>
                </Row>
              </div>
              <div className="campaign position-relative mb-4">
                <div className="campaign-header table-head">
                  <Row>
                    <Col md={7}>
                      <Card className="radius-bottom0">
                        <Card.Body className="py-4">
                          <div className="d-flex justify-content-between align-items-center">
                            <h4 className="font-600 mb-0">List of Campaign</h4>
                            <div className="d-flex align-items-center">
                              {/* <a href="#"><img src={search}
                                                                alt="search" className="img-fluid pe-3"></a>
                                                        <div className="dropdown">
                                                            <button className="bg-transparent" type="button"
                                                                id="campaignDropdown" data-bs-toggle="dropdown"
                                                                aria-expanded="false">
                                                                <i className="fa-solid fa-ellipsis-vertical"></i>
                                                            </button>
                                                            <ul className="dropdown-menu"
                                                                aria-labelledby="campaignDropdown">
                                                                <li><a className="dropdown-item" href="#">Action</a></li>
                                                                <li><a className="dropdown-item" href="#">Another action</a>
                                                                </li>
                                                                <li><a className="dropdown-item" href="#">Something else
                                                                        here</a>
                                                                </li>
                                                            </ul>
                                                        </div>  */}
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </div>
                <Card className="radius-top0 shadow-none">
                  <Card.Body>
                    <ReportDt />
                    {/* <table
                      className="table stripe table-hover text-nowrap"
                      width="100%"
                      id="table">
                      <thead>
                        <tr>
                          <th>Campaign Domain</th>
                          <th>Total Sessions</th>
                          <th>Mobile Sessions</th>
                          <th>Desktop Sessions</th>
                          <th>Desktop Sessions</th>
                        </tr>
                      </thead>
                      <tbody className="border-0">
                        <tr>
                          <td>adhd-treatment-in-mexico.zone</td>
                          <td>100435</td>
                          <td>100400</td>
                          <td>35</td>
                          <td>35</td>
                        </tr>
                        <tr>
                          <td>Text</td>
                          <td>Text</td>
                          <td>Text</td>
                          <td>Text</td>
                          <td>Text</td>
                        </tr>
                        <tr>
                          <td>Text</td>
                          <td>Text</td>
                          <td>Text</td>
                          <td>Text</td>
                          <td>Text</td>
                        </tr>
                        <tr>
                          <td>Text</td>
                          <td>Text</td>
                          <td>Text</td>
                          <td>Text</td>
                          <td>Text</td>
                        </tr>
                        <tr>
                          <td>Text</td>
                          <td>Text</td>
                          <td>Text</td>
                          <td>Text</td>
                          <td>Text</td>
                        </tr>
                        <tr>
                          <td>Text</td>
                          <td>Text</td>
                          <td>Text</td>
                          <td>Text</td>
                          <td>Text</td>
                        </tr>
                        <tr>
                          <td>Text</td>
                          <td>Text</td>
                          <td>Text</td>
                          <td>Text</td>
                          <td>Text</td>
                        </tr>
                        <tr>
                          <td>Text</td>
                          <td>Text</td>
                          <td>Text</td>
                          <td>Text</td>
                          <td>Text</td>
                        </tr>
                        <tr>
                          <td>Text</td>
                          <td>Text</td>
                          <td>Text</td>
                          <td>Text</td>
                          <td>Text</td>
                        </tr>
                        <tr>
                          <td>Text</td>
                          <td>Text</td>
                          <td>Text</td>
                          <td>Text</td>
                          <td>Text</td>
                        </tr>
                      </tbody>
                    </table> */}
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

export default OverviewReports;
