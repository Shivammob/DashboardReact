import React from 'react'
import refresh from "@/assets/images/refresh.svg"
import all from "@/assets/images/all.jpg"
import active from "@/assets/images/active.jpg"
import inactive from "@/assets/images/inactive.jpg"
import pendingRequest from "@/assets/images/peding_requests.jpg"
import { Card, Col, Container, Row } from 'react-bootstrap'
import ControlPanelDt from './components/datatables/ControlPanelDt'

function ControlPanel() {
  return (
    <main>
        <section>
            <Container fluid className="">
                <Row className="">
                    <Col className="">
                        <div className="controlpanel">
                            <div className="controlpanel-heading d-flex justify-content-between flex-wrap mb-4">
                                <h1 className="mb-0">Settings</h1>
                                <a href="#" onClick={(e) => e.preventDefault()} className="me-2"><img src={refresh} alt="refresh"
                                        className="img-fluid"/></a>
                            </div>
                            <div className="nav-lists bg-grey mb-4 p-3 p-md-4">
                                <ul className="bg-white d-flex align-items-center p-0 mb-0">
                                    <li>
                                        <a href="#" onClick={(e) => e.preventDefault()}>Account</a>
                                    </li>
                                    <li>
                                        <a href="#" onClick={(e) => e.preventDefault()} className="active">Control Panel</a>
                                    </li>
                                    <li>
                                        <a href="#" onClick={(e) => e.preventDefault()}>Switch Account</a>
                                    </li>
                                    <li>
                                        <a href="#" onClick={(e) => e.preventDefault()}>Performance Report</a>
                                    </li>
                                    <li>
                                        <a href="#" onClick={(e) => e.preventDefault()}>Change Password</a>
                                    </li>
                                </ul>
                            </div>
                            <Row className="">
                                <Col md={8} className="mb-4">
                                    <Card className="h-100">
                                        <Card.Body className="p-3">
                                            <h3 className="font-600">Admin Control Panel</h3>
                                            <p>Tracking our path to prosperity, one dollar at a time.</p>
                                            <Row className="g-0">
                                                <Col xs={6} md={3} className="pe-2 mb-3">
                                                    <div className="controlpanel-admin">
                                                        <img src={all} alt="all" className="img-fluid mb-3"/>
                                                        <h2 className="font-24 font-600 mb-3">14</h2>
                                                        <p className="font-12 text-md-nowrap mb-0">All</p>
                                                    </div>
                                                </Col>
                                                <Col xs={6} md={3} className="pe-2 mb-3">
                                                    <div className="controlpanel-admin">
                                                        <img src={active} alt="active"
                                                            className="img-fluid mb-3"/>
                                                        <h2 className="font-24 font-600 mb-3">13</h2>
                                                        <p className="font-12 text-md-nowrap mb-0">Active</p>
                                                    </div>
                                                </Col>
                                                <Col xs={6} md={3} className="pe-2 mb-3">
                                                    <div className="controlpanel-admin">
                                                        <img src={inactive} alt="inactive"
                                                            className="img-fluid mb-3"/>
                                                        <h2 className="font-24 font-600 mb-3">01</h2>
                                                        <p className="font-12 text-md-nowrap mb-0">Inactive</p>
                                                    </div>
                                                </Col>
                                                <Col xs={6} md={3} className="">
                                                    <div className="controlpanel-admin">
                                                        <img src={pendingRequest} alt="peding_requests"
                                                            className="img-fluid mb-3"/>
                                                        <h2 className="font-24 font-600 mb-3">01</h2>
                                                        <p className="font-12 text-md-nowrap mb-0">Pending Requests</p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={4} className="mb-4">
                                    <div className="controlpanel-account h-100">
                                        <Card className="h-100">
                                            <Card.Body className="">
                                                <h3 className="font-600 mb-3">Add New User Account</h3>
                                                <p className="mb-4">
                                                    Create and manage new user accounts effortlessly. Set roles,
                                                    permissions, and access controls in a few clicks for seamless
                                                    onboarding.
                                                </p>
                                                <a href="#" onClick={(e) => e.preventDefault()} className="btn primarybtn mb-2"><i
                                                        className="fa-solid fa-circle-plus"></i> Add New Account</a>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="paneltable position-relative mb-4">
                            <Card className="">
                                <Card.Body className="">
                                    <ControlPanelDt/>
                                    {/* <div className="table-responsive">
                                        <table className="table stripe table-hover text-nowrap" width="100%" id="paneltable">
                                            <thead>
                                                <tr>
                                                    <th>User ID</th>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Type</th>
                                                    <th>Fb A/c Count</th>
                                                    <th>Last Logged In</th>
                                                    <th>Status</th>
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
                                                        <label className="form-switch">
                                                            <input type="checkbox"/>
                                                            <span className="slider"></span>
                                                        </label>
                                                    </td>
                                                    <td>
                                                        <ul className="mb-0 p-0 d-flex align-items-center justify-content-between">
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
                                                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                                                        <li><a className="dropdown-item" href="#">Another action</a>
                                                                        </li>
                                                                        <li><a className="dropdown-item" href="#">Something else
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
                                                        <label className="form-switch">
                                                            <input type="checkbox"/>
                                                            <span className="slider"></span>
                                                        </label>
                                                    </td>
                                                    <td>
                                                        <ul className="mb-0 p-0 d-flex align-items-center justify-content-between">
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
                                                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                                                        <li><a className="dropdown-item" href="#">Another action</a>
                                                                        </li>
                                                                        <li><a className="dropdown-item" href="#">Something else
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
                                                        <label className="form-switch">
                                                            <input type="checkbox"/>
                                                            <span className="slider"></span>
                                                        </label>
                                                    </td>
                                                    <td>
                                                        <ul className="mb-0 p-0 d-flex align-items-center justify-content-between">
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
                                                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                                                        <li><a className="dropdown-item" href="#">Another action</a>
                                                                        </li>
                                                                        <li><a className="dropdown-item" href="#">Something else
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
                                                        <label className="form-switch">
                                                            <input type="checkbox"/>
                                                            <span className="slider"></span>
                                                        </label>
                                                    </td>
                                                    <td>
                                                        <ul className="mb-0 p-0 d-flex align-items-center justify-content-between">
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
                                                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                                                        <li><a className="dropdown-item" href="#">Another action</a>
                                                                        </li>
                                                                        <li><a className="dropdown-item" href="#">Something else
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
                                                        <label className="form-switch">
                                                            <input type="checkbox"/>
                                                            <span className="slider"></span>
                                                        </label>
                                                    </td>
                                                    <td>
                                                        <ul className="mb-0 p-0 d-flex align-items-center justify-content-between">
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
                                                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                                                        <li><a className="dropdown-item" href="#">Another action</a>
                                                                        </li>
                                                                        <li><a className="dropdown-item" href="#">Something else
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

    </main>
  )
}

export default ControlPanel