import { graphql, useStaticQuery } from "gatsby"
import React from "react"

const createBreadcrumbs = (siteMetadata, breadCrumbs) => {
  const items = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": siteMetadata.title,
      "item": siteMetadata.siteUrl
    }
  ]

  breadCrumbs.forEach((el, index) => {
    items.push({
      "@type": "ListItem",
      "position": index + 2,
      "name": el.name,
      "item": el.url
    })
  });

  return items
}

export function Head({ data, pageContext }) {
  const seo = data.wpPage?.seo || data.wpPost?.seo || data.wpSpecjalizacja?.seo// TODO: add custom post 
  const { site: siteMetadata } = useStaticQuery(graphql`
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
  const breadCrumbsItems = createBreadcrumbs(siteMetadata, pageContext.breadcrumbs)
  debugger
  return (
    <>
      {breadCrumbsItems.length > 1 ? (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": breadCrumbsItems
          })}
        </script>
      ) : null}

      <meta charSet="utf-8" />
      <meta property="og:site_name" content={seo.opengraphSiteName || siteMetadata.title} />
      <meta name="robots" content="noindex" />

      <link rel="canonical" href={canonical} />
      <meta property="og:url" content={canonical} />

      <title>{seo.title || siteMetadata.title}</title>
      <meta property="twitter:title" content={seo.title || siteMetadata.title} />
      <meta property="og:title" content={seo.title || siteMetadata.title} />

      <meta name="description" content={seo.metaDesc || siteMetadata.description} />
      <meta property="twitter:description" content={seo.metaDesc || siteMetadata.description} />
      <meta property="og:description" content={seo.metaDesc || siteMetadata.description} />

      <meta property="og:image" content={
        seo?.opengraphImage?.localFile?.publicURL
          ? siteMetadata.siteUrl + seo.opengraphImage.localFile.publicURL
          : siteMetadata.image}
      />
      <meta property="twitter:image" content={
        seo?.opengraphImage?.localFile?.publicURL
          ? siteMetadata.siteUrl + seo.opengraphImage.localFile.publicURL
          : siteMetadata.image}
      />
    </>
  )
}