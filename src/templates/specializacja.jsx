import { graphql } from "gatsby"
import * as React from "react"

export default function Specializacja({ data }) {
  return (
    <>
    </>
  )
}

export { Head } from "./../components/sections/seo"

export const query = graphql`
  query specializacja ($id: String!) {
      wpSpecjalizacja(id: {eq: $id}){
          ...specjalizacjaSEO
      }
  }
`
