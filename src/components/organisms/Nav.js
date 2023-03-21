import React, { useEffect, useRef } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Logo } from '../atoms/Icons';

const Nav = () => {
  const nav = useRef();
  useEffect(() => {
    const dropdown = document.querySelectorAll('.dropdown');
    dropdown.forEach(link => {
      link.addEventListener('mouseover', () => {
        nav.current.style.height = `${nav.current.offsetHeight + link.querySelector('ul').offsetHeight}px`;
      })
      link.addEventListener('mouseout', () => {
        nav.current.style = null;
      })
    })
  }, []);

  return (
    <StyledNav className="nav" ref={nav}>
      <div className="max-width">
        <Link to="/">
          <Logo />
        </Link>
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
  background-color: var(--neutral-200);
  z-index: 9;
  height: 105px;
  transition: height .5s;
  .max-width {
    height: 105px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding-top: 1em;
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
    ul {
      list-style-type: none;
      font-size: ${20/16}rem;
    }
    & > ul {
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
`

export default Nav;