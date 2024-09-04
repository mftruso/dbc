import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import { useSiteMetadata } from '../hooks/useSiteMetadata'
import Header from './header'
import '../sass/layout.scss'
import '../sass/initio-styles.css'
import '../sass/custom.scss'
import DbcFooter from "./dbcFooter";

const Layout = ({children}) => {
    const {title, tagline} = useSiteMetadata()

    return (
        <Fragment>
            <Header siteTitle={title} siteTagline={tagline}/>

            {children}

            <DbcFooter/>
        </Fragment>
    )
    
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
