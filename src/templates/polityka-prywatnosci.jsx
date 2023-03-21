import { graphql } from "gatsby"
import * as React from "react"

export default function PolityaPrywatnosci({ data }) {
    return (
        <>
        </>
    )
}

export const query = graphql`
    query polityka ($id: String!) {
        wpPage(id: {eq: $id}){
            id
        }
    }
`
