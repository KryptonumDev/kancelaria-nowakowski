import { graphql } from "gatsby"
import * as React from "react"

export default function Post({ data }) {
    debugger
    return (
        <>
        </>
    )
}

export { Head } from "./../components/sections/seo"

export const query = graphql`
    query post ($id: String!) {
        wpPost(id: {eq: $id}){
            ...PostSEO
            id
        }
    }
`
