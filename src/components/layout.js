import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {StaticQuery, graphql} from 'gatsby'

import Header from './header'
import '../sass/layout.scss'
// import '../sass/initio-styles.css'
import favicon from '../images/favicon.ico'
import Footer from "./footer";

const Layout = ({children}) => (
    <StaticQuery
        query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title,
            tagline
          }
        }
      }
    `}
        render={data => (
            <>
                <Helmet
                    title={data.site.siteMetadata.title}
                    meta={[
                        {name: 'description', content: 'Sample'},
                        {name: 'keywords', content: 'sample, something'},
                    ]}
                    link={[
                        {rel: 'shortcut icon', type: 'image/png', href: `${favicon}`}
                    ]}
                >
                    <html lang="en"/>
                </Helmet>
                <Header siteTitle={data.site.siteMetadata.title} siteTagline={data.site.siteMetadata.tagline}/>

                {children}

                <Footer/>
            </>
        )}
    />
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
