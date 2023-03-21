import { graphql } from "gatsby"
import * as React from "react"

export default function Specializacja({ data }) {
    return (
        <>
        </>
    )
}

export const query = graphql`
    query specializacja ($id: String!) {
        wpPage(id: {eq: $id}){
            id
        }
    }
`
