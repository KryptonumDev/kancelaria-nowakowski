import { graphql } from "gatsby"
import * as React from "react"
import Hero from "../components/sections/Home/Hero"

export default function Homepage({ data }) {
  const {heroHome} = data.home.homepage;
  return (
    <>
      <Hero data={heroHome} />
    </>
  )
}

export const query = graphql`
  query homepage ($id: String!) {
    home: wpPage(id: {eq: $id}){
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
