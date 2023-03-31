import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Ornament } from "../atoms/Icons"

export default function Hero({ data }) {
  return (
    <Wrapper>
      <Ornament />
      <Grid>
        <div className="title" dangerouslySetInnerHTML={{ __html: data.pageTitle }} />
        {data.linksToSubpages.map((el, index) => (
          <Link to={el.link.url} className={`item item-${index}`}>
            <p>{el.link.title}</p>
            <GatsbyImage className="image" image={el.backgroundImage.localFile.childImageSharp.gatsbyImageData} alt={el.backgroundImage.altText} />
          </Link>
        ))}
      </Grid>
    </Wrapper>
  )
}

const Wrapper = styled.section`

`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: clamp(16px, ${24 / 768 * 100}vw, 32px);
  grid-template-areas: 
  't t c e'
  'a b c f'
  'a b d f';

  @media (max-width: 850px) {
    grid-template-columns: 1fr 1fr ;
    grid-template-areas:
    't t'
    'a b'
    'a b'
    'c d'
    'c f'
    'e f';
  }

  @media (max-width: 440px) {
    grid-template-columns: 1fr;
    grid-template-areas: 
    't'
    'a'
    'b'
    'c'
    'd'
    'e'
    'f' ;
  }

  .title{
    grid-area: t;
    *{
      font-size: clamp(${36 / 16}rem, ${36 / 7.68}vw, ${54 / 16}rem);
    }

    @media (max-width: 850px){
      margin-bottom: clamp(40px, ${60 / 768 * 100}vw, 60px);

      *{
        font-size: clamp(${36 / 16}rem, ${50 / 7.68}vw, ${54 / 16}rem);
      }
    }
  }
  .item-0{
    grid-area: a;
  }
  .item-1{
    grid-area: b;
  }
  .item-2{
    grid-area: c;
  }
  .item-3{
    grid-area: d;
  }
  .item-4{
    grid-area: e;
  }
  .item-5{
    grid-area: f;
  }

  .item{
    position: relative;

    &:hover{
      .image{
        img{
          transform: scale(1.05);
        }
      }
    }

    .image{
      width: 100%;
      height: 100%;

      img{
        transition: transform .4s ease-out;
      }
    }

    p {
      position: absolute;
      bottom: 24px;
      width: 100%;
      text-align: center;
      padding: 0 12px;
      z-index: 2;
      font-family: 'Literata';
      font-style: normal;
      font-weight: 400;
      font-size: clamp(${20 / 16}rem, ${16 / 7.68}vw, ${24 / 16}rem);
      line-height: 158%;
      color: #0F3730;
      @media (max-width: 440px) {
        font-size: 24px;
      }
    }
  }

`