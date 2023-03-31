import { graphql } from "gatsby"
import * as React from "react"
import CalendlyCta from "../components/sections/CalendlyCta"
import ContactUs from "../components/sections/ContactUs"

export default function Kontakt({ data }) {
  return (
    <main>
      <ContactUs />
      <CalendlyCta  data={data.wpPage.contact.sectionCtaContact}/>
    </main>
  )
}

export { Head } from "./../components/sections/seo"

export const query = graphql`
    query kontakt ($id: String!) {
        global : wpPage(id: {eq: "cG9zdDoxNjg="}) {
          global {
            sectionContact {
              sectionTitle
              contentUnderTitle
            }
          }
        }
        wpPage(id: {eq: $id}){
            ...SEO
            contact {
              sectionCtaContact {
                titleAboveButton
                link {
                  target
                  title
                  url
                }
                backgroundImg{
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
`
