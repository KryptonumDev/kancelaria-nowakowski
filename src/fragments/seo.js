import { graphql } from "gatsby";

export const wpPageSeoFragment = graphql`
    fragment SEO on WpPage {
        seo {
            title
            metaDesc
            opengraphSiteName
            opengraphImage {
                localFile {
                    publicURL
                }
            }
        }
    }
`