require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Gatsby Portfolio`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID || ``,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || ``,
        host: ``
      }
    },
    `gatsby-transformer-remark`
  ],
}
