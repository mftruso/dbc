import React, {Fragment} from 'react'
import PortraitImage from "./portraitImage";

const Header = ({siteTitle, siteTagline}) => (
    <Fragment>
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
        </header>
    </Fragment>
)

export default Header
