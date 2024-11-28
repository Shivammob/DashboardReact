import React, { useState } from "react";
import back from "@/assets/images/back.svg";
import { Card, Col, Container, Dropdown, Row } from "react-bootstrap";
import ManageCampaignDt from "./datatables/ManageCampaignDt";
import ManageCampaignModal from "./modals/ManageCampaignModal";

function ManageCampaign() {

    const [showmodal, setShowModal] = useState(false);
    
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

  return (
    <main>
      <section>
        <Container fluid>
          <Row>
            <Col>
              <div className="mangecamp">
                <div className="mangecamp-heading d-flex justify-content-between align-items-center flex-wrap mb-4">
                  <h1 className="mb-3">
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="d-flex align-items-center text-reset"
                    >
                      <img src={back} alt="back" className="img-fluid pe-2" />
                      Manage Campaign
                    </a>
                  </h1>
                  <a
                    href="#"
                    onClick={handleShow}
                    className="btn primarybtn mb-3">
                    <i className="fa-solid fa-plus pe-1"></i> Add Campaign
                  </a>
                </div>
                <div className="mangecamp-table position-relative mb-4">
                  <Card className="">
                    <Card.Body className="">
                      <div className="d-flex justify-content-between mb-4">
                        <div className="mangecamp-table-head">
                          <h4 className="font-600">Campaign Overview</h4>
                          <p className="mb-0">
                            Monitor and manage your campaigns with ease.
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
                      <ManageCampaignDt/>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <ManageCampaignModal showmodal={showmodal} handleClose={handleClose}/>
    </main>
  );
}

export default ManageCampaign;
