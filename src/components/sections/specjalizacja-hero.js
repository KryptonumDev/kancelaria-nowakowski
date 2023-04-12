import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Ornament } from "../atoms/Icons"

export default function Hero({ title, excerpt, featuredImage }) {
  return (
    <Wrapper>
      <Ornament />
      <div className="text">
        <div className="anim" dangerouslySetInnerHTML={{__html: title}}/>
        <div className="text anim" dangerouslySetInnerHTML={{__html: excerpt}}/>
      </div>
      <GatsbyImage className="image anim" image={featuredImage.node.localFile.childImageSharp.gatsbyImageData} alt={featuredImage.node.altText} />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 430px 1fr;
  grid-gap: 16px 32px;
  grid-template-areas: 
  'ornament ornament'
  'text image';

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    grid-template-areas: 
    'image'
    'ornament'
    'text';
  }

  h1{
    font-size: clamp(${36/16}rem, ${46/7.68}vw, ${54/16}rem);
    margin-bottom: 32px;
    position: relative;
  }

  .text{
    *+*{
      margin-top: 16px;
    }
    h3{
      font-family: 'Literata', serif;
      font-size: clamp(${21/16}rem, ${21/7.68}vw, ${24/16}rem);
    }
    p{
      font-family: 'Lato';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 150%;
      color: #12433A;
    }
  }

  .ornament{
    grid-area: ornament;
  }

  .text{
    grid-area: text;
  }

  .image{
    grid-area: image;
    width: fit-content;

    @media (max-width: 640px){
      margin: 0 auto;
    }
  }
`