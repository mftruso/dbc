import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const LogoImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "DBC.jpg" }) {
          childImageSharp {
            fixed(width: 125, height: 30) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <Img className="d-inline-block align-top" fixed={data.placeholderImage.childImageSharp.fixed} />}
  />
)
export default LogoImage
