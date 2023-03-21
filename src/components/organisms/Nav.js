import React, { useRef } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Logo } from '../atoms/Icons';

const Nav = () => {
  const nav = useRef();
  const handleToggle = () => {
    nav.current.classList.toggle('expand');
  }

  return (
    <StyledNav className="nav" ref={nav}>
      <div className="max-width">
        <Link to="/">
          <Logo />
        </Link>
        <div className="nav-links">
          <ul>
            <li className="dropdown">
              <Link to="/specjalizacje">Specjalizacje</Link>
              <ul>
                <li><Link to="/specjalizacje">Hałas lotniczy</Link></li>
                <li><Link to="/specjalizacje">Kredyty CHF</Link></li>
                <li><Link to="/specjalizacje">Odszkodowania</Link></li>
                <li><Link to="/specjalizacje">Prawo spadkowe</Link></li>
                <li><Link to="/specjalizacje">Proces sądowy</Link></li>
                <li><Link to="/specjalizacje">Rozwód</Link></li>
                <li><Link to="/specjalizacje">Utrata wartości</Link></li>
              </ul>
            </li>
            <li>
              <Link to="/kancelaria">Kancelaria</Link>
            </li>
            <li>
              <Link to="/wspolpraca">Współpraca</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
          <Link to="/kontakt" className="navLinks-cta">Kontakt</Link>
        </div>
        <Link to="/kontakt" className="nav-cta">Kontakt</Link>
        <button
          id="nav-toggle"
          aria-label="Pokaż/Ukryj nawigację mobilną"
          onClick={handleToggle}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background-color: var(--neutral-200);
  height: 105px;
  z-index: 9;
  .max-width {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    ::after {
      content: '';
      width: 100%;
      height: 1px;
      position: absolute;
      left: 0;
      bottom: 0;
      background-color: var(--secondary-200);
      z-index: -1;
    }
  }
  ul {
    list-style-type: none;
    font-size: ${20/16}rem;
  }
  .nav-links {
    > ul {
      display: flex;
      margin: 0 -${20/16}rem;
      > li {
        margin: 0 ${20/16}rem;
        ul {
          width: 100%;
          position: absolute;
          padding: 2rem 0;
          > li {
            margin: 1rem 0;
          }
        }
      }
      a[aria-current="page"] {
        font-weight: 700;
        font-style: italic;
      }
    }
  }
  .nav-cta {
    border: 2px solid var(--primary-800);
    font-family: var(--serif);
    padding: ${10/24}em ${32/24}em;
    font-size: ${24/16}rem;
  }
  #nav-toggle {
    display: none;
    width: 48px;
    height: 48px;
    padding: 0 9px;
    span {
      display: block;
      width: 100%;
      height: 2px;
      background-color: var(--primary-900);
      transition: transform 0.3s ease 0s;
      &:nth-child(odd){
        width: 80%;
      }
      &:not(:last-child){
        margin-bottom: 10px;
      }
    }
  }
  @media (max-width: 1149px){
    height: 89px;
    ul {
      list-style-type: none;
      font-size: ${22/16}rem;
      font-family: var(--serif);
    }
    &.expand .nav-links {
      transform: translateX(0);
      visibility: visible;
    }
    .nav-links {
      transform: translateX(100%);
      visibility: hidden;
      transition: transform .5s cubic-bezier(0.65,0.05,0.36,1), visibility .4s;
      overflow-y: auto;
      position: absolute;
      right: 0;
      top: 100%;
      height: calc(100vh - 89px);
      height: calc(100dvh - 89px);
      padding: ${66/16}rem;
      background-color: var(--neutral-400);
      margin: 0 -20px;
      > ul {
        margin: 0;
        flex-direction: column;
        > li {
          &:first-child {
            order: 1;
          }
          margin: ${14/16}rem 0;
          ul {
            & > li {
              font-family: var(--sans-serif);
              font-size: ${20/16}rem;
            }
            padding: 0;
            position: static;
          }
        }
        a[aria-current="page"] {
          font-weight: 700;
          font-style: italic;
        }
      }
    }
    .nav-cta {
      margin-left: auto;
      margin-right: 34px;
    }
    #nav-toggle {
      display: block;
    }
  }
  .navLinks-cta {
    display: none;
  }
  @media (max-width: 699px){
    .nav-links {
      width: calc(100% + 34px);
      height: calc(100vh - 89px);
      height: calc(100dvh - 89px);
      padding: ${66/16}rem;
      background-color: var(--neutral-200);
      > ul {
        margin: 0;
        display: grid;
        grid-template:"b a"
                      "c a"
                      "d a";
        > li:nth-child(1){
          grid-area: a;
        }
        > li:nth-child(2){
          grid-area: b;
        }
        > li:nth-child(3){
          grid-area: c;
        }
        > li:nth-child(4){
          grid-area: d;
        }
        > li {
          margin: ${14/16}rem 0;
          ul {
            & > li {
              font-family: var(--sans-serif);
              font-size: ${20/16}rem;
            }
            padding: 0;
            position: static;
          }
        }
        a[aria-current="page"] {
          font-weight: 700;
          font-style: italic;
        }
      }
    }
    .nav-cta {
      display: none;
    }
    .navLinks-cta {
      display: block;
      border: 2px solid var(--primary-800);
      font-family: var(--serif);
      padding: ${10/24}em ${32/24}em;
      font-size: ${24/16}rem;
    }
  }
`

export default Nav;