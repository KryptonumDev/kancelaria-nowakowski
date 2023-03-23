import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { KryptonumLogo } from "../atoms/Icons";

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer-top">
        <ul>
          <li>
            <h3>Specjalizacje</h3>
            <a href="">Odszkodowania</a>
            <a href="">Odszkodowania</a>
            <a href="">Odszkodowania</a>
            <a href="">Odszkodowania</a>
            <a href="">Odszkodowania</a>
            <a href="">Odszkodowania</a>
            <a href="">Odszkodowania</a>
          </li>
          <li>
            <h3>Kancelaria</h3>
          </li>
          <li>
            <h3>Współpraca</h3>
          </li>
          <li>
            <h3>Blog</h3>
            <ul>
              <li>
                <h4>Czy musimy zapłacić za nieruchomości po spadku?</h4>
              </li>
              <li>
                <h4>Czy musimy zapłacić za nieruchomości po spadku?</h4>
              </li>
            </ul>
          </li>
          <li>
            social
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>© 2022 Piotr Nowakowski & Dominika Sujka-Kujawiak</p>
        <p>
          <span>Zaprojektowane przez</span>
          <a href="https://kryptonum.eu" target="_blank" rel="noreferrer">
            <KryptonumLogo />
          </a>
        </p>
        <p>
          <Link to="/mapa-strony">Mapa strony</Link>
          <Link to="/polityka-prywatnosci">Polityka prywatności</Link>
        </p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  margin-top: clamp(${68/16}rem, ${100/7.68}vw, ${128/16}rem);
  border-top: 1px solid var(--neutral-600);
  padding-top: ${32/16}rem;
  .footer-top {
    ul {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 2fr 1fr;
    }
    a {
      display: block;
    }
  }
  .footer-bottom {
    border-top: 1px solid var(--neutral-600);
    padding: ${26/16}rem 0 ${32/16}rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 37px;
    & > * {
      width: 33.3%;
    }
    span, svg {
      display: inline-block;
      vertical-align: middle;
    }
    span + a {
      margin-left: ${10/16}rem;
    }
    p:last-child {
      a:first-child {
        margin-right: ${48/13.66}vw;
      }
    }
  }
  @media (max-width: 999px){
    .footer-bottom {
      p:nth-child(2) {
        text-align: center;
        span {
          margin-bottom: ${6/16}rem;
        }
      }
      p:last-child {
        text-align: right;
        a {
          &:first-child {
            margin-right: 0;
            margin-bottom: ${12/16}rem;
          }
          display: block;
        }
      }
    }
  }
  @media (max-width: 699px){
    .footer-bottom {
      flex-direction: column;
      gap: 1rem;
      & > * {
        width: 100%;
      }
      p:nth-child(2) {
        text-align: center;
        span {
          margin-bottom: ${6/16}rem;
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