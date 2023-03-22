import { graphql, Link } from "gatsby"
import * as React from "react"
import styled from "styled-components"
import { Ornament } from "../components/atoms/Icons"

const MapaStrony = ({ data }) => {
  const { allWpPage, allWpPost, allWpSpecjalizacja } = data

  const pages = React.useMemo(() => {
    let arr = []

    allWpPage.nodes.forEach(el => {
      if (el.uri === '/' || el.title.includes('*')) {

      } else if (el.uri === '/specjalizacje/') {
        arr.push({
          ...el,
          subArray: [...allWpSpecjalizacja.nodes]
        })
      } else if (el.uri === '/blog/') {
        arr.push({
          ...el,
          subArray: [...allWpPost.nodes]
        })
      } else {
        arr.push({
          ...el,
          subArray: []
        })
      }
    })

    return arr
  }, [])

  return (
    <Wrapper>
      <Ornament />
      <h1>Mapa strony.</h1>
      <Link className="home" to='/'>Strona główna</Link>
      <div className="columns">
        {pages.map(el => (
          <div className="block">
            <Link className="main" to={el.uri}>{el.title}</Link>
            <div className="sub-block">
              {el.subArray.map(el => (
                <Link className="sub" to={el.uri}>{el.title}</Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  )
}

export default MapaStrony

export const query = graphql`
  query map {
  allWpPage {
    nodes {
      uri
      title
    }
  }
  allWpPost {
    nodes {
      title
      uri
    }
  }
  allWpSpecjalizacja {
    nodes {
      uri
      title
    }
  }
  }
`

const Wrapper = styled.main`
  svg{
    width: 100%;
    max-width: fit-content;
  }
  h1{
    position: relative;
    display: block;
    width: fit-content;
    &::after{
      content: "";
      position: absolute;
      transform: translate(-50%, 50%) rotateZ(45deg);
      left: 0;
      bottom: -10px;
      width: 6px;
      height: 6px;
      background-color: #4FD2BB;
    }

    &::before{
      content: "";
      position: absolute;
      transform: translate(0, 50%);
      left: 0;
      bottom: -10px;
      width: 100%;
      height: 2px;
      background-color: #4FD2BB;
    }
  }

  a{
    display: block;
  }

  *{
    width: fit-content;
    font-family: 'Literata';
    font-weight: 400;
    color: #0F3730;
  }

  .home{
    margin-top: 80px;
    margin-bottom: 48px;
    font-size: clamp(${36 / 16}rem, ${54 / 13.66}vw, ${54 / 16}rem);
    line-height: 110%;
    letter-spacing: -0.01em;
    width: 100%;
  }

  .columns{
    width: 100%;
    columns: 2;

    @media (max-width: 640px) {
      columns: unset;
    }
  }

  .block{
    break-inside: avoid;
    margin-top: 48px;
    &:first-child{
      margin-top: 0;
    }
    .main{
    font-size: clamp(${32 / 16}rem, ${36 / 768 * 100}vw, ${40 / 16}rem);
    }
    .sub-block{
      margin-top: 24px;
      .sub{
        margin-top: 16px;
        font-size: clamp(${18 / 16}rem, ${21 / 13.66}vw, ${24 / 16}rem);
      }
    }
  }
`