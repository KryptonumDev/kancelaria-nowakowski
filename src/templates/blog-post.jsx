import { graphql } from "gatsby"
import * as React from "react"
import Content from "../components/sections/post-content"
import Hero from "../components/sections/post-hero"
import { slugTransform } from "../helpers/slug-transform"


export default function Post({ data }) {
    const { content, categories, title, excerpt, featuredImage } = data.wpPost

    const headings = React.useMemo(() => {
        const htmlObject = document.createElement('div')
        htmlObject.innerHTML = content
        const titles = htmlObject.querySelectorAll("h2")

        for (var i = 0; i < titles.length; i++){
            titles[i].id = 'abc-' + i;
        }

        return Array.from(titles)
    }, [content])

    return (
        <main>
            <Hero categories={categories} title={title} excerpt={excerpt} featuredImage={featuredImage} />
            <Content content={content} headings={headings} />
        </main>
    )
}

export { Head } from "./../components/sections/seo"

export const query = graphql`
    query post ($id: String!) {
        wpPost(id: {eq: $id}){
            ...PostSEO
            id
            title
            excerpt
            content
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
                uri
                name
                slug
              }
            }
        }
    }
`
