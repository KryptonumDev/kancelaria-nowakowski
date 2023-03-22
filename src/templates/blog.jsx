import { graphql } from "gatsby"
import * as React from "react"
import Content from "../components/sections/blog-content"
import CallToAction from "../components/sections/cta-one-button"

export default function Blog({ data }) {
  const { blogContent, callToActionBlog } = data.wpPage.blog
  return (
    <main>
      <Content data={blogContent}/>
      <CallToAction data={callToActionBlog}/>
    </main>
  )
}

export { Head } from "./../components/sections/seo"

export const query = graphql`
  query blog ($id: String!) {
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
