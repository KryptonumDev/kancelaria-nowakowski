import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { Ornament } from "../atoms/Icons";

const CalendlyCta = ({ data }) => {
  return (
    <Wrapper>
      <Ornament />
      <h3>{data.titleAboveButton}</h3>
      <Link to={data.link.url} className="cta-secondary">{data.link.title}</Link>
      <GatsbyImage className="image" image={data.backgroundImg.localFile.childImageSharp.gatsbyImageData} alt={data.backgroundImg.altText} />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: ${48 / 16}rem 1rem ${32 / 16}rem;
  text-align: center;
  position: relative;
  .image{
    position: absolute;
    inset: 0;
    z-index: -1;
  }
  svg g{
    fill: #3DA290;
  }
  h3 {
    margin: clamp(${4 / 16}rem, ${16 / 7.68}vw, 1rem) 0 clamp(${8 / 16}rem, ${42 / 7.68}vw, ${20 / 16}rem);
  }
  @media (max-width: 768px) {
    margin: 0 -17px;
  }
  @media (max-width: 499px){
    a {
      width: 100%;
    }
  }
`

export default CalendlyCta;