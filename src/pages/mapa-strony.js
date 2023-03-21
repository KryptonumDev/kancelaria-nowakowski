import { graphql } from "gatsby"
import * as React from "react"
import { Ornament } from "../components/atoms/Icons"

const MapaStrony = ({ data }) => {
  const { allWpPage, allWpPost, allWpSpecjalizacja } = data

  return (
    <main>
      <Ornament/>
      <h1>Mapa strony.</h1>
    </main>
  )
}

export default MapaStrony

export const query = graphql`
  query map {
  allWpPage {
    nodes {
      uri
      title
    }
  }
  allWpPost {
    nodes {
      title
      uri
    }
  }
  allWpSpecjalizacja {
    nodes {
      uri
      title
    }
  }
  }
`
