import { graphql } from "gatsby"
import * as React from "react"
import Content from "../components/sections/content-privacy-policy"

export default function PolityaPrywatnosci({ data }) {
    return (
        <main>
            <Content data={data.wpPage.content} />
        </main>
    )
}

export { Head } from "./../components/sections/seo"

export const query = graphql`
    query polityka ($id: String!) {
        wpPage(id: {eq: $id}){
            title
            content
            ...SEO
        }
    }
`
