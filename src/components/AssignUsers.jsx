import React, { useState } from "react";
import back from "@/assets/images/back.svg";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import Select from "react-select";

function AssignUsers() {
    const options = [
        { value: "Harshana", label: "Harshana" },
        { value: "Akshay", label: "Akshay" },
        { value: "Mayank", label: "Mayank" },
        { value: "Vaishakh", label: "Vaishakh" },
        { value: "Jenil", label: "Jenil" },
        { value: "Nikhil", label: "Nikhil" },
      ];
      
      const [selectedOptions, setSelectedOptions] = useState([]);
    
      // Handler for multi-select changes
      const handleChange = (selected) => {
        setSelectedOptions(selected);
      };
    
      // Function to handle assignment
      const handleAssignUsers = () => {
        const assignedUsers = selectedOptions.map((option) => option.value);
        console.log("Assigned Users:", assignedUsers);
      };
  return (
    <main>
      <section>
        <Container fluid>
          <Row>
            <Col>
              <div className="assign">
                <h1 className="mb-4">
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="d-flex align-items-center text-reset"
                  >
                    <img src={back} alt="back" className="img-fluid pe-2" />
                    Assign Users
                  </a>
                </h1>
                <div className="assign-table position-relative mb-4">
                  <Card>
                    <Card.Body>
                      <div className="d-flex justify-content-between mb-4">
                        <div className="assign-table-head">
                          <h4 className="font-600">Manage Users</h4>
                          <p className="mb-0">
                            Assign or remove users from this account.
                          </p>
                        </div>
                      </div>
                      <Form className="add-article-form">
                        <Row className="">
                          <Col sm={6} className="">
                            <Form.Group className="mb-4" controlId="Platform">
                              <Form.Label>Platform</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Facebook"
                              />
                            </Form.Group>
                          </Col>
                          <Col sm={6} className="">
                            <Form.Group className="mb-4" controlId="adAccount">
                              <Form.Label>Ad Account Name</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Account 5"
                              />
                            </Form.Group>
                          </Col>
                          <Col md={12} className="">
                            <div className="mb-4">
                              <label
                                htmlFor="multi-select"
                                className="form-label"
                              >
                                Username
                              </label>
                              <div className="d-flex align-items-center">
                                <Select
                                  id="multi-select"
                                  options={options}
                                  isMulti
                                  name="users"
                                  value={selectedOptions}
                                  onChange={handleChange}
                                  className="basic-multi-select"
                                  classNamePrefix="select"
                                />
                                <button
                                  type="button"
                                  className="btn btn-primary ms-3"
                                  onClick={handleAssignUsers}
                                >
                                  Assign Users
                                </button>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Form>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}

export default AssignUsers;
