import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const PortraitImage = () => (
    <StaticQuery
        query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "Dave_Berg.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
        render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
    />
)
export default PortraitImage