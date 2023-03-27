import React from "react"
import styled from "styled-components"
import Navigation from "../organisms/content-navigation"
import { StyledContent } from "../organisms/content-styles"

export default function Content({ headings, content }) {
  return (
    <Wrapper>
      <Navigation headings={headings} />
      <StyledContent dangerouslySetInnerHTML={{ __html: content }} />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 128px;
  display: grid;
  grid-gap: 32px;
  grid-template-columns: 408fr 848fr;
`
