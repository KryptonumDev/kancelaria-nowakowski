import { Link } from "gatsby"
import * as React from "react"
import styled from "styled-components"
import { Ornament } from "../components/atoms/Icons"

const NotFoundPage = () => {
  return (
    <Wrapper>
      <div>
        <Ornament />
        <h1>
          Niestety nie znaleźliśmy<br/>
          strony.
        </h1>
        <div className="line">
          <span />
        </div>
        <p>Postaramy się pomóc Ci znaleźć to, czego szukasz.</p>
        <div className="flex">
          <Link className="cta-primary" to='/kontakt/'>Odszkodowania</Link>
          <Link className="cta-secondary" to='/'>Strona główna</Link>
        </div>
      </div>
    </Wrapper>
  )
}

export default NotFoundPage

const Wrapper = styled.main`
  display: flex;
  gap: 32px;

  h1{
    margin-top: 16px;
    font-size: clamp(${36 / 16}rem, ${54 / 13.66}vw, ${54 / 16}rem);
  }

  p{
    margin-top: 32px;
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
    margin-top: 40px;
    display: flex;
    align-items: center;
    gap: 32px;
  }
`