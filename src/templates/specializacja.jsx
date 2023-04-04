import { graphql } from "gatsby"
import * as React from "react"
import Hero from "../components/sections/specjalizacja-hero"
import Content from "../components/sections/gutenberg-content"
import ContactUs from "../components/sections/ContactUs"

export default function Specializacja({ data }) {
  const { content, gutenberg, featuredImage } = data.wpSpecjalizacja
  return (
    <main>
      <Hero title={gutenberg.title} excerpt={gutenberg.excerpt} featuredImage={featuredImage} />
      <Content content={content} />
      <ContactUs data={data.global.global.sectionContact} />
    </main>
  )
}

export { Head } from "./../components/sections/seo"

export const query = graphql`
  query specializacja ($id: String!) {
    wpSpecjalizacja(id: {eq: $id}){
      ...specjalizacjaSEO
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
      content
    }
    global : wpPage(id: {eq: "cG9zdDoxNjg="}) {
      global {
        sectionContact {
          sectionTitle
          contentUnderTitle
        }
      }
    }
  }
`
