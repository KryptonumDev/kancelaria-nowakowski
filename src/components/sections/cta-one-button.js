import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Ornament } from "../atoms/Icons"

export default function CallToAction({ data }) {
  return (
    <Wrapper>
      <GatsbyImage className="image" image={data.backgroundImage.localFile.childImageSharp.gatsbyImageData} alt={data.backgroundImage.altText} />
      <Ornament/>
      <h2>{data.titleAboveButton}</h2>
      <Link className="cta-white" to={data.link.url}>{data.link.title}</Link>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 52px 32px 72px 32px;
  min-height: 370px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    width: calc(100% + 34px);
    transform: translateX(-17px);
  }

  svg{
    width: 100%;
    margin: 0 auto;
    margin-bottom: 16px;
    g{
      fill: #3DA290;
    }
  }

  .image{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
  }

  h2{
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
  }

  a{
    display: block;
    margin: 0 auto;
    width: fit-content;
  }
`