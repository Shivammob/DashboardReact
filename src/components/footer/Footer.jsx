import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Footer() {
    const currentYear = new Date().getFullYear();
    
  return (
    <footer>
        <div className="footerlog">
            <Container fluid className="">
                <Row className="">
                    <Col className="">
                        <div className="d-flex justify-content-between flex-wrap">
                            <p className="ps-lg-5 footerlog-para">© Copyrights {currentYear} | All Rights Reserved. Crafted with ❤️ by Mobavenue
                            </p>
                            <ul className="footerlog-lists d-flex align-items-center justify-content-end flex-wrap p-0">
                                <li>
                                    <a href="#" onClick={(e) => e.preventDefault()}>
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" onClick={(e) => e.preventDefault()}>
                                        Terms & Condition
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </footer>
  )
}

export default Footer