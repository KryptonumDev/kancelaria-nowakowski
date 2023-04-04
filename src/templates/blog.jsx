import { graphql } from "gatsby"
import * as React from "react"
import Content from "../components/sections/blog-content"
import CallToAction from "../components/sections/cta-one-button"

export default function Blog({ pageContext, data }) {
  const { blogContent, callToActionBlog } = data.wpPage.blog

  const posts = React.useMemo(() => {
    if (!pageContext.category) {
      return data.allWpPost.nodes
    }

    return data.allWpPost.nodes.filter(el => {
      let isAccepted = false
      el.categories.nodes.forEach(el => {
        if (el.name === pageContext.category) {
          isAccepted = true
          return false
        }
        return true
      })
      return isAccepted
    })
  }, [data, pageContext])

  return (
    <main>
      <Content categories={data.allWpCategory.nodes} posts={posts} page={pageContext.page} data={blogContent} />
      <CallToAction data={callToActionBlog} />
    </main>
  )
}

export { Head } from "./../components/sections/seo"

export const query = graphql`
  query blog ($id: String!, $categoryId: String!) {
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
        gutenberg {
          excerpt
          title : tytulStrony
        }
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
    wpCategory(id: {eq: $categoryId}) {
      ...CategorySEO
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
