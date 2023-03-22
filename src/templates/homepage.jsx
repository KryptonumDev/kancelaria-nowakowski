import { graphql } from "gatsby"
import * as React from "react"
import Hero from "../components/sections/Home/Hero"
import StepsSection from "../components/sections/Home/StepsSection";
import Rules from "../components/sections/Home/Rules";
import Testimonials from "../components/sections/Home/Testimonials";
import CallToActionTwoBtns from "../components/sections/CallToActionTwoBtns";


export default function Homepage({ data }) {
  const {heroHome, stepsSection, sectionWithImgOnRightHome, sectionWithCommentsHome} = data.wpPage.homepage;
  const {callToActionBlog} = data.wpPage.blog;
  return (
    <main>
      <Hero data={heroHome} />
      <StepsSection data={stepsSection} />
      <Rules data={sectionWithImgOnRightHome} />
      <Testimonials data={sectionWithCommentsHome} />
      <CallToActionTwoBtns data={callToActionBlog} />
    </main>
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
      blog {
        callToActionBlog {
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