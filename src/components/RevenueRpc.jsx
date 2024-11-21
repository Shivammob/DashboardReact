import React from "react";
import { Col, Row, Tab, Tabs } from "react-bootstrap";
import info from "@/assets/images/info.svg";
import redDown from "@/assets/images/red_down.svg";
import Revenue from "./charts/Revenue";
import greenup from "@/assets/images/greenup.svg";

function RevenueRpc() {
  return (
    <>
      <Col md={6} className="position-relative mb-4">
        <Row className="g-md-0">
          <Col md={6} className="pe-2">
            <div className="rpc-box p-3">
              <div className="border-bottom pb-3 mb-3">
                <p>
                  Yesterday{" "}
                  <img
                    src={info}
                    alt="info"
                    className="img-fluid ms-1"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="lorem ipsum"
                  />
                </p>
                <div className="d-flex align-items-center justify-content-between">
                  <h2 className="font-24 font-600 mb-0">$707.9</h2>
                  <span className="bg-box decrement">
                    {" "}
                    <img
                      src={redDown}
                      alt="red down"
                      className="img-fluid me-1"
                    />
                    3.0%
                  </span>
                </div>
              </div>
              <Tabs
                defaultActiveKey="revenue"
                id="myTab1"
                className="mb-3 border-0"
              >
                <Tab eventKey="revenue" title="Revenue" className="border-0">
                  <figure className="highcharts-figure guagegraph mb-0">
                    <Revenue />
                  </figure>
                </Tab>
                <Tab eventKey="rpc" title="RPC" className="border-0">
                  RPC
                </Tab>
              </Tabs>
            </div>
          </Col>
          <Col md={6} className="">
            <div className="rpc-box p-3">
              <div className="border-bottom pb-3 mb-3">
                <p>
                  Yesterday{" "}
                  <img
                    src={info}
                    alt="info"
                    className="img-fluid ms-1"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="lorem ipsum"
                  />
                </p>
                <div className="d-flex align-items-center justify-content-between">
                  <h2 className="font-24 font-600 mb-0">$707.9</h2>
                  <span className="bg-box increment">
                    {" "}
                    <img
                      src={greenup}
                      alt="red down"
                      className="img-fluid me-1"
                    />
                    3.0%
                  </span>
                </div>
              </div>
              <Tabs
                defaultActiveKey="revenue"
                id="myTab2"
                className="mb-3 border-0"
              >
                <Tab eventKey="revenue" title="Revenue" className="border-0">
                  <figure className="highcharts-figure guagegraph mb-0">
                    <Revenue />
                  </figure>
                </Tab>
                <Tab eventKey="rpc" title="RPC" className="border-0">
                  RPC
                </Tab>
              </Tabs>
            </div>
          </Col>
        </Row>
        <span className="rpc-versus bg-white text-dark p-2 rounded">v/s</span>
      </Col>
    </>
  );
}

export default RevenueRpc;
