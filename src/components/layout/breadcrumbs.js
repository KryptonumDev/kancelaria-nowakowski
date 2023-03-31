import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

export default function BreadCrumbs({ data }) {
  return (
    <Wrapper>
      <Link to='/'>
        Strona główna
      </Link>
      {data.map(el => (
        <React.Fragment key={el.name}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.6641 10L3.33093 10" stroke="#90999B" strokeWidth="1.5" strokeLinecap="square" />
            <path d="M11.9492 14.7167C11.9492 12.2919 14.0847 10 16.6659 10" stroke="#90999B" strokeWidth="1.5" strokeLinecap="square" />
            <path d="M11.9492 5.28329C11.9492 7.70808 14.0847 10 16.6659 10" stroke="#90999B" strokeWidth="1.5" strokeLinecap="square" />
          </svg>
          <Link to={el.url}>
            {el.name}
          </Link>
        </React.Fragment>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 32px 0 8px 0;
  display: flex;
  align-items: center;
  gap: 8px;

  a{
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #90999B;

    &:last-child{
      color: #016250;
    }
  }
`