import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { Ornament } from "../../atoms/Icons";

const Hero = ({ data }) => {
  return (
    <StyledHero className="hero">
      <header>
        <Ornament />
        <div dangerouslySetInnerHTML={{__html: data.pageTitle}}></div>
        <div dangerouslySetInnerHTML={{__html: data.textUnderTitle}}></div>
        <div className="cta">
          <Link className="cta-primary" to={data.leftButton.url}>{data.leftButton.title}</Link>
          <Link className="cta-secondary" to={data.rightButton.url}>{data.rightButton.title}</Link>
        </div>
      </header>
      <div className="hero-img">
        <GatsbyImage loading="eager" image={data.image.localFile.childImageSharp.gatsbyImageData} alt={data.image.altText || ''} />
      </div>
    </StyledHero>
  );
}

const StyledHero = styled.section`
  padding: ${22/16}rem 0;
  display: flex;
  align-items: center;
  gap: 32px;
  header {
    svg {
      width: 100%;
      height: auto;
    }
    width: 50%;
    max-width: ${627 / 13.66}vw;
    p {
      margin: ${48 / 16}rem 0;
      font-size: clamp(${18/16}rem, ${26/7.68}vw, ${24 / 16}rem);
      font-family: var(--serif);
    }
    .cta {
      display: flex;
      flex-wrap: wrap;
      gap: 8px 32px;
    }
  }
  .hero-img {
    width: 37.5%;
    &, > * {
      height: 100%;
    }
  }
  @media (max-width: 840px){
    flex-direction: column-reverse;
    align-items: flex-start;
    header {
      width: 100%;
      max-width: ${627 / 16}rem;
      margin-bottom: ${32 / 16}rem;
      p {
        margin: ${24 / 16}rem 0;
      }
    }
    .hero-img {
      &, > * {
        width: 100%;
        height: 100%;
      }
    }
  }
  @media (max-width: 549px){
    .cta {
      * {
        flex-grow: 1;
      }
    }
  }
`;


export default Hero;