import React from 'react'
import all from "@/assets/images/all.jpg"
import active from "@/assets/images/active.jpg"
import inactive from "@/assets/images/inactive.jpg"
import pendingRequest from "@/assets/images/peding_requests.jpg"
import { Card, Col, Container, Row } from 'react-bootstrap'
import ControlPanelDt from './datatables/ControlPanelDt'
import SettingTab from './tab/SettingTab'

function ControlPanel() {
  return (
    <main>
        <section>
            <Container fluid>
                <Row>
                    <Col>
                        <div className="controlpanel">
                            <SettingTab/>
                            <Row>
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
                                                <Col xs={6} md={3}>
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
                                            <Card.Body>
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
                            <Card>
                                <Card.Body>
                                    <ControlPanelDt/>
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