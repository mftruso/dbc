import React from 'react'

import Layout from '../components/layout'
import {Card, Col, Container, Row} from "react-bootstrap";

const services = [
    'Retail Cost-of-Service and Rate Design',
    'Rate Checkups Designed for Smaller Utilities',
    'Wholesale Cost-of-Service and Rate Design',
    'QA/QC of Utility Staff Prepared Analyses',
    'Contract Negotiations',
    'Utility Education Courses',
    'Strategic Planning', 'Expert Testimony',
    'Feasibility Studies'
]
const IndexPage = () => (
    <Layout>
        <main id="main">
        <Container>
            <div className="row section topspace">
                <div className="col-md-12">
                    <p className="lead text-center text-muted">
                        Dedicated to providing personal service to consumer-owned utilities
                    </p>
                </div>
            </div>

            <Row className="section featured topspace">
                <h2 className="section-title"><span>Clients</span></h2>
            </Row>
            <Row>
                <Col sm={6} md>
                    <h3 className="text-center">Electric</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non tristique velit. Ut quis arcu quam. Aliquam non nulla leo. Fusce cursus est a ipsum dictum, in aliquet quam egestas. </p>
                </Col>
                <Col sm={6} md>
                    <h3 className="text-center">Natural Gas</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non tristique velit. Ut quis arcu quam. Aliquam non nulla leo. Fusce cursus est a ipsum dictum, in aliquet quam egestas. </p>
                </Col>
                <Col sm={6} md>
                    <h3 className="text-center">Water</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non tristique velit. Ut quis arcu quam. Aliquam non nulla leo. Fusce cursus est a ipsum dictum, in aliquet quam egestas. </p>
                </Col>
                <Col sm={6} md>
                    <h3 className="text-center">Wastewater</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non tristique velit. Ut quis arcu quam. Aliquam non nulla leo. Fusce cursus est a ipsum dictum, in aliquet quam egestas. </p>
                </Col>
                <Col sm={6} md>
                    <h3 className="text-center">Steam/Heat</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non tristique velit. Ut quis arcu quam. Aliquam non nulla leo. Fusce cursus est a ipsum dictum, in aliquet quam egestas. </p>
                </Col>
            </Row>
            <Row className="section featured topspace">

                    <h2 className="section-title"><span>Services</span></h2>
                {services.map((service, i) =>(
                    <Col key={i} md={4} >
                        <Card className="my-2">
                            <Card.Body>
                                <Card.Text>
                                    <h5>{service}</h5>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <Row className="section featured topspace">
                <h2 className="section-title"><span>About</span></h2>
                <Col>
            <p>After spending my entire career at large consulting firms, the last 25 years at R.W. Beck/SAIC, I have formed
                my own firm to provide a more personal level of service to my clients.</p>
            <p>Dave has more than 30 years experience providing professional consulting services to utilities. These
                services have required a combination of technical and economic expertise to assist clients with important
                decisions affecting the operational and financial health of their utilities. Over the course of his career,
                he has managed projects including retail and wholesale utility cost-of-service and rate design, power
                generation feasibility studies, power supply planning analyses, energy supply contract negotiations,
                strategic planning, consulting engineer reports in support of bond financings and utility education courses.
                Services have been provided to electric, natural gas, water, wastewater and steam utilities.</p>
            <p>Dave has a bachelor's degree and master's degree in electrical engineering from North Dakota State
                University.</p>
                </Col>
            </Row>
        </Container>
        </main>
    </Layout>
)

export default IndexPage
