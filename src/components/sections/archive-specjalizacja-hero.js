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
        <div className="title anim" dangerouslySetInnerHTML={{ __html: data.pageTitle }} />
        {data.linksToSubpages.map((el, index) => (
          <Link key={el.link.title + index} to={el.link.url} className={`item item-${index} anim`}>
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
    border: 2px solid transparent;

    &:hover{
      .image{
        &::before{
          opacity: 0;
        }
      }
      p{
        background: #016250;
        color: #ECFFFC;
      }
    }

    &:focus-visible{
      outline: none;
      border: 2px solid #016250;
      .image{
        &::before{
          opacity: 0;
        }
      }
      p{
        background: #016250;
        color: #ECFFFC;
      }
    }

    .image{
      width: 100%;
      height: 100%;
      position: relative;

      &::before{
        content: '';
        inset: 0;
        position: absolute;
        z-index: 1;
        background: radial-gradient(50% 50% at 50% 50%, rgba(47, 85, 78, 0) 13.54%, rgba(47, 85, 78, 0.1) 100%), #4FD2BBd0;
        opacity: 1;
        transition: all .3s ease-out;
      }
    }

    p {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 84px;
      bottom: 0;
      width: 100%;
      text-align: center;
      padding: 0 12px;
      z-index: 2;
      font-family: var(--serif);
      font-style: normal;
      font-weight: 400;
      font-size: clamp(${20 / 16}rem, ${16 / 7.68}vw, ${24 / 16}rem);
      line-height: 158%;
      color: #0F3730;
      transition: all .2s ease-out;
      @media (max-width: 440px) {
        font-size: 24px;
      }
    }
  }

`