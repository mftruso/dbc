import React from 'react'
import PortraitImage from "./portraitImage";

const Header = ({siteTitle, siteTagline}) => (
    <>
        <header id="header">
            <div id="head" className="parallax" parallax-speed="2">
                <h1 id="logo" className="text-center">
                    <PortraitImage/>
                    <span className="title">{siteTitle}</span>
                    <span className="tagline">
                        <a href="mailto:dave@davebergconsulting.com">dave@davebergconsulting.com</a>
                    </span>
                </h1>
            </div>
        {/*<Navbar bg="dark" variant="dark">*/}
            {/*<Container>*/}
                {/*<Navbar.Brand href="#">*/}
                    {/*{siteTitle}*/}
                {/*</Navbar.Brand>*/}
            {/*</Container>*/}
        {/*</Navbar>*/}
        </header>
    </>
)

export default Header
