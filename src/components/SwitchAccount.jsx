import React, { useState } from "react";
import { Card, Col, Container, Dropdown, Row, Toast } from "react-bootstrap";
import search from "@/assets/images/search.svg";
import SwitchAccountDt from "./datatables/SwitchAccountDt";
import SettingTab from "./tab/SettingTab";


function SwitchAccount() {
  const [activeUserID, setActiveUserID] = useState(null);
  const [showToast, setShowToast] = useState(false);

  const handleShowToast = () => {
    setShowToast(true);
  };

  const handleRemoveToast = () => {
    setShowToast(false);
  };

  return (
    <main>
      <section>
        <Container fluid className="">
          <Row className="">
            <Col className="">
              <div className="switch">
                <SettingTab/>
              </div>
              <div className="switch-acc position-relative mb-4">
                <Card className="">
                  <Card.Body className="">
                    <div className="d-flex justify-content-between mb-4">
                      <div className="switch-acc-head">
                        <h4 className="font-600">Switch Account</h4>
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
                    <SwitchAccountDt
                      activeUserID={activeUserID}
                      setActiveUserID={setActiveUserID}
                      onSwitchAccount={handleShowToast}
                    />
                    {/* <div className="table-responsive">
                                        <table className="table stripe table-hover text-nowrap" width="100%" id="switchacc">
                                            <thead>
                                                <tr>
                                                    <th>User ID</th>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Type</th>
                                                    <th>Fb A/c Count</th>
                                                    <th>Last Logged In</th>
                                                    <th>Switch to</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody className="border-0">
                                                <tr>
                                                    <td>5</td>
                                                    <td>Kunal Kothari</td>
                                                    <td>k@mobavenue.com</td>
                                                    <td>Super Admin</td>
                                                    <td>0</td>
                                                    <td>2024-09-20 05:37:18</td>
                                                    <td>
                                                        <div
                                                            className="form-check d-flex align-items-center justify-content-center">
                                                            <input className="form-check-input" type="radio"
                                                                name="tableRadio" id="radio11" checked/>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <ul
                                                            className="mb-0 p-0 d-flex align-items-center justify-content-between">
                                                            <li>
                                                                <a href="#" onClick={(e) => e.preventDefault()} className="text-reset"><i
                                                                        className="fa-solid fa-pen"></i></a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => e.preventDefault()} className="text-reset"><i
                                                                        className="fa-solid fa-share-nodes"></i></a>
                                                            </li>
                                                            <li>
                                                                <div className="dropdown">
                                                                    <button className="bg-transparent" type="button"
                                                                        id="actionsDropdown" data-bs-toggle="dropdown"
                                                                        aria-expanded="false">
                                                                        <i className="fa-solid fa-ellipsis-vertical"></i>
                                                                    </button>
                                                                    <ul className="dropdown-menu"
                                                                        aria-labelledby="actionsDropdown">
                                                                        <li><a className="dropdown-item" href="#">Action</a>
                                                                        </li>
                                                                        <li><a className="dropdown-item" href="#">Another
                                                                                action</a>
                                                                        </li>
                                                                        <li><a className="dropdown-item" href="#">Something
                                                                                else
                                                                                here</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        </ul>
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
                                                        <div
                                                            className="form-check d-flex align-items-center justify-content-center">
                                                            <input className="form-check-input" type="radio"
                                                                name="tableRadio" id="radio2"/>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <ul
                                                            className="mb-0 p-0 d-flex align-items-center justify-content-between">
                                                            <li>
                                                                <a href="#" onClick={(e) => e.preventDefault()} className="text-reset"><i
                                                                        className="fa-solid fa-pen"></i></a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => e.preventDefault()} className="text-reset"><i
                                                                        className="fa-solid fa-share-nodes"></i></a>
                                                            </li>
                                                            <li>
                                                                <div className="dropdown">
                                                                    <button className="bg-transparent" type="button"
                                                                        id="actionsDropdown" data-bs-toggle="dropdown"
                                                                        aria-expanded="false">
                                                                        <i className="fa-solid fa-ellipsis-vertical"></i>
                                                                    </button>
                                                                    <ul className="dropdown-menu"
                                                                        aria-labelledby="actionsDropdown">
                                                                        <li><a className="dropdown-item" href="#">Action</a>
                                                                        </li>
                                                                        <li><a className="dropdown-item" href="#">Another
                                                                                action</a>
                                                                        </li>
                                                                        <li><a className="dropdown-item" href="#">Something
                                                                                else
                                                                                here</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        </ul>
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
                                                        <div
                                                            className="form-check d-flex align-items-center justify-content-center">
                                                            <input className="form-check-input" type="radio"
                                                                name="tableRadio" id="radio3"/>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <ul
                                                            className="mb-0 p-0 d-flex align-items-center justify-content-between">
                                                            <li>
                                                                <a href="#" onClick={(e) => e.preventDefault()} className="text-reset"><i
                                                                        className="fa-solid fa-pen"></i></a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => e.preventDefault()} className="text-reset"><i
                                                                        className="fa-solid fa-share-nodes"></i></a>
                                                            </li>
                                                            <li>
                                                                <div className="dropdown">
                                                                    <button className="bg-transparent" type="button"
                                                                        id="actionsDropdown" data-bs-toggle="dropdown"
                                                                        aria-expanded="false">
                                                                        <i className="fa-solid fa-ellipsis-vertical"></i>
                                                                    </button>
                                                                    <ul className="dropdown-menu"
                                                                        aria-labelledby="actionsDropdown">
                                                                        <li><a className="dropdown-item" href="#">Action</a>
                                                                        </li>
                                                                        <li><a className="dropdown-item" href="#">Another
                                                                                action</a>
                                                                        </li>
                                                                        <li><a className="dropdown-item" href="#">Something
                                                                                else
                                                                                here</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        </ul>
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
                                                        <div
                                                            className="form-check d-flex align-items-center justify-content-center">
                                                            <input className="form-check-input" type="radio"
                                                                name="tableRadio" id="radio4"/>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <ul
                                                            className="mb-0 p-0 d-flex align-items-center justify-content-between">
                                                            <li>
                                                                <a href="#" onClick={(e) => e.preventDefault()} className="text-reset"><i
                                                                        className="fa-solid fa-pen"></i></a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => e.preventDefault()} className="text-reset"><i
                                                                        className="fa-solid fa-share-nodes"></i></a>
                                                            </li>
                                                            <li>
                                                                <div className="dropdown">
                                                                    <button className="bg-transparent" type="button"
                                                                        id="actionsDropdown" data-bs-toggle="dropdown"
                                                                        aria-expanded="false">
                                                                        <i className="fa-solid fa-ellipsis-vertical"></i>
                                                                    </button>
                                                                    <ul className="dropdown-menu"
                                                                        aria-labelledby="actionsDropdown">
                                                                        <li><a className="dropdown-item" href="#">Action</a>
                                                                        </li>
                                                                        <li><a className="dropdown-item" href="#">Another
                                                                                action</a>
                                                                        </li>
                                                                        <li><a className="dropdown-item" href="#">Something
                                                                                else
                                                                                here</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        </ul>
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
                                                        <div
                                                            className="form-check d-flex align-items-center justify-content-center">
                                                            <input className="form-check-input" type="radio"
                                                                name="tableRadio" id="radio5"/>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <ul
                                                            className="mb-0 p-0 d-flex align-items-center justify-content-between">
                                                            <li>
                                                                <a href="#" onClick={(e) => e.preventDefault()} className="text-reset"><i
                                                                        className="fa-solid fa-pen"></i></a>
                                                            </li>
                                                            <li>
                                                                <a href="#" onClick={(e) => e.preventDefault()} className="text-reset"><i
                                                                        className="fa-solid fa-share-nodes"></i></a>
                                                            </li>
                                                            <li>
                                                                <div className="dropdown">
                                                                    <button className="bg-transparent" type="button"
                                                                        id="actionsDropdown" data-bs-toggle="dropdown"
                                                                        aria-expanded="false">
                                                                        <i className="fa-solid fa-ellipsis-vertical"></i>
                                                                    </button>
                                                                    <ul className="dropdown-menu"
                                                                        aria-labelledby="actionsDropdown">
                                                                        <li><a className="dropdown-item" href="#">Action</a>
                                                                        </li>
                                                                        <li><a className="dropdown-item" href="#">Another
                                                                                action</a>
                                                                        </li>
                                                                        <li><a className="dropdown-item" href="#">Something
                                                                                else
                                                                                here</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        </ul>
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
      {showToast && (
        <Toast
          className="cst-toast align-items-center text-white border-0 font-12"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          id="radioToast"
          delay={3000}
          autohide
          onClose={handleRemoveToast}
        >
          <div className="d-flex">
            <Toast.Body className="">Switch to {activeUserID}</Toast.Body>
            <button
              type="button"
              className="btn-close btn-close-white m-auto pb-2"
              aria-label="Close"
              onClick={handleRemoveToast}
            >
              Undo
            </button>
          </div>
        </Toast>
      )}
    </main>
  );
}

export default SwitchAccount;
