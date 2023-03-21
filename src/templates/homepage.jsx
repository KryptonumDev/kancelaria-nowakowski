import { graphql } from "gatsby"
import * as React from "react"

export default function Homepage({ data }) {
    return (
        <></>
    )
}

export const query = graphql`
    query homepage ($id: String!) {
        wpPage(id: {eq: $id}){
            homepage {
              heroHome {
                pageTitle
                linksToSubpages {
                  link {
                    target
                    title
                    url
                  }
                }
                coloredButton {
                  target
                  title
                  url
                }
                transparentButton {
                  target
                  title
                  url
                }
                leftImage {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
                rightImage {
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
`
