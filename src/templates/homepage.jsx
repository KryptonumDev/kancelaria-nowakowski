import { graphql } from "gatsby"
import * as React from "react"
import Hero from "../components/sections/Home/Hero"
import StepsSection from "../components/sections/Home/StepsSection";
import OrnamentSection from "../components/sections/OrnamentSection";
import Testimonials from "../components/sections/Home/Testimonials";
import Slider from "../components/sections/blog-slider";
import ContactUs from "../components/sections/ContactUs";


export default function Homepage({ data }) {
  const { heroHome, stepsSection, sectionWithImgOnRightHome, sectionWithCommentsHome } = data.wpPage.homepage;
  const { sectionBlog, sectionContact } = data.global.global;
  return (
    <main>
      <Hero data={heroHome} />
      <StepsSection data={stepsSection} />
      <OrnamentSection data={sectionWithImgOnRightHome} />
      <Testimonials data={sectionWithCommentsHome} />
      <Slider posts={data.allWpPost.nodes} data={sectionBlog} />
      <ContactUs />
    </main>
  )
}

export { Head } from "./../components/sections/seo"

export const query = graphql`
  query homepage($id: String!) {
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