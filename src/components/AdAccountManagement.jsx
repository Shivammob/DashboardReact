import React, { useState } from "react";
import { Card, Col, Container, Dropdown, Row } from "react-bootstrap";
import AdAccountManagementDt from "./datatables/AdAccountManagementDt";
import AddNewAccountModal from "./modals/AdAccountManageModal";

function AdAccountManagement() {
  const [showmodal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  return (
    <main>
      <section>
        <Container fluid>
          <Row>
            <Col>
              <div className="account">
                <div className="account-heading d-flex justify-content-between align-items-center flex-wrap mb-4">
                  <h1 className="mb-3">Ad Account Management</h1>
                  <a
                    href="#"
                    onClick={handleShow}
                    className="btn primarybtn mb-3">
                    <i className="fa-solid fa-plus pe-1"></i> Add Account
                  </a>
                </div>
                <div className="account-table position-relative mb-4">
                  <Card>
                    <Card.Body>
                      <div className="d-flex justify-content-between mb-4">
                        <div className="account-table-head">
                          <h4 className="font-600">Overview</h4>
                          <p className="mb-0">
                            View and manage all your ad accounts in one place.
                          </p>
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
                      <AdAccountManagementDt />
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <AddNewAccountModal showmodal={showmodal} handleClose={handleClose} />
    </main>
  );
}

export default AdAccountManagement;
