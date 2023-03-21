import { graphql } from "gatsby"
import * as React from "react"

export default function Kontakt({ data }) {
    return (
        <>
        </>
    )
}

export const query = graphql`
    query kontakt ($id: String!) {
        wpPage(id: {eq: $id}){
            id
        }
    }
`
