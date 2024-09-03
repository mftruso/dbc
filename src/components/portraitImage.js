import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const circleImgStyles = {
    display: 'block',
    width: '140px',
    height: '140px',
    overflow: 'hidden',
    border: '9px solid rgba(0, 0, 0, 0.05)',
    margin: '0 auto',
    'borderRadius': '50%'
}
const PortraitImage = () => (
    <StaticImage style={circleImgStyles} alt="Dave Berg" src="../images/Dave_Berg.jpg" />
)
export default PortraitImage
