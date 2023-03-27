import { graphql } from "gatsby"
import * as React from "react"

export default function PolityaPrywatnosci({ data }) {
    return (
        <>
        </>
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
