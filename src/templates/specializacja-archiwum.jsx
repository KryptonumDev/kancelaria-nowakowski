import { graphql } from "gatsby"
import * as React from "react"

export default function SpecializacjaArchiwum({ data }) {
    return (
        <>
        </>
    )
}

export { Head } from "./../components/sections/seo"

export const query = graphql`
    query archiwum ($id: String!) {
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
                          gatsbyImageData
                        }
                      }
                    }
                  }
                }
              }
        }
    }
`
