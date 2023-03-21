import { graphql } from "gatsby"
import * as React from "react"

export default function Homepage({ data }) {
  return (
    <>
    </>
  )
}

export const query = graphql`
  query homepage($id: String!) {
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
    wpPage(id: {eq: $id}) {
      ...SEO
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
        stepsSection {
          sectionTitle
          textOnTheRight
          steps {
            stepText
          }
          textOnTheLeftUnderSteps
          titleAboveButtonUnderSteps
          linkUnderSteps {
            url
            title
            target
          }
        }
        sectionWithImgOnRightHome {
          sectionTitle
          textUnderTitle
          link {
            target
            title
            url
          }
          buttonHint
          imageOnTheRight {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        sectionWithCommentsHome {
          comments {
            commentTitle
            commentContent
            commentAuthor
            commentImage {
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
