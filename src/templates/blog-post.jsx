import { graphql } from "gatsby"
import * as React from "react"

export default function Post({ data }) {
    return (
        <>
        </>
    )
}

export { Head } from "./../components/sections/seo"

export const query = graphql`
    query post ($id: String!) {
        wpPost(id: {eq: $id}){
            id
        }
    }
`
