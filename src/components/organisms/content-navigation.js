import React from "react"
import styled from "styled-components"
import { slugTransform } from './../../helpers/slug-transform'

export default function Navigation({ headings }) {
  return (
    <Wrapper>
      <svg width="116" height="97" viewBox="0 0 116 97" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="85" height="81" transform="translate(15.5 8)" fill="white" />
        <path d="M89.5448 17.0039V59.6749H68.5153V38.3329H47.4922V17.0039H89.5448Z" fill="#3BBD9A" />
        <path d="M89.5412 81H26.4688V17L47.4887 38.329V59.6677H68.5118L89.5412 81Z" fill="#15957E" />
      </svg>
      <div>
        {headings?.map(el => (
          <a href={'#' + slugTransform(el.innerText)}>{el.innerText}</a>
        ))}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.aside`
  padding: clamp(64px, ${96 / 1366 * 100}vw, 96px ) 25px clamp(42px, ${96 / 1366 * 100}vw, 96px ) 25px;
  border: 1px solid #4FD2BB;
  position: sticky;
  top: 150px;
  height: fit-content;
  min-width: 280px;

  @media (max-width: 940px){
    position: relative;
    top: 0;
  }

  svg{
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, -50%);
  }

  > div {
    display: grid;
    grid-gap: 16px;

    a{
      font-weight: 400;
      font-size: 20px;
      line-height: 150%;
      color: #12433A;
      padding-left: 18px;
      position: relative;

      &::before{
        content: "";
        position: absolute;
        width: 8px;
        height: 8px;
        left: 0;
        top: 12px;
        background: #4FD2BB;
        transform: rotateZ(45deg);
      }
    }
  }
`