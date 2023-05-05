module.exports = {
  siteMetadata: {
    title: `Kancelaria Nowakowski - Kancelaria Adwokacka`,
    description: 'Odszkodowania / Nieruchomości / Spadki / Kredyty frankowe / Rozwody / Prawo dla firm. Kancelaria adwokacka z wieloletnim doświadczeniem.',
    siteUrl: `https://www.kancelaria-nowakowski.com.pl`,
    image: 'https://www.kancelaria-nowakowski.com.pl/social.jpg',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `none`,
          quality: 90,
          backgroundColor: "#ECFFFC",
        }
      }
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sitemap",
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
        html: {
          useGatsbyImage: false,
        },
        schema: {
          timeout: 3000000,
        },
        type: {
          MediaItem: {
            localFile: {
              maxFileSizeBytes: 52428800, // 50Mb
            },
          },
        },
        "url": "https://kancelaria.headlesshub.com/graphql"
      }
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-T89S9LL",
        includeInDevelopment: false,
      },
    },
    {
      resolve: "gatsby-plugin-yoast-sitemap",
      options: {
        baseUrl: "https://kancelaria.headlesshub.com",
        gatsbyUrl: 'https://www.kancelaria-nowakowski.com.pl',
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.kancelaria-nowakowski.com.pl',
        sitemap: 'https://www.kancelaria-nowakowski.com.pl/sitemap-index.xml',
        policy: [{ userAgent: '*', allow: '/' }]
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