import { graphql } from "gatsby"
import * as React from "react"

export default function Blog({ data }) {
    return (
        <>
        </>
    )
}

export const query = graphql`
    query blog ($id: String!) {
        wpPage(id: {eq: $id}){
            id
        }
    }
`
