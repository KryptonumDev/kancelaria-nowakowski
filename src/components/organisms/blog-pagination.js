import { Link } from "gatsby"
import React, { useMemo } from "react"
import styled from "styled-components"
import { Left, Right } from "../atoms/arrows"

export default function Pagination({ defaultUrl, currentPage, itemCount }) {
  let buttons = []

  const pagesCount = useMemo(() => {
    let count = itemCount - 10
    return (Math.ceil(count / 12)) + 1
  }, [itemCount])

  for (let i = 0; i < pagesCount; i++) {
    buttons.push(i + 1)
  }

  if (itemCount < 11) {
    return null
  }

  if (itemCount < 51) {

    return (
      <Wrapper>
        <Button to={currentPage <= 2 ? defaultUrl : (defaultUrl + (currentPage - 1) + '/')} className={currentPage === 1 ? 'disabled not-link' : 'not-link'} >
          <Left />
        </Button>
        <Page>
          strona
        </Page>
        {buttons.map(el => {
          let href = defaultUrl + el + '/'
          if (el === 1) {
            href = defaultUrl
          }
          return (
            <Button to={href} activeClassName='active' >
              <span>{el}</span>
            </Button>
          )
        })}
        <Button to={currentPage >= pagesCount ? defaultUrl + currentPage + '/' : defaultUrl + (currentPage + 1) + '/'} className={currentPage >= pagesCount ? 'disabled not-link' : 'not-link'}>
          <Right />
        </Button>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <Button to={currentPage <= 2 ? defaultUrl : (defaultUrl + (currentPage - 1) + '/')} className={currentPage === 1 ? 'disabled not-link' : 'not-link'} >
        <Left />
      </Button>
      <Page>
        strona
      </Page>
      {currentPage > 4
        ? (
          <>
            <Button to={defaultUrl} >
              <span>{1}</span>
            </Button>
            <Button className="not" as='button' disabled>
              <span>...</span>
            </Button>
          </>
        )
        : null}

      {buttons.map((el, index) => {
        let href = defaultUrl + el + '/'
        if (el === 1) {
          href = defaultUrl
        }
        if (currentPage === 1 && (index === currentPage - 1 || index === currentPage || index === currentPage + 1)) {
          return (
            <Button to={href} activeClassName='active'>
              <span>{el}</span>
            </Button>
          )
        }
        if (currentPage === pagesCount && (index === currentPage - 1 || index === currentPage || index === currentPage + 1)) {
          return (
            <Button to={href} activeClassName='active'>
              <span>{el}</span>
            </Button>
          )
        }
        if (currentPage === 2 || currentPage === pagesCount - 1) {
          if (index === currentPage - 2 || index === currentPage - 1 || index === currentPage) {
            return (
              <Button to={href} activeClassName='active'>
                <span>{el}</span>
              </Button>
            )
          }
          return null
        }
        if (index === currentPage - 3 || index === currentPage - 2 || index === currentPage - 1 || index === currentPage || index === currentPage + 1) {
          return (
            <Button to={href} activeClassName='active'>
              <span>{el}</span>
            </Button>
          )
        }
        return null
      })}

      {currentPage === 1 || pagesCount - currentPage > 3
        ? (
          <>
            <Button className="not" as='button' disabled>
              <span>...</span>
            </Button>
            <Button to={defaultUrl + pagesCount + '/'}>
              <span>{pagesCount}</span>
            </Button>
          </>
        )
        : null}

      <Button to={currentPage >= pagesCount ? defaultUrl + currentPage + '/' : defaultUrl + (currentPage + 1) + '/'} className={currentPage >= pagesCount ? 'disabled not-link' : 'not-link'}>
        <Right />
      </Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    margin-top: clamp(32px, ${48 / 768 * 100}vw, 64px);
`

const Button = styled(Link)`
    padding: 10px;
    border: 1px solid #BFCACD;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;
    background-color: transparent;

    &.active{
      background: #016250;
      border: 1px solid #016250;
      color: #FDFDFC;
      }

    &.not-link{
      border: none;
      padding: 0;
    }

    &.not{
        cursor: default;
    }

    &:hover{
        &::before{
            opacity: .3;
        }
    }

    :focus-visible {
        outline-offset: 0;
    }

    &.disabled{
        pointer-events: none;
        cursor: default;
        opacity: .5;
    }

    span{
        position: relative;
        font-size: 14px;
        line-height: 24px;
    }
`

const Page = styled.div`
  font-family: 'Lato';
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  color: #0F3730;
`