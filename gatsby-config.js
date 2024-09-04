/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Dave Berg Consulting`,
    tagline: 'Dedicated to providing personal service to consumer-owned utilities',
    siteUrl: `https://www.davebergconsulting.com`,
    description: "Providing professional services to electric, natural gas, water and wastewater utilities including retail and wholesale cost-of-service and rate design studies",
    keywords: "electric, natural gas, water, wastewater, rate study, utility, utilities, professional, consulting, rate design"
  },
  plugins: ["gatsby-plugin-sass", {
    resolve: "gatsby-plugin-google-gtag",
    options: {
      trackingIds: ["UA-175196631-1"],
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};