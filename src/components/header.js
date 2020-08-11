import React, {Fragment} from 'react'
import PortraitImage from "./portraitImage";
import {OutboundLink} from "gatsby-plugin-google-analytics"

const Header = ({siteTitle, siteTagline}) => (
    <Fragment>
        <header id="header">
            <div id="head" className="parallax" parallax-speed="2">
                <h1 id="logo" className="text-center">
                    <PortraitImage/>
                    <span className="title">{siteTitle}</span>
                    <span className="tagline">
                        <OutboundLink href="mailto:dave@davebergconsulting.com">dave@davebergconsulting.com</OutboundLink>
                    </span>
                </h1>
            </div>
        </header>
    </Fragment>
)

export default Header
