import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import BreadCrumbs from "../layout/schema/breadcrumbs"
import Organization from "../layout/schema/organization"
import Post from "../layout/schema/post"

export function Head({ data, pageContext }) {
  const seo = data.wpCategory?.seo|| data.wpPage?.seo || data.wpPost?.seo || data.wpSpecjalizacja?.seo
  const { site: { siteMetadata } } = useStaticQuery(graphql`
  query {
      site {
          siteMetadata {
              title
              description
              image
              siteUrl
          }
      }
  }
`)
  const canonical = siteMetadata.siteUrl + pageContext.uri

  return (
    <>
      <BreadCrumbs siteMetadata={siteMetadata} pageContext={pageContext} />
      <Organization siteMetadata={siteMetadata} />
      {data.wpPost &&
        <Post siteMetadata={siteMetadata} canonical={canonical} data={data.wpPost} context={pageContext} />}
      <meta charSet="utf-8" />
      <meta property="og:site_name" content={seo.opengraphSiteName || siteMetadata.title} />
      <link rel="canonical" href={canonical} />
      <meta property="og:url" content={canonical} />
      <title>{seo.title || siteMetadata.title}</title>
      <meta property="twitter:title" content={seo.title || siteMetadata.title} />
      <meta property="og:title" content={seo.title || siteMetadata.title} />
      <meta name="description" content={seo.metaDesc || siteMetadata.description} />
      <meta property="twitter:description" content={seo.metaDesc || siteMetadata.description} />
      <meta property="og:description" content={seo.metaDesc || siteMetadata.description} />
      <meta property="og:image" content={siteMetadata.image} />
      <meta property="twitter:image" content={siteMetadata.image} />
    </>
  )
}