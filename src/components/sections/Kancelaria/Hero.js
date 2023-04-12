import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { Ornament } from "../../atoms/Icons";

const Hero = ({data}) => {
  return (
    <Wrapper>
      <div className="copy">
        <Ornament />
        <div dangerouslySetInnerHTML={{__html: data.pageTitle}} className="anim"></div>
        <div dangerouslySetInnerHTML={{__html: data.textUnderTitle}} className="anim"></div>
      </div>
      <GatsbyImage image={data.image.localFile.childImageSharp.gatsbyImageData} alt={data.image.altText || ""} className="image anim"></GatsbyImage>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  h1 {
    margin: 1rem 0 clamp(${24/16}rem, ${34/7.68}vw, 3rem);
  }
  p {
    font-size: clamp(${18/16}rem, ${26/7.68}vw, ${24/16}rem);
    font-family: var(--serif);
  }
  @media (max-width: 989px){
    grid-template-columns: 1fr;
    .image {
      order: -1;
      img {
        object-position: top;
      }
    }
  }
`
 
export default Hero;