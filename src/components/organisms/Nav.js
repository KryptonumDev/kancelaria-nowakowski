import React, { useRef } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { DropDown, Logo } from '../atoms/Icons';

const Nav = () => {
  const { allWpSpecjalizacja: { nodes: specjalizacji } } = useStaticQuery(graphql`
    query {
      allWpSpecjalizacja {
        nodes {
          uri
          title
        }
      }
    }
  `)

  const nav = useRef();
  const handleToggle = () => {
    nav.current.classList.toggle('expand');
  }
  const handleNavClick = () => {
    nav.current.classList.remove('expand');
    nav.current.style.pointerEvents = 'none';
    setTimeout(() => {
      nav.current.style = null;
    }, 100);
  }

  return (
    <>
      <Placeholder />
      <StyledNav className="nav" ref={nav}>
        <nav className="max-width-header">
          <Link to="/" aria-label="Strona główna">
            <Logo />
          </Link>
          <div className="nav-links">
            <ul>
              <li className="dropdown">
                <Link partiallyActive={true} className="drop-down styled-link" activeClassName='active' to="/specjalizacje/">
                  <span>Specjalizacje</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.99976 13.334L7.99976 2.66748" stroke="#12433A" strokeWidth="1.5" strokeLinecap="square" />
                    <path d="M4.22639 9.56055C6.16622 9.56055 7.99976 11.2689 7.99976 13.3339" stroke="#12433A" strokeWidth="1.5" strokeLinecap="square" />
                    <path d="M11.7731 9.56055C9.83329 9.56055 7.99976 11.2689 7.99976 13.3339" stroke="#12433A" strokeWidth="1.5" strokeLinecap="square" />
                  </svg>
                </Link>
                <ul>
                  {specjalizacji.map(el => (
                    <li key={el.title}>
                      <Link className="arrow-link" activeClassName='active' to={el.uri}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.3325 8L2.66601 8" stroke="#0F3730" strokeWidth="1.5" strokeLinecap="square" />
                          <path d="M9.55957 11.7734C9.55957 9.83354 11.268 8 13.3329 8" stroke="#0F3730" strokeWidth="1.5" strokeLinecap="square" />
                          <path d="M9.55957 4.22664C9.55957 6.16646 11.268 8 13.3329 8" stroke="#0F3730" strokeWidth="1.5" strokeLinecap="square" />
                        </svg>
                        <span>{el.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <Link className="styled-link" activeClassName='active' to="/kancelaria/">Kancelaria</Link>
              </li>
              <li>
                <Link className="styled-link" activeClassName='active' to="/wspolpraca/">Współpraca</Link>
              </li>
              <li>
                <Link className="styled-link" partiallyActive={true} activeClassName='active' to="/blog/">Blog</Link>
              </li>
            </ul>
            <Link c activeClassName='active' to="/kontakt/" className="navLinks-cta ">Kontakt</Link>
          </div>
          <Link activeClassName='active' to="/kontakt/" className="nav-cta">Kontakt</Link>
          <button
            id="nav-toggle"
            aria-label="Pokaż/Ukryj nawigację mobilną"
            onClick={handleToggle}
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </StyledNav>
    </>
  );
}

const Placeholder = styled.div`
  height: 105px;
  @media (max-width: 1149px){
    height: 89px;
  }
  @media (max-width: 699px){
    height: 67px;
  }
`

const StyledNav = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background-color: var(--neutral-100);
  height: 105px;
  z-index: 9;

  .arrow-link{
    display: flex;
    align-items: center;
    gap: 8px;
    transform: translateX(-24px);
    transition: transform .2s ease-out;

    svg{
      transition: opacity .2s ease-out;
      opacity: 0;
    }


    &.active, &:hover{
      transform: translate(0px);

      svg{
        opacity: 1;
      }
    }
  }

  .max-width-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--secondary-200);
  }

  .dropdown{
    &:hover{
      svg{
        transform: rotateX(180deg);
      }
    }

    .drop-down{
      display: flex;
      align-items: center;
      gap: 2px; 
      
      svg{
        margin-bottom: -3px;
        transition: transform .2s ease-out;
      }
    }
  }
  ul {
    list-style-type: none;
    font-size: ${20 / 16}rem;
  }
  .nav-links {
    > ul {
      display: flex;
      margin: 0 -${20 / 16}rem;
      > li {
        margin: 0 ${20 / 16}rem;
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
      a.active {
        font-weight: 700;
        font-style: italic;
      }
    }
  }
  .nav-cta {
    border: 2px solid var(--primary-800);
    font-family: var(--serif);
    padding: ${10 / 24}em ${32 / 24}em;
    font-size: ${24 / 16}rem;
    position: relative;

    &::after{
      content: '';
      position: absolute;
      left: 50%;
      top: -9px;
      transform: translateX(-50%) rotateZ(45deg);
      background-color: var(--primary-600);
      width: 16px;
      height: 16px;
      opacity: 0;
      pointer-events: none;
      transition: opacity .2s ease-out;
    }

    &:hover{
      background-color: var(--primary-100);
      &::after{
        opacity: 1;
        background-color: var(--primary-800);
      }
    }
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
      overflow: hidden;
    }
    ul {
      font-size: ${22 / 16}rem;
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
      padding: ${66 / 16}rem;
      background-color: var(--neutral-400);
      margin: 0 -20px;
      > ul {
        margin: 0;
        flex-direction: column;
        > li {
          &:first-child {
            order: 1;
          }
          margin: ${14 / 16}rem 0;
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
              font-size: ${20 / 16}rem;
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
      width: 216px;
    }
    .nav-links {
      padding: ${48 / 16}rem 1rem 1rem;
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
          margin: ${14 / 16}rem 0;
          ul {
            & > li {
              font-family: var(--sans-serif);
              font-size: ${20 / 16}rem;
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
      padding: ${10 / 24}em ${32 / 24}em;
      font-size: ${24 / 16}rem;
      text-align: center;
    }
  }
`

export default Nav;