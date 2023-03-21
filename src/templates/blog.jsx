import { graphql } from "gatsby"
import * as React from "react"

export default function Blog({ data }) {
    return (
        <>
        </>
    )
}

export { Head } from "./../components/sections/seo"

export const query = graphql`
    query blog ($id: String!) {
        wpPage(id: {eq: $id}){
            id
        }
    }
`
