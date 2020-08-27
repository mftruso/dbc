import React, {Fragment} from "react";
import LogoImage from "./logoImage";
import {OutboundLink} from "gatsby-plugin-google-analytics"

const DbcFooter = () => (
    <Fragment>
        <footer id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 widget">
                        <h3 className="widget-title">Contact</h3>
                        <div className="widget-body">
                            <p>(612) 850-2305<br/>
                                <OutboundLink href="mailto:dave@davebergconsulting.com">dave@davebergconsulting.com</OutboundLink><br/>
                                <br/>
                                15213 Danbury Ave W, Rosemount, MN 55068
                            </p>
                        </div>
                    </div>



                    <div className="col-md-3 widget">
                        <h3 className="widget-title">Licenses</h3>
                        <div className="widget-body">
                            <p>Dave Berg is a registered engineer in Minnesota and Missouri.</p>
                        </div>
                    </div>

                    <div className="col-md-3 widget">
                        <div className="widget-body">
                            <LogoImage/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        <footer id="underfooter">
            <div className="container">
                <div className="row">

                    <div className="col-md-6 widget">
                        <div className="widget-body">
                            <p></p>
                        </div>
                    </div>

                    <div className="col-md-6 widget">
                        <div className="widget-body">
                            <p className="text-right">
                                Copyright &copy; 2020, Dave Berg Consulting, LLC<br/>
                                Design: <OutboundLink href="http://www.gettemplate.com" rel="designer">Initio by
                                GetTemplate</OutboundLink><br/>
                                Development: <OutboundLink href="https://miketruso.com">Truso Web Development</OutboundLink>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    </Fragment>
)

export default DbcFooter;
