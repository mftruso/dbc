import {Col, Container, Row} from "react-bootstrap";
import React from "react";
import LogoImage from "./logoImage";

const Footer = () => (
    <div id="footer" className="pt-4">
        <Container>
            <Row>
                <Col>
                    <address>Dave Berg Consulting, LLC <br/>
                        Phone: (612) 850-2305<br/>
                        15213 Danbury Ave W<br/>
                        Rosemount, MN 55068<br/>
                        <a href="mailto:dave@davebergconsulting.com">dave@davebergconsulting.com</a><br/>
                    </address>
                </Col>
                <Col>
                    <LogoImage/>
                    <p>Registered professional engineer in Minnesota and Missouri.</p>

                </Col>
            </Row>
        </Container>
    </div>
)

export default Footer;
