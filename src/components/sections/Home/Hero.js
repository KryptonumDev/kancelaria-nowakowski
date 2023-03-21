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
        <h1>{data.pageTitle}</h1>
        <p>
          {data.linksToSubpages.map((link, i) => (
            <span key={link.link.title + i}>
              <Link to={link.link.url} >{link.link.title}</Link>
              {i !== data.linksToSubpages.length - 1 && (
                <> / </>
              )}
            </span>
          ))}
        </p>
        <div className="cta">
          <Link className="cta-primary" to={data.coloredButton.url}>{data.coloredButton.title}</Link>
          <Link className="cta-secondary" to={data.transparentButton.url}>{data.transparentButton.title}</Link>
        </div>
      </header>
      <div className="hero-img">
        <GatsbyImage image={data.leftImage.localFile.childImageSharp.gatsbyImageData} alt={data.leftImage.altText || ''} />
        <GatsbyImage image={data.rightImage.localFile.childImageSharp.gatsbyImageData} alt={data.rightImage.altText || ''} />
      </div>
    </StyledHero>
  );
}

const StyledHero = styled.section`
  padding: ${22 / 16}rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  header {
    svg {
      width: 100%;
      height: auto;
    }
    width: 50%;
    max-width: ${627 / 13.66}vw;
    p {
      margin: ${48 / 16}rem 0;
      font-size: clamp(${18 / 16}rem, ${24 / 13.66}vw, ${24 / 16}rem);
      a {
        text-decoration: underline;
      }
    }
    .cta {
      display: flex;
      flex-wrap: wrap;
      gap: 8px 32px;
    }
  }
  .hero-img {
    min-width: 360px;
    width: 37.5%;
    display: flex;
    gap: 32px;
    height: 100%;
  }
  @media (max-width: 840px){
    flex-direction: column;
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
      width: 100%;
      min-width: unset;
    }
  }
  @media (max-width: 549px){
    flex-direction: column-reverse;
    align-items: flex-start;
    header {
      width: 100%;
      max-width: ${627 / 16}rem;
      margin: ${32 / 16}rem 0 0 0;
      p {
        margin: ${24 / 16}rem 0;
      }
      .cta {
        * {
          flex-grow: 1;
        }
      }
    }
    .hero-img {
      width: 100%;
      gap: 16px;
    }
  }
`;


export default Hero;