import * as React from "react"
import { Ornament } from "../components/atoms/Icons"

const NotFoundPage = () => {
  return (
    <main>
      <Ornament/>
      <h1>Niestety nie znaleźliśmy strony.</h1>
      <p>Postaramy się pomóc Ci znaleźć to, czego szukasz.</p>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
