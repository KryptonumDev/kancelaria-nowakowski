import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { OrnamentLogo } from "../atoms/Icons";

const Rules = ({ data }) => {
  return (
    <StyledSection>
      <OrnamentLogo className="ornament-logo" />
      <header>
        <div dangerouslySetInnerHTML={{ __html: data.sectionTitle }}></div>
        <div className="text" dangerouslySetInnerHTML={{ __html: data.textUnderTitle }}></div>
        <div className="cta">
          <Link to={data.link.url} className="cta-primary">{data.link.title}</Link>
          <p className="annotation">Dobierzemy rozwiązanie <em><strong>najlepsze dla Ciebie</strong></em></p>
        </div>
      </header>
      <GatsbyImage image={data.imageOnTheRight.localFile.childImageSharp.gatsbyImageData} alt={data.imageOnTheRight.altText} className="img" />
    </StyledSection>
  );
}

const StyledSection = styled.section`
  padding: ${100 / 16}rem 0;
  display: grid;
  grid-template-columns: 630fr auto;
  align-items: flex-end;
  grid-gap: 32px;
  position: relative;
  padding-right: 15%;
  .annotation{
    font-weight: 400;
    font-size: 20px !important;
    line-height: 150%;
    font-feature-settings: 'pnum' on, 'onum' on;
    color: #12433A;

    em{
      font-style: normal;
      font-family: 'Literata';
    }
  }
  .text{
    display: grid;
    grid-gap: 32px;
    font-family: 'Literata';
    ul {
      list-style-type: none;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 12px 24px;
      font-size: inherit;
      li {
        display: flex;
        gap: 4px;
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
    right: 5%;
    top: 0;
    width: 120%;
    height: 100%;
    border: 2px solid var(--primary-400);
    z-index: -1;
  }
  header {
    min-width: 450px;
    h2 {
      margin-bottom: ${48 / 16}rem;
      font-size: clamp(${24 / 16}rem, ${36 / 7.68}vw, ${40 / 16}rem);
    }
    p {
      font-size: clamp(${18 / 16}rem, ${21 / 7.68}vw, ${24 / 16}rem);
      &:not(:last-of-type){
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
      }
    }
  }
  @media (max-width: 999px){
    grid-template-columns: 1fr clamp(250px, ${400 / 999 * 100}vw, 400px);
    padding: 0;
    align-items: center;
    gap: 32px;
    padding-right: 0;
    .annotation{
      font-size: clamp(20px, ${24 / 768 * 100}vw, 24px) !important;  
    }
    ::before {
      display: none;
    }
    .text {
      ul {
        grid-template-columns: 1fr;
      }
    }
    svg {
      left: 83.25%;
      transform: translate(-50%, -90%);
    }
    .text{
      gap: 16px;
    }
    header {
      min-width: unset;
      max-width: 440px;
      h2 {
        margin-bottom: ${48 / 16}rem;
      }
      p {
        font-size: clamp(${18 / 16}rem, ${21 / 7.68}vw, ${24 / 16}rem);
      }
      .cta {
        display: block;
        p {
          margin-top: ${12 / 16}rem;
        }
      }
    }
  }
  @media (max-width: 599px){
    margin: ${89 / 16}rem 0 0 0;
    display: flex;
    flex-direction: column-reverse;
    gap: 16px;
    svg {
      left: 50%;
      transform: translate(-50%, -130%);
    }
    header {
      max-width: unset;
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