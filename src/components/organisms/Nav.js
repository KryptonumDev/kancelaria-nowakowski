import React, { useEffect, useRef } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { DropDown, Logo } from '../atoms/Icons';

const Nav = () => {
  const nav = useRef();
  const handleToggle = () => {
    nav.current.classList.toggle('expand');
  }
  const handleNavClick = () => {
    nav.current.classList.remove('expand');
  }
  useEffect(() => {
    nav.current.style.pointerEvents = 'none';
    setTimeout(() => {
      nav.current.style = null;
    }, 100);
  }, [window.location.pathname])

  return (
    <StyledNav className="nav" ref={nav}>
      <div className="max-width">
        <Link to="/" aria-label="Strona główna" onClick={handleNavClick} className="nav-logo">
          <Logo />
        </Link>
        <button
          id="nav-toggle"
          aria-label="Pokaż/Ukryj nawigację mobilną"
          onClick={handleToggle}
        >
          <span></span><span></span><span></span>
        </button>
        <div className="nav-links">
          <ul>
            <li className="dropdown">
              <Link to="/specjalizacje" onClick={handleNavClick}>
                <span>Specjalizacje</span>
                <DropDown />
              </Link>
              <ul>
                <li><Link to="/halas-lotniczy" onClick={handleNavClick}>Hałas lotniczy</Link></li>
                <li><Link to="/kredyty-chf" onClick={handleNavClick}>Kredyty CHF</Link></li>
                <li><Link to="/odszkodowania" onClick={handleNavClick}>Odszkodowania</Link></li>
                <li><Link to="/prawo-spadkowe" onClick={handleNavClick}>Prawo spadkowe</Link></li>
                <li><Link to="/proces-sadowy" onClick={handleNavClick}>Proces sądowy</Link></li>
                <li><Link to="/rozwod" onClick={handleNavClick}>Rozwód</Link></li>
                <li><Link to="/utrata-wartosci" onClick={handleNavClick}>Utrata wartości</Link></li>
              </ul>
            </li>
            <li>
              <Link to="/kancelaria" onClick={handleNavClick}>Kancelaria</Link>
            </li>
            <li>
              <Link to="/wspolpraca" onClick={handleNavClick}>Współpraca</Link>
            </li>
            <li>
              <Link to="/blog" onClick={handleNavClick}>Blog</Link>
            </li>
          </ul>
          <Link to="/kontakt" className="navLinks-cta" onClick={handleNavClick}>Kontakt</Link>
        </div>
        <Link to="/kontakt" className="nav-cta">Kontakt</Link>
      </div>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background-color: var(--neutral-100);
  height: 105px;
  z-index: 9;
  .max-width {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--secondary-200);
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
        &.dropdown {
          &:hover > a svg {
            transform: rotate(-180deg);
          }
          > a {
            span, svg {
              vertical-align: middle;
              display: inline-block;
            }
            svg {
              margin-left: 2px;
              transition: transform .2s;
            }
          }
        }
        &:hover ul,
        &:focus-within ul {
          opacity: 1;
          pointer-events: auto;
        }
        ul {
          transition: opacity .2s;
          opacity: 0;
          pointer-events: none;
          z-index: 2;
          &::before {
            content: '';
            width: 150vw;
            height: 100%;
            background: var(--neutral-100);
            position: absolute;
            left: -50vw;
            top: 1rem;
            z-index: -1;
          }
          &::after {
            content: '';
            width: 150vw;
            height: 100vh;
            background: rgba(0,0,0,.6);
            position: fixed;
            left: 0;
            top: 108px;
            z-index: -2;
            pointer-events: none;
          }
          width: 100%;
          position: absolute;
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
    order: 1;
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
        transform-origin: left;
        transform: scaleX(.8);
      }
      &:not(:last-child){
        margin-bottom: 10px;
      }
    }
  }
  &.expand #nav-toggle {
    span {
      &:nth-child(1) {
        transform: translateY(1.5px) rotate(45deg);
      }
      &:nth-child(2) {
        transform: scaleX(0);
      }
      &:nth-child(3) {
        transform: translateY(-1.5px) rotate(-45deg);
      }
    }
  }
  .navLinks-cta {
    display: none;
  }
  @media (max-width: 1149px){
    height: 89px;
    &::after {
      content: '';
      width: 100vw;
      height: 100vh;
      background: rgba(0,0,0,.6);
      position: fixed;
      left: 0;
      top: 89px;
      z-index: -1;
      pointer-events: none;
      opacity: 0;
      transition: opacity .5s;
    }
    &.expand::after {
      opacity: 1;
    }
    &.expand .nav-links {
      transform: translateX(0);
      visibility: visible;
    }
    ul {
      font-size: ${22/16}rem;
      font-family: var(--serif);
    }
    .nav-links {
      position: relative;
      transform: translateX(100%);
      visibility: hidden;
      transition: transform .5s cubic-bezier(0.65,0.05,0.36,1), visibility .5s;
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
          &.dropdown > a svg{
            display: none;
          }
          ul {
            opacity: 1;
            &::after, &::before {
              content: none;
            }
            & > li {
              font-family: var(--sans-serif);
              font-size: ${20/16}rem;
            }
            padding: 0;
            position: static;
          }
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
  @media (max-width: 699px){
    height: 67px;
    &::after {
      top: 67px;
    }
    .nav-logo svg {
      height: 46px;
      width: auto;
    }
    .nav-links {
      padding: ${48/16}rem 1rem 1rem;
      width: 100%;
      margin: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: calc(100vh - 67px);
      height: calc(100dvh - 67px);
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
      text-align: center;
    }
  }
`

export default Nav;