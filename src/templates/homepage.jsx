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
    wpPage(id: {eq: $id}) {
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
        blogSectionHome {
          sectionTitle
          leftTextUnderTitle
          rightTextUnderTitle
        }
        sectionCtaHome {
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
        sectionContactHome {
          sectionTitle
          contentUnderTitle
        }
      }
    }
  }
`
