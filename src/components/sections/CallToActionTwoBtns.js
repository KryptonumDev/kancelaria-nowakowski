import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Ornament } from '../atoms/Icons';
import { GatsbyImage } from "gatsby-plugin-image";

const CallToActionTwoBtns = ({ data }) => {
  return (
    <Wrapper>
      <GatsbyImage className="image" image={data.backgroundImage.localFile.childImageSharp.gatsbyImageData} alt={data.backgroundImage.altText} />
      <div className="blog">
        <div>
          <Ornament />
          <h3>{data.leftTitle}</h3>
        </div>
        <Link to={data.leftLink.url} className="cta-secondary">{data.leftLink.title}</Link>
      </div>
      <div className="contact">
        <div>
          <Ornament />
          <h3>{data.rightTitle}</h3>
        </div>
        <Link to={data.rightLink.url} className="cta-primary">{data.rightLink.title}</Link>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin: clamp(${75 / 16}rem, ${95 / 7.68}vw, ${120 / 16}rem) 0;
  padding: ${52 / 16}rem ${42 / 16}rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: min(${66 / 7.68}vw, ${116 / 16}rem);
  text-align: center;
  position: relative;
  .image{
    position: absolute;
    inset: 0;
    z-index: -1;
  }
  svg{
    g{
      fill: #3DA290;
    }
  }
  h3 {
    margin: 1rem 0 ${20 / 16}rem;
  }
  .cta-primary {
    background-color: var(--primary-100);
    color: var(--primary-900);
  }
  .blog, .contact{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    a{
      width: fit-content;
      margin: 0 auto;
    }
  }
  @media (max-width: 699px){
    margin-left: -17px;
    margin-right: -17px;
    padding: ${24 / 16}rem 1rem ${62 / 16}rem;
    grid-template-columns: 1fr;
    > *:first-child {
      margin-bottom: ${32 / 16}rem;
    }
    h3 {
      margin: 1rem 0 ${8 / 16}rem;
    }
  }
`

export default CallToActionTwoBtns;