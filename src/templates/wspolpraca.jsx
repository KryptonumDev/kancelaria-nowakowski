import { graphql } from "gatsby"
import * as React from "react"

export default function Wspolpraca({ data }) {
    return (
        <>
        </>
    )
}

export { Head } from "./../components/sections/seo"

export const query = graphql`
    query wspolpraca ($id: String!) {
        wpPage(id: {eq: $id}){
            id
            ...SEO
        }
    }
`
