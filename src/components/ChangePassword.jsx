import React, { useState } from "react";
import refresh from "@/assets/images/refresh.svg";
import resetPassword from "@/assets/images/reset_password.jpg";
import checkCircle from "@/assets/images/check_circle.svg";
import hidePasswordImg from "@/assets/images/hide_password.svg";
import showPasswordImg from "@/assets/images/show_password.svg";
import { Row, Col, Container, Card, Form, InputGroup } from "react-bootstrap";
import SettingTab from "./tab/SettingTab";

function ChangePassword() {
  const [passIcon, setPassIcon] = useState({
    pass1: false,
    pass2: false,
    pass3: false,
  });

  const togglePasswordIcon = (value) => {
   
    setPassIcon((prevState) => ({
      ...prevState,
      [value]: !prevState[value],
    }));
  };

  return (
    <main>
      <section>
        <Container fluid>
          <Row>
            <Col>
              <div className="panel">
                <SettingTab />
              </div>
              <div className="password position-relative mb-4">
                <Card className="">
                  <Card.Body className="">
                    <div className="password-head">
                      <h4 className="font-600">Change Password</h4>
                      <p className="mb-0">
                        To change your password, please fill in the fields
                        below.
                      </p>
                    </div>
                    <Row className="">
                      <Col md={6} className="mb-3">
                        <div className="password-left">
                          <img
                            src={resetPassword}
                            alt="reset password"
                            className="img-fluid w-100"
                          />
                        </div>
                      </Col>
                      <Col md={6} className="mb-3">
                        <div className="password-right">
                          <div
                            className="toast align-items-center d-block mb-4 passwordToast"
                            role="alert"
                            aria-live="assertive"
                            aria-atomic="true"
                            id="passToast"
                          >
                            <div className="d-flex">
                              <div className="toast-body">
                                Password successfully updated.
                              </div>
                              <button
                                type="button"
                                className="btn-close me-2 m-auto"
                                data-bs-dismiss="toast"
                                aria-label="Close"
                              ></button>
                            </div>
                          </div>
                          <form className="cst-form">
                            <div className="mb-4">
                              <label
                                htmlFor="oldPassword"
                                className="form-label d-flex align-items-center"
                              >
                                Old Password
                                <img
                                  src={checkCircle}
                                  alt="check"
                                  className="img-fluid ps-1"
                                />
                              </label>
                              <div className="d-flex align-items-center passwordInput">
                                <InputGroup className="mb-1">
                                  <Form.Control
                                    type={passIcon.pass1 ? "text" : "password"}
                                    placeholder="Enter Password"
                                    className="py-3"
                                  />
                                  <InputGroup.Text
                                    onClick={() => togglePasswordIcon("pass1")}
                                    style={{ cursor: "pointer" }}
                                    className="p-1"
                                  >
                                    <img
                                      src={
                                        passIcon.pass1
                                          ? showPasswordImg
                                          : hidePasswordImg
                                      }
                                      alt={
                                        passIcon.pass1
                                          ? "Show Password"
                                          : "Hide Password"
                                      }
                                      className="img-fluid"
                                    />
                                  </InputGroup.Text>
                                </InputGroup>
                              </div>
                            </div>
                            <div className="mb-3">
                              <label
                                htmlFor="newPassword"
                                className="form-label"
                              >
                                New Password
                              </label>
                              <div className="d-flex align-items-center passwordInput">
                                <InputGroup className="mb-1">
                                  <Form.Control
                                    type={passIcon.pass2 ? "text" : "password"}
                                    placeholder="Enter Password"
                                    className="py-3"
                                  />
                                  <InputGroup.Text
                                    onClick={() => togglePasswordIcon("pass2")}
                                    style={{ cursor: "pointer" }}
                                    className="p-1"
                                  >
                                    <img
                                      src={
                                        passIcon.pass2
                                          ? showPasswordImg
                                          : hidePasswordImg
                                      }
                                      alt={
                                        passIcon.pass2
                                          ? "Show Password"
                                          : "Hide Password"
                                      }
                                      className="img-fluid"
                                    />
                                  </InputGroup.Text>
                                </InputGroup>
                              </div>
                            </div>
                            <p className="mb-3 font-12 text-fail">
                              Please add all necessary characters to create safe
                              password.
                            </p>
                            <Row className="cst-form-errors mb-2">
                              <Col sm={6} className="">
                                <p>Minimum characters 8</p>
                              </Col>
                              <Col sm={6} className="">
                                <p>Maximum characters 50</p>
                              </Col>
                              <Col sm={6} className="">
                                <p>One uppercase character</p>
                              </Col>
                              <Col sm={6} className="">
                                <p>One lowercase character</p>
                              </Col>
                              <Col sm={6} className="">
                                <p>One special character</p>
                              </Col>
                              <Col sm={6} className="">
                                <p>One number</p>
                              </Col>
                            </Row>
                            <div className="mb-4 pb-md-2">
                              <label
                                htmlFor="newPassword"
                                className="form-label"
                              >
                                Confirm Password
                              </label>
                              <div className="d-flex align-items-center passwordInput">
                                <InputGroup className="mb-1">
                                  <Form.Control
                                    type={passIcon.pass3 ? "text" : "password"}
                                    placeholder="Enter Password"
                                    className="py-3"
                                  />
                                  <InputGroup.Text
                                    onClick={() => togglePasswordIcon("pass3")}
                                    style={{ cursor: "pointer" }}
                                    className="p-1"
                                  >
                                    <img
                                      src={
                                        passIcon.pass3
                                          ? showPasswordImg
                                          : hidePasswordImg
                                      }
                                      alt={
                                        passIcon.pass3
                                          ? "Show Password"
                                          : "Hide Password"
                                      }
                                      className="img-fluid"
                                    />
                                  </InputGroup.Text>
                                </InputGroup>
                              </div>
                            </div>

                            <button
                              type="submit"
                              className="btn primarybtn w-100 mb-4"
                            >
                              Change Password
                            </button>
                            <p className="text-center">
                              Wait, I don’t want to change password{" "}
                              <span>
                                <a
                                  href="#"
                                  onClick={(e) => e.preventDefault()}
                                  className="text-decoration-underline ps-3 text-nowrap"
                                >
                                  Back to Dashboard
                                </a>
                              </span>
                            </p>
                          </form>
                        </div>
                      </Col>
                    </Row>
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

export default ChangePassword;
