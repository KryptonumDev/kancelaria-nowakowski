import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { Facebook, Instagram, Linkedin, Ornament } from "../../atoms/Icons";

const Team = ({data}) => {
  // const {advocates, lawyers, other} = data;
  const { advocates } = data;
  return (
    <Wrapper>
      <h2 className="anim">Nasz zespół</h2>
      <div className="team-section">
        <h3 className="anim">Adwokaci</h3>
        <Ornament />
        <div className="copy">
          <p className="anim">{advocates.leftTopText}</p>
          <p className="anim">{advocates.rightTopText}</p>
          <p className="anim">{advocates.leftBottomText}</p>
          <p className="anim">{advocates.rightBottomText}</p>
        </div>
        <div className="people">
          {advocates.osoby.map((person, i) => (
            <div className="people-item" key={i}>
              <GatsbyImage image={person.zdjecieOsoby.localFile.childImageSharp.gatsbyImageData} alt={person.zdjecieOsoby.altText || ""} className="people-img anim animNotTransform"></GatsbyImage>
              {(person.facebookLink || person.linkedinLink || person.instagramLink) && (
                <div className="social anim animNotTransform">
                  {person.facebookLink && (
                    <a aria-label="Link do Facebook" href={person.facebookLink} target="_blank" rel="noreferrer">
                      <Facebook />
                    </a>
                  )}
                  {person.linkedinLink && (
                    <a aria-label="Link do LinkedIn" href={person.linkedinLink} target="_blank" rel="noreferrer">
                      <Linkedin />
                    </a>
                  )}
                  {person.instagramLink && (
                    <a aria-label="Link do Instagram" href={person.instagramLink} target="_blank" rel="noreferrer">
                      <Instagram />
                    </a>
                  )}
                </div>
              )}
              <h3 className="anim">{person.name}</h3>
              <h4 className="anim">{person.work}</h4>
              <p className="anim">{person.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="team-section">
        <h3>Radcy prawni</h3>
        <Ornament />
        <div className="copy">
          <p>{lawyers.leftTopText}</p>
          <p>{lawyers.rightTopText}</p>
          <p>{lawyers.leftBottomText}</p>
          <p>{lawyers.rightBottomText}</p>
        </div>
        <div className="people">
          {lawyers.osoby.map((person, i) => (
            <div className="people-item" key={i}>
              <GatsbyImage image={person.zdjecieOsoby.localFile.childImageSharp.gatsbyImageData} alt={person.zdjecieOsoby.altText || ""} className="people-img"></GatsbyImage>
              {(person.facebookLink || person.linkedinLink || person.instagramLink) && (
                <div className="social">
                  {person.facebookLink && (
                    <a aria-label="Link do Facebook" href={person.facebookLink} target="_blank" rel="noreferrer">
                      <Facebook />
                    </a>
                  )}
                  {person.linkedinLink && (
                    <a aria-label="Link do LinkedIn" href={person.linkedinLink} target="_blank" rel="noreferrer">
                      <Linkedin />
                    </a>
                  )}
                  {person.instagramLink && (
                    <a aria-label="Link do Instagram" href={person.instagramLink} target="_blank" rel="noreferrer">
                      <Instagram />
                    </a>
                  )}
                </div>
              )}
              <h3>{person.name}</h3>
              <h4>{person.work}</h4>
              <p>{person.description}</p>
            </div>
          ))}
        </div>
      </div> */}
      {/* <div className="team-section">
        <h3>Zespół kancelarii</h3>
        <Ornament />
        <div className="copy">
          <p>{other.leftTopText}</p>
          <p>{other.rightTopText}</p>
          <p>{other.leftBottomText}</p>
          <p>{other.rightBottomText}</p>
        </div>
        <div className="people">
          {other.osoby.map((person, i) => (
            <div className="people-item" key={i}>
              <GatsbyImage image={person.zdjecieOsoby.localFile.childImageSharp.gatsbyImageData} alt={person.zdjecieOsoby.altText || ""} className="people-img"></GatsbyImage>
              {(person.facebookLink || person.linkedinLink || person.instagramLink) && (
                <div className="social">
                  {person.facebookLink && (
                    <a aria-label="Link do Facebook" href={person.facebookLink} target="_blank" rel="noreferrer">
                      <Facebook />
                    </a>
                  )}
                  {person.linkedinLink && (
                    <a aria-label="Link do LinkedIn" href={person.linkedinLink} target="_blank" rel="noreferrer">
                      <Linkedin />
                    </a>
                  )}
                  {person.instagramLink && (
                    <a aria-label="Link do Instagram" href={person.instagramLink} target="_blank" rel="noreferrer">
                      <Instagram />
                    </a>
                  )}
                </div>
              )}
              <h3>{person.name}</h3>
              <h4>{person.work}</h4>
              <p>{person.description}</p>
            </div>
          ))}
        </div>
      </div> */}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  h2, h3 {
    text-align: center;
  }
  h2 {
    margin-bottom: ${40/16}rem;
  }
  h3 {
    font-size: clamp(${24/16}rem, ${30/7.68}vw, ${32/16}rem);
  }
  .ornament {
    margin: clamp(${20/16}rem, ${24/7.68}vw, ${24/16}rem) auto;
    display: block;
  }
  .team-section:nth-of-type(2) > svg path {stroke: #2F80ED}
  .team-section:nth-of-type(3) > svg path {stroke: var(--secondary-600)}
  .team-section {
    &:not(:first-of-type){
      margin-top: ${108/16}rem;
    }
    .copy {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem 2rem;
      margin-bottom: clamp(${24/16}rem, ${48/7.68}vw, ${64/16}rem);
      p {
        position: relative;
        font-size: clamp(${18/16}rem, ${26/7.68}vw, ${24/16}rem);
        font-family: var(--serif);
      }
      p:nth-child(2)::after {
        content: '';
        position: absolute;
        right: 0;
        bottom: -1.5rem;
        width: calc(200% + 2rem);
        height: 1px;
        background-color: var(--primary-400);
      }
    }
    .people {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 32px;
      .people-item {
        width: calc((100% - 3*32px) / 4);
        max-width: 348px;
        h3 {
          text-align: left;
          font-size: clamp(${24/16}rem, ${30/7.68}vw, ${32/16}rem);
          margin: ${12/16}rem 0 ${2/16}rem;
        }
        h4 {
          font-size: clamp(${18/16}rem, ${21/7.68}vw, ${24/16}rem);
          margin-bottom: ${12/16}rem;
        }
        .people-img {
          width: 100%;
        }
        .social {
          display: flex;
          color: var(--primary-100);
          a {
            flex-grow: 1;
            padding: 12px 0;
            svg {
              display: block;
              margin: 0 auto;
            }
            position: relative;
            &::before {
              content: '';
              position: absolute;
              left: 50%;
              top: -8px;
              transform: translateX(-50%) rotate(45deg);
              background-color: var(--primary-600);
              width: 16px;
              height: 16px;
              opacity: 0;
              pointer-events: none;
              transition: opacity .2s ease-in-out;
            }
            &:hover::before {
              opacity: 1;
            }
          }
          a:nth-child(1) {
            background-color: var(--primary-900);
          }
          a:nth-child(2) {
            background-color: var(--primary-700);
          }
          a:nth-child(3) {
            background-color: var(--primary-900);
          }
        }
      }
    }
  }
  @media (max-width: 949px){
    .team-section {
      .copy {
        grid-template-columns: 1fr;
        gap: 1rem;
        p:nth-child(2) {
          margin-bottom: 1rem;
          &::after {
            content: '';
            width: 100%;
          }
        }
      }
      .people {
        .people-item {
          width: calc((100% - 1*32px) / 2);
        }
      }
    }
  }
  @media (max-width: 499px){
    .team-section {
      .people {
        .people-item {
          width: 100%;
          img {
            max-height: 514px;
            object-position: top;
          }
        }
      }
    }
  }
`
 
export default Team;