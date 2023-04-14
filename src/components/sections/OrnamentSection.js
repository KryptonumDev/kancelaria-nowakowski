import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { OrnamentLogo } from "../atoms/Icons";

const Rules = ({ data }) => {
  return (
    <StyledSection>
      <header>
        <div dangerouslySetInnerHTML={{ __html: data.sectionTitle }} className="anim"></div>
        <div className="text anim" dangerouslySetInnerHTML={{ __html: data.textUnderTitle }}></div>
        <div className="cta anim">
          <Link to={data.link.url} className="cta-primary"><span>{data.link.title}</span></Link>
          <p>Dobierzemy rozwiązanie <em><strong>najlepsze dla Ciebie</strong></em></p>
        </div>
      </header>
      <GatsbyImage image={data.imageOnTheRight.localFile.childImageSharp.gatsbyImageData} alt={data.imageOnTheRight.altText} className="img anim" />
      <OrnamentLogo className="ornament-logo" />
    </StyledSection>
  );
}

const StyledSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 36px;
  position: relative;
  padding: ${100/16}rem min(${106/13.66}vw, ${106/16}rem);
  .text {
    ul {
      margin: ${12/16}rem 0 ${24/16}rem;
      list-style-type: none;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 12px 24px;
      font-size: inherit;
      padding-right: 62px;
      li {
        font-size: clamp(${20/16}rem, ${16/7.68}vw, ${20/16}rem);
        display: flex;
        align-items: flex-start;
        gap: 4px;
        img {
          margin-top: 5px;
        }
        > * {
          flex-shrink: 0;
        }
      }
    }
  }
  svg {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%,-50%);
  }
  ::before {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border: 2px solid var(--primary-400);
    z-index: -1;
  }
  header {
    width: 65%;
    h2 {
      margin-bottom: ${48 / 16}rem;
      font-size: clamp(${24/16}rem, ${36/7.68}, ${40/16}rem);
    }
    p {
      font-size: clamp(${18/16}rem, ${21/7.68}vw, ${24/16}rem);
      font-family: var(--serif);
      &:not(:last-child){
        margin-bottom: 1rem;
      }
    }
    .cta {
      margin-top: ${24 / 16}rem;
      display: flex;
      align-items: center;
      gap: 20px;
      p {
        font-size: ${18 / 16}rem;
        &,
        em {
          font-family: var(--sans-serif);
        }
      }
    }
  }
  @media (max-width: 1099px){
    padding: 0;
    align-items: center;
    gap: 32px;
    padding-right: 0;
    ::before {
      display: none;
    }
    .text {
      ul {
        padding-right: 0;
        grid-template-columns: 1fr;
      }
    }
    svg {
      left: 83.25%;
      transform: translate(-50%, -130%);
    }
    header {
      width: 66.6%;
      h2 {
        margin-bottom: ${48 / 16}rem;
      }
      p {
        font-size: clamp(${18 / 16}rem, ${24 / 13.66}vw, ${24 / 16}rem);
      }
      .cta {
        display: block;
        p {
          margin-top: ${12 / 16}rem;
        }
      }
    }
    .img {
      width: 33.3%;
    }
  }
  @media (max-width: 599px){
    margin-top: ${89/16}rem;
    flex-direction: column-reverse;
    gap: 16px;
    svg {
      left: 50%;
      transform: translate(-50%, -130%);
    }
    header {
      width: 100%;
      h2 {
        margin-bottom: 1em;
      }
      .cta-primary {
        width: 100%;
      }
    }
    .img {
      width: 100%;
    }
  }
`

export default Rules;