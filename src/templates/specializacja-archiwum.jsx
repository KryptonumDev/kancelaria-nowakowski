import { graphql } from "gatsby"
import * as React from "react"
import Hero from "../components/sections/archive-specjalizacja-hero"
import Slider from "../components/sections/blog-slider"
import ContactUs from "../components/sections/ContactUs"

export default function SpecializacjaArchiwum({ data }) {
  const { sectionContact, sectionBlog } = data.global.global
  const { sectionGridSpecialisation } = data.wpPage.specjalizacje
  return (
    <main>
      <Hero data={sectionGridSpecialisation}/>
      <Slider posts={data.allWpPost.nodes} data={sectionBlog} />
      <ContactUs />
    </main>
  )
}

export { Head } from "./../components/sections/seo"

export const query = graphql`
    query archiwum ($id: String!) {
      allWpPost(limit: 3) {
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
            sectionBlog {
              sectionTitle
              leftTextUnderTitle
              rightTextUnderTitle
              callToAction {
                leftTitle
                leftLink {
                  target
                  title
                  url
                }
                rightTitle
                rightLink {
                  target
                  title
                  url
                }
                backgroundImage{
                  altText
                  localFile{
                    childImageSharp{
                      gatsbyImageData
                    }
                  }
                }
              }
            }
          }
        }
        wpPage(id: {eq: $id}){
            ...SEO
            specjalizacje {
                sectionGridSpecialisation {
                  pageTitle
                  linksToSubpages {
                    link {
                      target
                      title
                      url
                    }
                    backgroundImage {
                      altText
                      localFile {
                        childImageSharp {
                          gatsbyImageData(quality: 100)
                        }
                      }
                    }
                  }
                }
              }
        }
    }
`
