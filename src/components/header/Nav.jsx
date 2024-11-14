import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import latestTrends from "@/assets/images/latest_trends.svg";
import notificationBell from "@/assets/images/notification_bell.svg";
import activeProfile from "@/assets/images/active_profile.svg";
import { Col, Container, Navbar, Row } from "react-bootstrap";

function Nav() {
  const showSidebar = () => {
    document.body.classList.toggle("menu-show");
  };
  return (
    <Navbar
      expand="lg"
      className="navbar navbar-light p-0 pb-2 pb-md-0 mb-4 bg-white"
    >
      <Container fluid className="g-0 d-block">
        <Row className="flex-md-nowrap">
          <Col md={3} className="pe-0">
            <div className="navbar-trends d-flex align-items-center flex-shrink-0">
              <img
                src={latestTrends}
                alt="latest trends"
                className="img-fluid me-2"
              />
              <div className="trends">
                <h6 className="font-600 mb-1">Latest Trends</h6>
                <p className="font-9 mb-0">
                  Data till : 28 August, 2024 : 15:30 PM
                </p>
              </div>
            </div>
          </Col>
          <Col md={9} lg={8} xl={9} className="">
            <Row className="navbar-menu h-100 align-items-center">
              <Col md={6} lg={8} className="overflow-hidden py-3 py-md-0">
                <ul className="marquee marqueeone d-flex align-items-center mb-0 text-nowrap">
                  <li className="marquee-item me-5">
                    Lorem ipsum dolor sit.
                    <span className="bordericon decreaseicon text-danger font-12 ms-2">
                      12%
                    </span>
                  </li>
                  <li className="marquee-item me-5">
                    Lorem ipsum dolor sit.
                    <span className="bordericon increaseicon text-success font-12 ms-2">
                      52%
                    </span>
                  </li>
                  <li className="marquee-item me-5">
                    Lorem ipsum dolor sit.
                    <span className="bordericon decreaseicon text-danger font-12 ms-2">
                      12%
                    </span>
                  </li>
                  <li className="marquee-item me-5">
                    Lorem ipsum dolor sit.
                    <span className="bordericon increaseicon text-success font-12 ms-2">
                      52%
                    </span>
                  </li>
                  <li className="marquee-item me-5">
                    Lorem ipsum dolor sit.
                    <span className="bordericon decreaseicon text-danger font-12 ms-2">
                      12%
                    </span>
                  </li>
                  <li className="marquee-item me-5">
                    Lorem ipsum dolor sit.
                    <span className="bordericon increaseicon text-success font-12 ms-2">
                      52%
                    </span>
                  </li>
                </ul>
              </Col>
              <Col xs={3} md={1} className="text-center">
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="notify"
                >
                  <img
                    src={notificationBell}
                    alt="notification bell"
                    className="img-fluid"
                  />
                </a>
              </Col>
              <Col xs={6} md={3} className="ps-lg-0">
                <Dropdown className="user-login">
                  <Dropdown.Toggle
                    className="d-flex align-items-center bg-transparent border-0"
                    type="button"
                    id="profileDropdown"
                  >
                    <img
                      src={activeProfile}
                      alt="profile"
                      className="img-fluid"
                    />
                    <div className="user-login-detail mx-3">
                      <h6 className="mb-1 font-500">Kunal Kothari</h6>
                      <span className="d-block font-10 text-start">
                        Super Admin
                      </span>
                    </div>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="" aria-labelledby="profileDropdown">
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
              </Col>
              <Col xs={3} md={2} className="text-center d-lg-none">
                <button
                  className="navbar-toggler"
                  type="button"
                  onClick={showSidebar}
                >
                  <span className=""></span>
                </button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default Nav;
