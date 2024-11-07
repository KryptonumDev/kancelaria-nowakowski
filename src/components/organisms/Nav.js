import React, { useEffect, useRef, useCallback } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { Logo } from '../atoms/Icons';

const Nav = () => {
  const { allWpSpecjalizacja: { nodes: specjalizacji }, global: { global: { navAnnotation } } } = useStaticQuery(graphql`
    query {
      allWpSpecjalizacja {
        nodes {
          uri
          title
        }
      }
      global: wpPage(id: { eq: "cG9zdDoxNjg=" }) {
        global {
          navAnnotation {
            tel
            email
          }
        }
      }
    }
  `)

  const nav = useRef();
  const overlay = useRef();
  const annotationRef = useRef();

  const handleToggle = () => {
    nav.current.classList.toggle('expand');
    overlay.current.classList.toggle('expand');
    document.querySelector('.nav-links a').focus();
  }
  const handleNavClick = () => {
    nav.current.classList.remove('expand');
    overlay.current.classList.remove('expand');
    nav.current.querySelector('.dropdown ul').style.pointerEvents = 'none';
    setTimeout(() => {
      nav.current.querySelector('.dropdown ul').style = null;
    }, 100);
  }

  const closeAnnotation = () => {
    if (annotationRef.current) {
      annotationRef.current.style.display = 'none';
    }
  };

  const handleAnnotationClose = useCallback(() => {
    closeAnnotation();
    localStorage.setItem('navAnnotation', JSON.stringify({
      tel: navAnnotation.tel,
      email: navAnnotation.email,
      timestamp: new Date().getTime(),
    }));
  }, [navAnnotation]);

  useEffect(() => {
    const storedAnnotation = localStorage.getItem('navAnnotation');
    if (storedAnnotation) {
      const parsedAnnotation = JSON.parse(storedAnnotation);
      const currentTime = new Date().getTime();
      const expiration = 24 * 60 * 60 * 1000;
      if (parsedAnnotation.tel !== navAnnotation.tel ||
        parsedAnnotation.email !== navAnnotation.email ||
        (currentTime - parsedAnnotation.timestamp >= expiration)) {
        localStorage.removeItem('navAnnotation');
      } else {
        closeAnnotation();
      }
    }
  }, [navAnnotation]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.onkeydown = function (e) {
        if (e.key === "Escape") {
          handleNavClick()
        }
      }
    }
  }, [])

  return (
    <>
      <NavAnnotation ref={annotationRef}>
        <div>
          <a href={`tel:${navAnnotation.tel}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="#9D977A" strokeLinecap="square" strokeWidth="1.5" d="M14.847 17.697c-7.624.35-13.302-8.295-12.513-12.513.724-1.244 1.651-2.165 2.893-2.893l2.7 3.71-1.369 2.378s.378 1.588 1.801 3.01c1.494 1.495 3.16 1.952 3.16 1.952l2.38-1.37 3.841 2.833c-.714 1.277-1.616 2.179-2.893 2.893Z" /></svg>
            {navAnnotation.tel}</a>
          <a href={`mailto:${navAnnotation.email}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="#9D977A" strokeLinecap="square" strokeWidth="1.5" d="m14.836 7.375-4.803 3.903-4.804-3.903" /><path stroke="#9D977A" strokeLinecap="square" strokeWidth="1.5" d="M1.667 3.334h16.667v13.333H1.667z" /></svg>
            {navAnnotation.email}</a>
        </div>
        <button aria-label="Ukryj informacje kontaktowe" onClick={handleAnnotationClose}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="#555959" strokeLinecap="round" d="M15.833 4.166 4.167 15.833m0-11.667 11.666 11.667" /></svg>
        </button>
      </NavAnnotation>
      <Overlay onClick={handleNavClick} ref={overlay} />
      <StyledNav className="nav" ref={nav}>
        <a className="no-focus" href="#main" aria-label='skip link to main content' > </a>
        <nav className="max-width-header">
          <Link to="/" aria-label="Strona główna" onClick={handleNavClick} className="nav-logo">
            <Logo />
          </Link>
          <div className="nav-links">
            <ul>
              <li className="dropdown">
                <Link partiallyActive={true} className="drop-down styled-link" activeClassName='active' to="/specjalizacje/" onClick={handleNavClick}>
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
                      <Link className="arrow-link" activeClassName='active' to={el.uri} onClick={handleNavClick}>
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
                <Link className="styled-link" activeClassName='active' to="/kancelaria/" onClick={handleNavClick}>Kancelaria</Link>
              </li>
              <li>
                <Link className="styled-link" activeClassName='active' to="/wspolpraca/" onClick={handleNavClick}>Współpraca</Link>
              </li>
              <li>
                <Link className="styled-link" partiallyActive={true} activeClassName='active' to="/blog/" onClick={handleNavClick}>Blog</Link>
              </li>
            </ul>
            <Link activeClassName='active' to="/kontakt/" className="navLinks-cta cta-secondary" onClick={handleNavClick}><span>Kontakt</span></Link>
          </div>
          <Link activeClassName='active' to="/kontakt/" className="nav-cta cta-secondary" onClick={handleNavClick}><span>Kontakt</span></Link>
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
      <NavSpacer />
    </>
  );
}

const NavAnnotation = styled.aside`
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  background: var(--neutral-500, #F6F5F0);
  font-size: 0.875rem;
  margin: 0 -40px;
  padding: 0 40px;
  width: calc(100% + 80px);
  @media (max-width: 768px){
    margin: 0 -17px;
    width: calc(100% + 34px);
    padding: 0 17px;
  }
  @media (min-width: 1366px) {
    margin: 0 calc((100vw - 1286px) / -2);
    width: calc(100% + (100vw - 1286px));
  }
  &::before {
    content: '';
    width: 2.75rem;
  }
  div {
    padding: 0.5rem 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem 1.5rem;
    align-items: center;
    a {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
      gap: 0.5rem;
    }
  }
  button {
    width: 2.75rem;
    height: 2.75rem;
    display: grid;
    place-items: center;
    transition: background-color 300ms ease-out;
    &:hover {
      background-color: #dcdace;
    }
    &:active {
      background-color: #c3bfac;
    }
  }
  @media (max-width: 38rem) {
    grid-template-columns: 1fr auto;
    &::before {
      display: none;
    }
  }
`

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,.6);
  position: fixed;
  inset: 0;
  z-index: 4;
  transition: opacity .5s;
  opacity: 0;
  pointer-events: none;

  &.expand {
    opacity: 1;
    pointer-events: all;
  }
`

const StyledNav = styled.header`
  position: sticky;
  left: 0;
  top: 0;
  margin: 0 -40px;
  width: calc(100% + 80px);
  .max-width-header {
    width: calc(100% - 80px);
  }
  @media (max-width: 768px){
    margin: 0 -17px;
    width: calc(100% + 34px);
    .max-width-header {
      width: calc(100% - 34px);
    }
  }
  @media (min-width: 1366px) {
    margin: 0 calc((100vw - 1286px) / -2);
    width: calc(100% + (100vw - 1286px));
  }
  background-color: var(--neutral-100);
  height: 105px;
  z-index: 9;
  .arrow-link{
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transform: translateX(-24px);
    transition: transform .2s ease-out;
    svg {
      transition: opacity .2s ease-out;
      opacity: 0;
    }
    &.active,
    &:hover,
    &:focus-visible {
      outline: none;
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
    position: relative;
    z-index: 2;
  }

  .dropdown{
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
          transition: opacity .4s ease-out;
          opacity: 0;
          pointer-events: none;
          z-index: -1;
          &::before {
            content: '';
            width: 150vw;
            height: 120%;
            background: var(--neutral-100);
            position: absolute;
            left: -50vw;
            top: -1rem;
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
      }
    }
  }
  .nav-cta {
    padding: ${10 / 16}rem ${32 / 16}rem;
  }
  #nav-toggle {
    order: 1;
    display: none;
    width: 48px;
    height: 48px;
    padding: 0 9px;
    margin: 0 -9px;
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
  &.expand {
    position: fixed;
    width: 100%;
    margin: 0;
    + div {
      display: block;
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
    &.expand .nav-links {
      transform: translateX(0);
      visibility: visible;
      transition: transform .5s cubic-bezier(0.65,0.05,0.36,1);
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
      position: fixed;
      right: 0;
      top: 89px;
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
      top: 67px;
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
        grid-gap: 0 16px;
        grid-template:
                "b a" auto
                "c a" auto
                "d a" 1fr;
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


  @media (max-width: 349px){
    .nav-links ul {
      font-size: ${20 / 16}rem;
      > li ul > li {
      font-size: ${18 / 16}rem;
      }
    }
  }
`

const NavSpacer = styled.div`
  display: none;
  height: 105px;
  @media (max-width: 1149px){
    height: 89px;
  }
  @media (max-width: 699px){
    height: 67px;
  }
`

export default Nav;
