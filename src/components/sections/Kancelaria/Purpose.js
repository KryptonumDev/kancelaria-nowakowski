import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";


const Purpose = ({data}) => {
  return (
    <Wrapper>
      <div dangerouslySetInnerHTML={{__html: data.sectionTitle}}></div>
      <div className="grid">
        {data.flexRepeater.map((item, i) => (
          <div className="grid-item" key={i}>
            <div className="girdItem-copy">
              <h3>{item.rowTitle}</h3>
              <p>{item.rowText}</p>
            </div>
            <GatsbyImage className="gridItem-img" image={item.image.localFile.childImageSharp.gatsbyImageData} alt={item.altText || ""}></GatsbyImage>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  h2 {
    max-width: ${768/16}rem;
  }
  .grid {
    margin-top: clamp(2rem, ${48/7.68}vw, 4rem);
  }
  .grid-item {
    display: flex;
    align-items: center;
    gap: 32px;
    & > * {
      width: 50%;
    }
    &:not(:last-child){
      margin-bottom: 80px;
    }
    &:nth-child(odd) {
      flex-direction: row-reverse;
    }
    h3 {
      font-size: clamp(${24/16}rem, ${30/7.68}vw, ${32/16}rem);
      margin-bottom: clamp(${12/16}rem, ${16/7.68}vw, ${24/16}rem);
    }
    p {
      font-size: clamp(${18/16}rem, ${21/7.68}vw, ${24/16}rem);
      font-family: var(--serif);
    }
  }
  @media (max-width: 999px){
    .grid-item {
      flex-direction: column-reverse;
      & > * {
        width: 100%;
      }
      &:not(:last-child){
        margin-bottom: 40px;
      }
      &:nth-child(odd) {
        flex-direction: column-reverse;
      }
    }
  }
`

export default Purpose;