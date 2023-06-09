import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { useState } from "react";
import styled from "styled-components";

const Offert = ({data}) => {
  const [switcher, setSwitcher] = useState(0);
  return (
    <Wrapper data-option={switcher === 1 ? '1' : '0'}>
      <header>
        <div className="anim" dangerouslySetInnerHTML={{__html: data.sectionTitle}}></div>
        <p className="anim">{data.textUnderTitle}</p>
      </header>
      <div className="switcher-desktop">
        <div className="anim">
          <GatsbyImage image={data.leftContentPart.partIcon.localFile.childImageSharp.gatsbyImageData} alt={data.leftContentPart.partIcon.altText} />
          <span>{data.leftContentPart.partName}</span>
        </div>
        <div className="anim">
          <GatsbyImage image={data.rightContentPart.partIcon.localFile.childImageSharp.gatsbyImageData} alt={data.rightContentPart.partIcon.altText} />
          <span>{data.rightContentPart.partName}</span>
        </div>
      </div>
      <div className="switcher-mobile">
        <button className="anim" onClick={() => setSwitcher(0)}>{data.leftContentPart.partName}</button>
        <button className="anim" onClick={() => setSwitcher(1)}>{data.rightContentPart.partName}</button>
      </div>
      <div className="content">
        {data.leftContentPart.contentRepeater.map((item, i) => (
          <div key={item.subpartName + i} className="item-left">
            <h3 className="anim">{item.subpartName}</h3>
            <div className="anim" dangerouslySetInnerHTML={{__html: item.subpartContent}}></div>
          </div>
        ))}
        {data.rightContentPart.contentRepeater.map((item, i) => (
          <div key={item.subpartName + i} className="item-right">
            <h3 className="anim">{item.subpartName}</h3>
            <div className="anim" dangerouslySetInnerHTML={{__html: item.subpartContent}}></div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}
 
const Wrapper = styled.section`
  header {
    max-width: ${627/16}rem;
    h2 {
      font-size: clamp(1.75rem, 4.6875vw, 2.5rem);
      margin-bottom: 2rem;
    }
    p {
      font-size: clamp(${22/16}rem, ${26/7.68}vw, ${28/16}rem);
      font-family: var(--serif);
    }
  }
  .switcher-desktop {
    margin: ${48/16}rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-size: ${32/16}rem;
    font-family: var(--serif);
    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
    }
  }
  .switcher-mobile {
    display: none;
  }
  .content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "a e" "b f" "c g" "d h";
    .item-left {
      &:nth-child(1) {grid-area:a}
      &:nth-child(2) {grid-area:b}
      &:nth-child(3) {grid-area:c}
      &:nth-child(4) {grid-area:d}
    }
    .item-right {
      &:nth-child(1) {grid-area:e}
      &:nth-child(2) {grid-area:f}
      &:nth-child(3) {grid-area:g}
      &:nth-child(4) {grid-area:h}
    }
    gap: ${48/16}rem ${250/13.66}vw;
    position: relative;
    ::before {
      content: '';
      width: 1px;
      height: 100%;
      background-color: var(--secondary-400);
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
    }
    font-size: ${20/16}rem;
    h3 {
      margin-bottom: ${32/16}rem;
      font-size: clamp(${22/16}rem, ${26/7.68}vw, ${24/16}rem);
    }
    h4, p, li {
      margin-bottom: ${12/16}rem;
    }
    li {
      list-style-type: none;
      background: left 2px / 24px no-repeat url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='25' fill='none'%3E%3Cpath stroke='%233DA290' stroke-linecap='square' stroke-width='1.5' d='M8.371 11.454c2.09 1.32 3.65 3.68 3.65 3.68h.031s3.316-5.867 9.477-9.476'/%3E%3Cpath stroke='%233DA290' stroke-linecap='round' stroke-width='1.5' d='M11.723 21.445a9.25 9.25 0 1 0 0-18.5 9.25 9.25 0 0 0 0 18.5Z' clip-rule='evenodd'/%3E%3C/svg%3E");
      padding-left: 28px;
    }
  }
  @media (max-width: 999px){
    .switcher-desktop {
      display: none;
    }
    .switcher-mobile {
      display: block;
      margin: ${48/16}rem 0;
      display: grid;
      grid-template-columns: 1fr 1fr;
      font-size: clamp(1rem, ${24/7.68}vw, ${24/16}rem);
      font-family: var(--serif);
      button {
        padding: ${24/16}rem 0;
        position: relative;
        ::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 3px;
          background-color: var(--primary-600);
        }
        &:last-child {
          opacity: .4;
        }
      }
    }
    .content {
      grid-template-columns: 1fr;
      grid-template-areas: unset;
      .item-left,
      .item-right {
        grid-area: unset !important;
      }
      .item-right {
        display: none;
      }
      ::before {
        content: none;
      }
    }
    &[data-option="1"] {
      button {
        &:first-child {
          opacity: .4;
        }
        &:last-child {
          opacity: 1;
        }
      }
      .content {
        .item-left {
          display: none;
        }
        .item-right {
          display: block;
        }
      }
    }
  }
`

export default Offert;