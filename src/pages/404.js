import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import styled from "styled-components"
import { Ornament } from "../components/atoms/Icons"


export const Head = () => {
  return (
    <title>Błąd 404 – Niestety ta strona nie istnieje</title>
  )
}

const NotFoundPage = () => {
  return (
    <Wrapper>
      <div>
        <StaticImage className="image" src='./../resources/images/404.jpg' alt='Mężczyzna uważnie czytający tekst z dokumentu' />
        <Ornament />
        <h1>
          Niestety nie znaleźliśmy
          strony.
        </h1>
        <div className="line">
          <span />
        </div>
        <p>Postaramy się pomóc Ci znaleźć to, czego szukasz.</p>
        <div className="flex">
          <Link className="cta-primary" to='/kontakt/'><span>Odszkodowania</span></Link>
          <Link className="cta-secondary" to='/'><span>Strona główna</span></Link>
        </div>
      </div>
    </Wrapper>
  )
}

export default NotFoundPage

const Wrapper = styled.main`
  display: flex;
  gap: 32px;

  >div{
    position: relative;
    max-width: 50%;

    @media (max-width: 924px){
      max-width: unset;
    }

    svg{
      width: 100%;

      @media (max-width: 924px){
        max-width: fit-content
      }
    }
  }
  .image{
    position: absolute;
    top: 0;
    bottom: 0;
    right: -32px;
    transform: translateX(100%);
    aspect-ratio: 1/1;

    @media (max-width: 924px) {
      position: relative;
      transform: unset;
      aspect-ratio: unset;
      right: unset;
      top: unset;
      width: 100%;
      margin-bottom: 32px;
      min-height: 468px;
    }
  }

  h1{
    margin-top: clamp(0px, ${16 / 768 * 100}vw, 16px);
    font-size: clamp(${36 / 16}rem, ${54 / 13.66}vw, ${54 / 16}rem);
  }

  p{
    margin-top: clamp(1rem, ${24 / 768 * 100}vw, 2rem);
    font-size: clamp(${18 / 16}rem, ${24 / 13.66}vw, ${24 / 16}rem);
    font-family: 'Literata';
    max-width: 500px;
    line-height: 160%;
    color: #12433A;
  }

  .line{
    height: 20px;
    margin-top: 9px;
    display: flex;
    align-items: center;
    max-width: 300px;

    span{
      display: block;
      width: 100%;
      border: 1px solid #4FD2BB;
      position: relative;

      &::after{
        content: "";
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%) rotateZ(45deg);
        left: 0;
        width: 8px;
        height: 8px;
        background-color: #4FD2BB;
      }
    }
  }

  .flex{
    margin-top: clamp(12px, ${24 / 768 * 100}vw, 40px);
    display: flex;
    align-items: center;
    gap: 32px;

    @media (max-width: 420px) {
      flex-direction: column;
      gap: 8px;
      a{
        width: 100%;
      }
    }
  }
`