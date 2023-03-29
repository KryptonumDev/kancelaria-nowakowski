import { graphql } from "gatsby"
import * as React from "react"

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
                        gatsbyImageData
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
                title
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
`
