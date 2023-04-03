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
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-KHNZS7X",
        includeInDevelopment: true,
        defaultDataLayer: { platform: "gatsby" },
      },
    },
    {
      resolve: "gatsby-plugin-yoast-sitemap",
      options: {
        baseUrl : "https://kancelaria.headlesshub.com",
        gatsbyUrl : 'https://kancelaria.gatsbyjs.io',
        defaultDataLayer: { platform: "gatsby" },
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://kancelaria.gatsbyjs.io',
        sitemap: 'https://kancelaria.gatsbyjs.iositemap-index.xml',
        policy: [{userAgent: '*', allow: '/'}]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kancelaria Nowakowski`,
        short_name: `Kancelaria`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#51C6B1`,
        display: `standalone`,
        icon: `static/logo.png`,
      },
    }
  ]
}