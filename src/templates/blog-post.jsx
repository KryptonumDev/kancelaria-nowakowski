import { graphql } from "gatsby"
import * as React from "react"
import Content from "../components/sections/gutenberg-content"
import Hero from "../components/sections/post-hero"
import useHeadings from "../hooks/create-headings"


export default function Post({ data }) {
  const { content, categories, featuredImage, gutenberg } = data.wpPost

  const headings = useHeadings(content)

  return (
    <main>
      <Hero categories={categories} title={gutenberg.title} excerpt={gutenberg.excerpt} featuredImage={featuredImage} />
      <Content content={content} headings={headings} />
    </main>
  )
}

export { Head } from "./../components/sections/seo"

export const query = graphql`
    query post ($id: String!) {
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
