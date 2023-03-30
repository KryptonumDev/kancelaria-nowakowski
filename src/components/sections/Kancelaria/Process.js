import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

const Process = ({data}) => {
  return (
    <Wrapper>
      <header>
        <div dangerouslySetInnerHTML={{__html: data.tytulSekcji}}></div>
        <div className="grid">
          <div dangerouslySetInnerHTML={{__html: data.leftText}}></div>
          <div dangerouslySetInnerHTML={{__html: data.rightText}}></div>
        </div>
      </header>
      <div className="advantages">
        {data.advantages.map((advantage, i) => (
          <div className="advantages-item" key={i}>
            <h3>
              <GatsbyImage image={advantage.icon.localFile.childImageSharp.gatsbyImageData} alt={advantage.icon.altText || ""} objectFit="contain"></GatsbyImage>
              <span>{advantage.title}</span>
            </h3>
            <p>{advantage.text}</p>
          </div>
        ))}
      </div>
      <div className="advantages-keynote">
        {data.advantagesWithImg.map((advantage, i) => (
          <div className="advantagesKeynote-item" key={i}>
            <h3>{advantage.title}</h3>
            <GatsbyImage image={advantage.image.localFile.childImageSharp.gatsbyImageData} alt={advantage.image.altText || ""} className="advantagesKeynote-img"></GatsbyImage>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin: clamp(${64/16}rem, ${96/7.68}vw, ${128/16}rem) 0;
  header {
    h2 {
      font-size: clamp(1.75rem, 4.6875vw, 2.5rem);
      margin-bottom: ${24/16}rem;
    }
    h3 {
      font-size: clamp(${24/16}rem, ${30/7.68}vw, 2rem);
      margin-bottom: .5rem;
    }
    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 32px;
    }
    p {
      font-size: clamp(${18/16}rem, ${26/7.68}vw, ${24/16}rem);
      font-family: var(--serif);
    }
  }
  .advantages {
    margin: ${60/16}rem 0 ${40/16}rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "a ." ". b" "c ." ". d" "e .";
    gap: 4rem 2rem;
    position: relative;
    ::before {
      content: '';
      width: 1px;
      height: calc(100% - 1em);
      background-color: var(--neutral-600);
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
    }
    .advantages-item:nth-child(1){grid-area:a};
    .advantages-item:nth-child(2){grid-area:b};
    .advantages-item:nth-child(3){grid-area:c};
    .advantages-item:nth-child(4){grid-area:d};
    .advantages-item:nth-child(5){grid-area:e};
    .advantages-item {
      position: relative;
      ::before {
        content: '';
        width: 16px;
        height: 16px;
        background-color: var(--primary-400);
        position: absolute;
        top: .5em;
        right: -1.5rem;
        transform: rotate(45deg);
      }
      :nth-child(even)::before {
        right: auto;
        left: -1.5rem;
        transform: rotate(45deg);
      }
      h3 {
        display: flex;
        font-size: clamp(${22/16}rem, ${26/7.68}vw, ${28/16}rem);
        margin-bottom: 1rem;
        img {
          width: 32px;
          height: 32px;
          flex-shrink: 0;
        }
      }
      p {
        font-size: clamp(${20/16}rem, ${24/7.68}vw, ${20/16}rem);
      }
    }
  }
  .advantagesKeynote-item {
    display: flex;
    align-items: center;
    border: 1px solid var(--primary-400);
    justify-content: flex-end;
    gap: 32px;
    h3 {
      width: 33.3%;
      font-size: clamp(${24/16}rem, ${30/7.68}vw, ${32/16}rem);
      text-align: center;
    }
    &:nth-child(odd){
      flex-direction: row-reverse;
    }
    .advantagesKeynote-img {
      width: 33.3%;
      margin: -1px;
    }
    &:not(:last-child){
      margin-bottom: 40px;
    }
  }
  @media (max-width: 1249px){
    .advantagesKeynote-item {
      h3 {
        width: 50%;
        text-align: left;
        padding: 0 34px;
      }
      &:nth-child(odd){
        flex-direction: row-reverse;
      }
      .advantagesKeynote-img {
        width: 50%;
      }
      &:not(:last-child){
        margin-bottom: 40px;
      }
    }
  }
  @media (max-width: 599px){
    .advantagesKeynote-item {
      display: flex;
      flex-direction: column-reverse;
      h3 {
        width: 100%;
        font-size: clamp(${24/16}rem, ${30/7.68}vw, ${32/16}rem);
        text-align: center;
        padding: 0 .5rem 2rem;
      }
      &:nth-child(odd){
        flex-direction: column-reverse;
      }
      .advantagesKeynote-img {
        width: 100%;
        margin: 0;
      }
    }
  }
  @media (max-width: 989px){
    header {
      .grid {
        grid-template-columns: 1fr;
        gap: ${12/16}rem;
      }
    }
  }
  @media (max-width: 768px){
    .advantages {
      grid-template-columns: 1fr;
      grid-template-areas: none;
      gap: 2rem;
      ::before {
        left: .5rem;
      }
      .advantages-item {
        grid-area: auto !important;
        padding-left: 2rem;
        ::before, :nth-child(even)::before {
          left: 0;
        }
      }
    }
  }
`

export default Process;