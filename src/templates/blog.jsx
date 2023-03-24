import { graphql } from "gatsby"
import * as React from "react"
import Content from "../components/sections/blog-content"
import CallToAction from "../components/sections/cta-one-button"

export default function Blog({ pageContext, data }) {
  const { blogContent, callToActionBlog } = data.wpPage.blog
  return (
    <main>
      <Content categories={data.allWpCategory.nodes} posts={data.allWpPost.nodes} page={pageContext.page} data={blogContent} />
      <CallToAction data={callToActionBlog} />
    </main>
  )
}

export { Head } from "./../components/sections/seo"

export const query = graphql`
  query blog ($id: String!) {
    allWpCategory(filter: {count: {gt: 0}}) {
      nodes {
        slug
        count
        name
        uri
      }
    }
    allWpPost {
      nodes {
        id
        uri
        title
        excerpt
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
      }
    }
    wpPage(id: {eq: $id}){
      ...SEO
      blog {
        blogContent {
          pageTitle
        }
        callToActionBlog {
          titleAboveButton
          link {
            target
            title
            url
          }
          backgroundImage {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 90)
              }
            }
          }
        }
      }
    }
  }
`
