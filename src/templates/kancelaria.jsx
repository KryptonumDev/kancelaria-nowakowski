import { graphql } from "gatsby"
import * as React from "react"

export default function Kancelaria({ data }) {
    const {
        allWpPost: { nodes: posts },
        global: {
            global: {
                sectionContact,
                sectionBlog
            } },
        wpPage: {
            kancelaria: {
                heroKancelaria,
                twoColumnFlexKancelaria,
                teamKancelaria,
                sectionWithImgOnRightKancelaria,
                howWeWorkKancelaria
            }
        }
    } = data
    return (
        <>
        </>
    )
}

export { Head } from "./../components/sections/seo"

export const query = graphql`
    query kancelaria ($id: String!) {
        allWpPost(limit: 3) {
          nodes {
            id
            uri
            title
            excerpt
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
            id
            ...SEO
            kancelaria {
              heroKancelaria {
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
              twoColumnFlexKancelaria {
                sectionTitle
                flexRepeater {
                  rowTitle
                  rowText
                  image {
                    altText
                    localFile {
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                  }
                }
              }
              teamKancelaria {
                advocates {
                  leftTopText
                  leftBottomText
                  rightTopText
                  rightBottomText
                  osoby {
                    work
                    name
                    instagramLink
                    facebookLink
                    description
                    zdjecieOsoby {
                      altText
                      localFile {
                        childImageSharp {
                          gatsbyImageData
                        }
                      }
                    }
                  }
                }
                lawyers {
                  leftTopText
                  leftBottomText
                  rightTopText
                  rightBottomText
                  osoby {
                    description
                    facebookLink
                    fieldGroupName
                    instagramLink
                    name
                    work
                    zdjecieOsoby {
                      altText
                      localFile {
                        childImageSharp {
                          gatsbyImageData
                        }
                      }
                    }
                  }
                }
                other {
                  leftTopText
                  leftBottomText
                  rightTopText
                  rightBottomText
                  osoby {
                    description
                    facebookLink
                    instagramLink
                    name
                    work
                    zdjecieOsoby {
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
              sectionWithImgOnRightKancelaria {
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
              howWeWorkKancelaria {
                tytulSekcji
                rightText
                leftText
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
                advantagesWithImg {
                  title
                  image {
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
