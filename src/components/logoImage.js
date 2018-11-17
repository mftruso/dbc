import React from 'react'
import {graphql, StaticQuery} from 'gatsby'
import Img from 'gatsby-image'

const LogoImage = () => (
    <StaticQuery
        query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "DBC.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
        render={data => <Img alt="Dave Berg Consulting" fluid={data.placeholderImage.childImageSharp.fluid}/>}
    />
)
export default LogoImage
