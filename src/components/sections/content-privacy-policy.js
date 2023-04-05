import React from "react"
import styled from "styled-components"

export default function Content({ data }) {
  return (
    <Wrapper dangerouslySetInnerHTML={{ __html: data }} />
  )
}

const Wrapper = styled.section`

  h1 + p + p{
    margin-top: 96px;
  }

  h1 + p {
    margin-top: 48px;
  }

  h2{
    font-family: 'Literata';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 164%;
    font-feature-settings: 'pnum' on, 'onum' on;
    color: #0F3730;
    max-width: 846px;
  }

  .wp-block-column > * {
    width: 100%;
  }

  .wp-block-column  > * + * {
    margin-top: 24px;
  }

  .wp-block-column  > p + h3{
    margin-top:36px;
  }

  .wp-block-column h1 + p{
    margin-top: 36px;
  }

  h2 + *, h3 + * {
    margin-top: 20px;
  }

  p + p{
    margin-top: 16px;
  }

  p em {
    font-family: 'Literata';
    font-style: normal;
  }

  p{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    color: #12433A;
  }

  br{
    display: block;
    height: 20px;
  }

  ol{
    display: grid;
    grid-gap: 20px;
    counter-reset: section;

    li{
      list-style: none;
      padding-left: 64px;
      position: relative;

      &::before{
        counter-increment: section; 
        content: counters(section,".") " ";
        position: absolute;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #0F3730;
        left: 23px;
        top: 0;
        z-index: 2;
      }

      &::after{
        content: "";
        background: #4FD2BB;
        transform: rotate(45deg);
        position: absolute;
        width: 24px;
        height: 24px;
        left: 16px;
        top: 0;
      }
    }
  }

  h3{
    font-size: 24px;
    font-family: 'Literata';
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    color: #12433A;
  }

  .wp-block-columns{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
    margin-top: 32px;

    @media (max-width: 840px) {
      grid-template-columns: 1fr;
    }
  }

  .wp-block-column{
    max-width: 536px;
    @media (max-width: 840px) {
      max-width: unset;
    }
  }
  a {
    text-decoration: underline;
    text-decoration-color: var(--secondary-500);
  }
`