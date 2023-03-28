import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Ornament } from "../atoms/Icons"

export default function Hero({ title, excerpt, featuredImage }) {
  return (
    <Wrapper>
      <Ornament />
      <div className="text">
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{__html: excerpt}}/>
      </div>
      {/* <GatsbyImage className="image" image={featuredImage.node.localFile.childImageSharp.gatsbyImageData} alt={featuredImage.node.altText} /> */}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 405px 1fr;
  grid-gap: 16px 32px;
  grid-template-areas: 
  'ornament ornament'
  'text image';

  .ornament{
    grid-area: ornament;
  }

  .text{
    grid-area: text;
  }

  .image{
    grid-area: image;
    width: fit-content;
  }
`