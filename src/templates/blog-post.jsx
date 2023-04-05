import { graphql } from "gatsby"
import * as React from "react"
import Content from "../components/sections/gutenberg-content"
import Hero from "../components/sections/post-hero"
import ContactUs from "../components/sections/ContactUs"
import OtherPosts from "../components/sections/another-posts"


export default function Post({ data }) {
  const { content, categories, featuredImage, gutenberg } = data.wpPost

  return (
    <main>
      <Hero categories={categories} title={gutenberg.title} excerpt={gutenberg.excerpt} featuredImage={featuredImage} />
      <Content content={content} />
      <OtherPosts posts={data.allWpPost.nodes} />
      <ContactUs data={data.global.global.sectionContact} />
    </main>
  )
}

export { Head } from "./../components/sections/seo"

export const query = graphql`
    query post ($id: String!) {
      allWpPost(limit: 3, sort: {date: DESC}) {
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
      global : wpPage(id: {eq: "cG9zdDoxNjg="}) {
        global {
          sectionContact {
            sectionTitle
            contentUnderTitle
          }
        }
      }
        wpPost(id: {eq: $id}){
            ...PostSEO
            id
            gutenberg {
              excerpt
              title : tytulStrony
            }
            dateGmt
            modifiedGmt
            title
            content
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
                uri
                name
                slug
              }
            }
        }
    }
`
