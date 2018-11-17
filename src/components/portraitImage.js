import React from 'react'
import {graphql, StaticQuery} from 'gatsby'
import Img from 'gatsby-image'

const circleImgStyles = {
    display: 'block',
    width: '140px',
    height: '140px',
    overflow: 'hidden',
    border: '9px solid rgba(0, 0, 0, 0.05)',
    margin: '0 auto',
    'border-radius': '50%'
}
const PortraitImage = () => (
    <StaticQuery
        query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "Dave_Berg.jpg" }) {
          childImageSharp {
            fixed(width: 140, height: 140) {
              ...GatsbyImageSharpFixed
            },
          }
        }
      }
    `}
        render={data => <Img style={circleImgStyles} alt="Dave Berg"
                             fixed={data.placeholderImage.childImageSharp.fixed}/>}
    />
)
export default PortraitImage