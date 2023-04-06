import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Ornament } from "../atoms/Icons"

export default function Hero({ categories, title, excerpt, featuredImage }) {
  return (
    <Wrapper>
      <div>
        <Ornament />
        <div dangerouslySetInnerHTML={{__html: title}}/>
        <div dangerouslySetInnerHTML={{ __html: excerpt }} />
        <Categories>
          {categories.nodes.map(el => (
            <Link key={el.name} to={el.uri}>
              {el.name}
            </Link>
          ))}
        </Categories>
      </div>
      <GatsbyImage image={featuredImage.node.localFile.childImageSharp.gatsbyImageData} alt={featuredImage.node.altText} />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;

  @media (max-width: 640px) {
    display: flex;
    flex-direction: column-reverse;
  }

  h1{
    margin-top: 16px;
    font-size: clamp(${32 / 16}rem, ${48 / 7.68}vw, ${48 / 16}rem);
    position: relative;
  }

  p{
    margin-top: 32px;
    font-size: clamp(${18 / 16}rem, ${24 / 7.68}vw, ${24 / 16}rem);
    font-family: var(--serif);
    line-height: 160%; 
    color: #12433A;
  }

  svg{
    height: auto;
  }
`

const Categories = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;

  a{
    padding: 4px 20px;
    font-size: 20px;
    line-height: 150%;
    display: flex;
    align-items: center;
    color: #0F3730;
    background-color: #D8E1E3;
    
    transition: background-color .3s ease-out;

    &:hover{
      background-color: #6FE8D2;
    }
  }

`