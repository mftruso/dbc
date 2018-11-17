import React from 'react'

import Layout from '../components/layout'
import {Col, Container, Row} from "react-bootstrap";
import PortraitImage from "../components/portraitImage";

const IndexPage = () => (
    <Layout>
        <Container>
            <Row className="mt-4">
                <Col md="6">
                    <h1>Dedicated to providing personal service to consumer-owned utilities</h1>
                </Col>
                <Col md="6">
                    <PortraitImage/>
                </Col>
            </Row>
            <Row className="mt-4">
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
            <Row>
                <Col>
                    <h2>Utility Clients</h2>
                    <ul>
                        <li>Electric</li>
                        <li>Natural Gas</li>
                        <li>Water</li>
                        <li>Wastewater</li>
                        <li>Steam/Heat</li>
                    </ul>
                </Col>
                <Col>
                    <h2>Services</h2>
                    <ul>
                        <li>Retail Cost-of-Service and Rate Design</li>
                        <li>Rate Checkups Designed for Smaller Utilities</li>
                        <li>Wholesale Cost-of-Service and Rate Design</li>
                        <li>QA/QC of Utility Staff Prepared Analyses</li>
                        <li>Contract Negotiations</li>
                        <li>Utility Education Courses</li>
                        <li>Strategic Planning</li>
                        <li>Expert Testimony</li>
                        <li>Feasibility Studies</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </Layout>
)

export default IndexPage
