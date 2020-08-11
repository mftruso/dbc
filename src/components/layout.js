import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {graphql, StaticQuery} from 'gatsby'

import Header from './header'
import '../sass/layout.scss'
import '../sass/initio-styles.css'
import '../sass/custom.scss'
import favicon from '../images/favicon.ico'
import DbcFooter from "./dbcFooter";

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
            <Fragment>
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

                <DbcFooter/>
            </Fragment>
        )}
    />
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
