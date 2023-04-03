require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Kancelaria Nowakowski`,
    description: 'placeholder',
    siteUrl: `https://kancelaria.gatsbyjs.io`,
    image: 'https://kancelaria.gatsbyjs.io/social.jpg',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `blurred`,
          quality: 90,
          backgroundColor: `transparent`,
        }
      }
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/resources/images/"
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        schema: {
          timeout: 3000000,
        },
        "url": "https://kancelaria.headlesshub.com/graphql"
      }
    },
  ]
}