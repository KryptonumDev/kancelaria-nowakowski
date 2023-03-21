import { graphql } from "gatsby"
import * as React from "react"

export default function Wspolpraca({ data }) {
    return (
        <>
        </>
    )
}

export const query = graphql`
    query wspolpraca ($id: String!) {
        wpPage(id: {eq: $id}){
            id
        }
    }
`
