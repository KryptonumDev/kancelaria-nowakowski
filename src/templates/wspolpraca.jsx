import { graphql } from "gatsby"
import * as React from "react"
import Hero from "../components/sections/Wspolpraca/Hero";
import Process from "../components/sections/Process";
import HowWeWork from "../components/sections/Wspolpraca/HowWeWork";
import OrnamentSection from "../components/sections/OrnamentSection";
import Offert from "../components/sections/Wspolpraca/Offert";
import CallToAction from "../components/sections/cta-one-button"
import ContactUs from "../components/sections/ContactUs";

export default function Wspolpraca({ data }) {
  const {
    sectionWithImgOnRightCooperation,
    offersCooperation,
    howWeWorkCooperation,
    heroCooperation,
    codexCooperation,
    callToActionCooperation
  } = data.wpPage.cooperation
  return (
    <main>
      <Hero data={heroCooperation} />
      <Process data={codexCooperation} />
      <HowWeWork data={howWeWorkCooperation} />
      <OrnamentSection data={sectionWithImgOnRightCooperation} />
      <Offert data={offersCooperation} />
      <CallToAction data={callToActionCooperation} />
      <ContactUs data={data.global.global.sectionContact} />
    </main>
  )
}

export { Head } from "./../components/sections/seo"

export const query = graphql`
  query wspolpraca ($id: String!) {
    wpPage(id: {eq: $id}){
      id
      ...SEO
      cooperation {
        sectionWithImgOnRightCooperation {
          textUnderTitle
          sectionTitle
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
        offersCooperation {
          sectionTitle
          textUnderTitle
          leftContentPart {
            partName
            contentRepeater {
              subpartName
              subpartContent
            }
            partIcon {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: NONE)
                }
              }
            }
          }
          rightContentPart {
            partName
            contentRepeater {
              subpartName
              subpartContent
            }
            partIcon {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
        howWeWorkCooperation {
          sectionTitle
          textUnderTitle
          steps {
            text
            name
          }
        }
        heroCooperation {
          pageTitle
          textUnderTitle
          image {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          rightButton {
            title
            url
          }
          leftButton {
            title
            url
          }
        }
        codexCooperation {
          sectionTitle
          textUnderTitle
          advantagesTitle
          leftText
          rightText
          advantages {
            title
            text
            icon {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
        callToActionCooperation {
          titleAboveButton: title
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