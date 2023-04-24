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
        <div className="title anim" dangerouslySetInnerHTML={{ __html: data.pageTitle }}></div>
        <p className="flex">
          {data.linksToSubpages.map((link, i) => (
            <span className="no-wrap anim" key={link.link.title + i}>
              <Link to={link.link.url} >{link.link.title}</Link>
              {i !== data.linksToSubpages.length - 1 && (
                <>&nbsp;/&nbsp;</>
              )}
            </span>
          ))}
        </p>
        <div className="cta">
          <Link className="cta-primary anim" to={data.coloredButton.url}><span>{data.coloredButton.title}</span></Link>
          <Link className="cta-secondary anim " to={data.transparentButton.url}><span>{data.transparentButton.title}</span></Link>
        </div>
      </header>
      <div className="hero-img">
        <GatsbyImage loading="eager" image={data.leftImage.localFile.childImageSharp.gatsbyImageData} alt={data.leftImage.altText || ''} className="anim anim-desctop" />
        <GatsbyImage loading="eager" image={data.rightImage.localFile.childImageSharp.gatsbyImageData} alt={data.rightImage.altText || ''} className="anim anim-desctop" />
      </div>
    </StyledHero>
  );
}

const StyledHero = styled.section`
  padding: ${22 / 16}rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .flex{
    display: flex;
    flex-wrap: wrap;
  }
  .no-wrap{
    white-space: nowrap;
    font-family: var(--serif);
  }
  .title{
    max-width: 500px;
  }
  header {
    svg {
      width: 100%;
      height: auto;
      margin-bottom: 1rem;
    }
    width: 50%;
    max-width: ${627 / 13.66}vw;
    p {
      margin: ${48 / 16}rem 0;
      font-size: clamp(${18 / 16}rem, ${24 / 13.66}vw, ${24 / 16}rem);
      a {
        text-decoration: underline;
        transition: opacity .3s;
        &:hover {
          opacity: .8;
        }
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
        margin: ${42 / 16}rem 0 ${24 / 16}rem 0;
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

    h1{
      margin-top: 8px;
    }
    .flex{
      gap: 8px 0;
    }
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