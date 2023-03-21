import { graphql } from "gatsby"
import * as React from "react"

export default function SpecializacjaArchiwum({ data }) {
    return (
        <>
        </>
    )
}

export { Head } from "./../components/sections/seo"

export const query = graphql`
    query archiwum ($id: String!) {
        wpPage(id: {eq: $id}){
            id
        }
    }
`
