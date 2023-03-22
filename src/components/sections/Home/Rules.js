import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { OrnamentLogo } from "../../atoms/Icons";

const Rules = ({data}) => {
  console.log(data);
  return (
    <StyledSection>
      <OrnamentLogo className="ornament-logo" />
      <header>
        <h2>{data.sectionTitle}</h2>
        <p dangerouslySetInnerHTML={{__html: data.textUnderTitle}}></p>
        <div className="cta">
          <Link to={data.link.url} className="cta-primary">{data.link.title}</Link>
          <p>{data.buttonHint}</p>
        </div>
      </header>
      <GatsbyImage image={data.imageOnTheRight.localFile.childImageSharp.gatsbyImageData} alt={data.imageOnTheRight.altText} className="img" />
    </StyledSection>
  );
}

const StyledSection = styled.section`
  margin: ${150/16}rem 0;
  padding: ${100/16}rem 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 32px;
  position: relative;
  padding-right: 15%;
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
    width: 50%;
    h2 {
      margin-bottom: ${48/16}rem;
    }
    p {
      font-size: clamp(${18/16}rem, ${24/13.66}vw, ${24/16}rem);
    }
    .cta {
      margin-top: ${24/16}rem;
      display: flex;
      align-items: center;
      gap: 20px;
      p {
        font-size: ${18/16}rem;
      }
    }
  }
  @media (max-width: 999px){
    padding: 0;
    align-items: center;
    gap: 32px;
    padding-right: 0;
    ::before {
      display: none;
    }
    svg {
      left: 83.25%;
      transform: translate(-50%, -130%);
    }
    header {
      width: 66.6%;
      h2 {
        margin-bottom: ${48/16}rem;
      }
      p {
        font-size: clamp(${18/16}rem, ${24/13.66}vw, ${24/16}rem);
      }
      .cta {
        display: block;
        p {
          margin-top: ${12/16}rem;
        }
      }
    }
    .img {
      width: 33.3%;
    }
  }
  @media (max-width: 599px){
    margin: ${89/16}rem 0;
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