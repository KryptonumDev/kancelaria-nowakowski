import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { Facebook, KryptonumLogo, Linkedin, RightArrow } from "../atoms/Icons";

const Footer = ({ setCookiesActive }) => {
  const { allWpSpecjalizacja: { specjalizacje }, allWpPost: { blogs } } = useStaticQuery(graphql`
    query {
      allWpSpecjalizacja {
        specjalizacje: nodes {
          uri
          title
        }
      }
      allWpPost(limit: 2) {
        blogs: nodes {
          title
          uri
          featuredImage {
            node {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Wrapper>
      <ul className="footer-top">
        <li>
          <h3>
            <Link className="styled-link" to="/specjalizacje/">Specjalizacje</Link>
          </h3>
          {specjalizacje.map(el => (
            <Link className="styled-link" key={el.title} to={el.uri}>{el.title}</Link>
          ))}
        </li>
        <li className="grid">
          <h3>
            <Link className="styled-link" to="/kancelaria/">Kancelaria</Link>
          </h3>
          <h3>
            <Link className="styled-link" to="/wspolpraca/">Współpraca</Link>
          </h3>
        </li>
        <li className="blog">
          <h3>
            <Link className="styled-link" to="/blog/">Blog</Link>
          </h3>
          {blogs.map((blog, i) => (
            <div className="blog-item" key={i}>
              <GatsbyImage image={blog.featuredImage.node.localFile.childImageSharp.gatsbyImageData} alt={blog.featuredImage.node.altText || ""} />
              <div className="blog-copy">
                <p>{blog.title}</p>
                <Link className="styled-link" to={blog.uri}>
                  <span>Czytaj więcej</span>
                  <RightArrow />
                </Link>
              </div>
            </div>
          ))}
        </li>
        <li className="social">
          <a href="https://www.facebook.com/profile.php?id=100046139240389&locale=pl_PL" target='_blank' rel="noreferrer noopener" aria-label="Facebook">
            <Facebook />
          </a>
          <a href="https://www.linkedin.com/in/piotr-nowakowski-7832b422a/" target='_blank' rel="noreferrer noopener" aria-label="Facebook">
            <Linkedin />
          </a>
          <a href="https://www.linkedin.com/in/dr-dominika-sujka-kujawiak-077b1b189/" target='_blank' rel="noreferrer noopener" aria-label="Facebook">
            <Linkedin />
          </a>
        </li>
      </ul>
      <div className="footer-bottom">
        <p>© 2022 Piotr Nowakowski & Dominika Sujka-Kujawiak</p>
        <p>
          <span>Zaprojektowane przez</span>
          <a href="https://kryptonum.eu" target="_blank" rel="noreferrer" aria-label="Kryptonum">
            <KryptonumLogo />
          </a>
        </p>
        <p className="flex-add">
          <button className="styled-link" onClick={() => { setCookiesActive(true) }}>Zarządzaj ciasteczkami</button>
          <Link className="styled-link" to="/mapa-strony/">Mapa strony</Link>
          <Link className="styled-link" to="/polityka-prywatnosci/">Polityka prywatności</Link>
        </p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  margin-top: clamp(${68 / 16}rem, ${100 / 7.68}vw, ${128 / 16}rem);
  border-top: 1px solid var(--neutral-600);

  a{
    width: fit-content;
  }
  .flex-add{
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }
  .footer-top {
    padding: ${32 / 16}rem 0 ${24 / 16}rem;
    list-style-type: none;
    display: grid;
    grid-template-columns: 1fr 2fr 2fr 0fr;

    .grid{
      display: grid;
      grid-template-columns: 1fr 1fr;

      @media (max-width: 999px){
        grid-template-columns: 1fr;
      }
    }
    h3 {
      margin-bottom: 1rem;
      font-size: clamp(${18/16}rem, ${21/7.68}vw, ${24/16}rem);
    }
    a {
      display: block;
    }
    li {
      & > a {
        font-size: ${20 / 16}rem;
        &:not(:last-child) {
          margin-bottom: .5rem;
        }
      }
    }
    .blog-item {
      display: grid;
      grid-template-columns: clamp(133px, ${152 / 7.68}vw, 152px) auto;
      gap: 12px;
      width: clamp(${328/16}rem, ${347/7.68}vw, ${407/16}rem);
      img {
        width: clamp(133px, ${152 / 7.68}vw, 152px);
        aspect-ratio: 152 / 114;
      }
      p {
        font-size: clamp(1rem, ${20 / 7.68}vw, ${20 / 16}rem);
        margin-bottom: .5rem;
      }
      a {
        font-size: clamp(${18 / 16}rem, ${21 / 7.68}vw, ${24 / 16}rem);
        display: flex;align-items: center;
        font-family: var(--serif);
        white-space: nowrap;
      }
      &:not(:last-child) {
        margin-bottom: 1rem;
      }
    }
    .social {
      color: var(--primary-400);
      svg{
        width: 32px;
        height: 32px;
      }
      a:not(:last-child) {
        margin-bottom: ${24 / 16}rem;
      }
    }
  }
  .footer-bottom {
    border-top: 1px solid var(--neutral-600);
    padding: ${26 / 16}rem 0 ${32 / 16}rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 34px;
    span, svg {
      display: inline-block;
      vertical-align: middle;
    }
    span + a {
      margin-left: ${10 / 16}rem;
    }
    p:last-child {
      a:first-child {
        margin-right: ${48 / 13.66}vw;
      }
    }
  }
  @media (max-width: 999px){
    .footer-top {
      grid-template-columns: 1.2fr 1fr 2fr;
      grid-gap: 12px;
      row-gap: 32px;
      grid-template-areas:"a b d"
                          "a c d"
                          "e e e";
      li:nth-child(1){grid-area: a;}
      li:nth-child(2){grid-area: b;}
      li:nth-child(3){grid-area: d;}
      li:nth-child(4){grid-area: e;}
      .social {
        display: flex;
        justify-content: center;
        gap: 24px;
        a {
          margin: 0;
        }
      }
    }
    .footer-bottom {
      p:nth-child(2) {
        text-align: center;
        span {
          margin-bottom: ${6 / 16}rem;
        }
      }
      p:last-child {
        text-align: right;
        a {
          &:first-child {
            margin-right: 0;
            margin-bottom: ${12 / 16}rem;
          }
          display: block;
        }
      }
    }
  }
  @media (max-width: 749px){
    .footer-top {
      grid-template-columns: 1fr 1fr;
      row-gap: 32px;
      justify-content: space-between;
      grid-template-areas:"a b"
                          "a c"
                          "d d"
                          "e e";
      .blog-item {
        width: 100%;
      }
    }
    .footer-bottom {
      flex-direction: column;
      gap: 1rem;
      & > * {
        width: 100%;
      }
      p:nth-child(2) {
        text-align: center;
        span {
          margin-bottom: ${6 / 16}rem;
          display: block;
        }
      }
      p:last-child {
        order: -1;
        text-align: left;
        display: flex;
        justify-content: space-between;
        a {
          &:first-child {
            margin-bottom: 0;
          }
          display: inline;
        }
      }
    }
  }
`

export default Footer;