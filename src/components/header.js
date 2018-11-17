import React from 'react'
import {Container, Navbar} from "react-bootstrap";

const Header = ({siteTitle}) => (
    <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#">
                    {siteTitle}
                </Navbar.Brand>
            </Container>
        </Navbar>
    </>
)

export default Header
