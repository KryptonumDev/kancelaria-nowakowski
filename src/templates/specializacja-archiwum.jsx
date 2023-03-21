import { graphql } from "gatsby"
import * as React from "react"

export default function SpecializacjaArchiwum({ data }) {
    return (
        <>
        </>
    )
}

export const query = graphql`
    query archiwum ($id: String!) {
        wpPage(id: {eq: $id}){
            id
        }
    }
`
