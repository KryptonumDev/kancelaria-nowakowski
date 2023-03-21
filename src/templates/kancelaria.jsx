import { graphql } from "gatsby"
import * as React from "react"

export default function Kancelaria({ data }) {
    return (
        <>
        </>
    )
}

export { Head } from "./../components/sections/seo"

export const query = graphql`
    query kancelaria ($id: String!) {
        wpPage(id: {eq: $id}){
            id
        }
    }
`
