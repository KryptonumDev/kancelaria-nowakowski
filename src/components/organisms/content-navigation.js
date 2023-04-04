import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import styled from "styled-components"
import { slugTransform } from './../../helpers/slug-transform'
import { htmlDelete } from "../../helpers/html-delete"

export default function Navigation({ headings }) {

  const [activePart, setActivePart] = useState(null)

  const scroll = (e, id) => {
    e.preventDefault()
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(el => {
        if (el.isIntersecting) {
          setActivePart(el.target.id)
        }
      })
    }, { threshold: [1] });

    document.getElementById('content').querySelectorAll("h2").forEach(el => {
      observer.observe(el);
    })
  }, [])

  return (
    <Wrapper>
      <svg width="116" height="97" viewBox="0 0 116 97" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="85" height="81" transform="translate(15.5 8)" fill="white" />
        <path d="M89.5448 17.0039V59.6749H68.5153V38.3329H47.4922V17.0039H89.5448Z" fill="#3BBD9A" />
        <path d="M89.5412 81H26.4688V17L47.4887 38.329V59.6677H68.5118L89.5412 81Z" fill="#15957E" />
      </svg>
      <div>
        {headings?.map(el => (
          <button key={slugTransform(htmlDelete(el))} className={activePart === slugTransform(htmlDelete(el)) ? 'active' : ''} onClick={(e) => { scroll(e, slugTransform(htmlDelete(el))) }}>{htmlDelete(el)}</button>
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

    button{
      border: none;
      background-color: transparent;
      cursor: pointer;
      text-align: left;
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
        opacity: 0;
        transition: opacity .2s ease-out;
      }

      &:hover{
        &::before{
          opacity: 1;
        }
      }

      &.active{
        font-weight: 700;
        font-style: italic;

        &::before{
          opacity: 1;
        }
      }

          
      @media (max-width: 940px){
        &::before{
          opacity: 1;
        }
        &.active{
          font-weight: 400;
          font-style: normal;
        }
      }
    }
  }
`