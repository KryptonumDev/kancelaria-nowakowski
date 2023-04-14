import { createGlobalStyle } from "styled-components";
import "./fonts.css"

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
    --primary-100: #ECFFFC;
    --primary-200: #9CFFEE;
    --primary-300: #6FE8D2;
    --primary-400: #4FD2BB;
    --primary-500: #51C6B1;
    --primary-600: #3DA190;
    --primary-700: #016250;
    --primary-800: #12433A;
    --primary-900: #0F3730;
    --secondary-100: #FFFFFF;
    --secondary-200: #EAF0F1;
    --secondary-300: #D8E1E3;
    --secondary-400: #BFCACD;
    --secondary-500: #AAB4B7;
    --secondary-600: #90999B;
    --secondary-700: #707778;
    --secondary-800: #555959;
    --secondary-900: #343535;
    --neutral-100: #FDFDFC;
    --neutral-200: #FBFBF9;
    --neutral-300: #FAF9F6;
    --neutral-400: #F8F7F3;
    --neutral-500: #F6F5F0;
    --neutral-600: #EAE8DD;
    --neutral-700: #C3BFAC;
    --neutral-800: #AAA58B;
    --neutral-900: #9D977A;

    --error-800: #8A4248;

    --sans-serif: 'Lato', sans-serif;
    --serif: 'Literata', serif;
  }
  body {
    font-size: 16px;
    line-height: 1.5;
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden;
    min-width: 320px;
    font-family: var(--sans-serif);
    color: var(--primary-800);
  }
  *:focus {
    outline: none
  }
  *:focus-visible {
    outline: none;
    box-shadow: 0 0 0 1px var(--primary-500);
  }
  #gatsby-focus-wrapper {
    box-shadow:unset;
  }
  button, select {
    cursor: pointer;
  }
  input, button, textarea, select {
    font: inherit;
    color: inherit;
    background-color: transparent;
    border: none;
    -webkit-appearance: none;
    appearance: none;
    border-radius: 0;
  }
  svg {
    vertical-align: top;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  p {
    font-feature-settings: 'pnum' on, 'onum' on;
  }
  p em {
    font-style: italic !important;
    font-family: var(--serif);
  }
  h1, h2, h3, h4, h5, h6 {
    em {
      position: relative;
      font-style: normal;
      white-space: nowrap;
      &::before, &::after {
        content: '';
        position: absolute;
        left: 0;
        background-color: var(--primary-400);
      }
      &::before {
        bottom: -2px;
        transform: translate(-50%, 50%) rotate(45deg);
        width: 6px;
        height: 6px;
      }
      &::after {
        bottom: -3px;
        width: 100%;
        height: 2px;
        transform-origin: left;
      }
    }
  }
  body.animate {
    h1, h2, h3, h4, h5, h6 {
      em {
        &::before {
          transform: translate(-50%, 50%) rotate(45deg) scale(0);
        }
        &::after {
          transform: scaleX(0);
        }
      }
    }
    .anim-active {
      h1, h2, h3, h4, h5, h6 {
        em {
          &::before, &::after {
            transition: transform .8s cubic-bezier(0.17, 0.67, 0.5, 1);
          }
          &::before {
            transition-delay: .2s;
            transform: translate(-50%, 50%) rotate(45deg) scale(1);
          }
          &::after {
            transition-delay: .4s;
            transform: scaleX(1);
          }
        }
      }
    }
  }
  h1, h2, h3, h4, h5, h6, .h3 {
    font-family: var(--serif);
    font-weight: 400;
    color: var(--primary-900);
    line-height: 1.22;
    letter-spacing: -0.01em;
  }
  h1 {
    font-size: clamp(${32 / 16}rem, ${50 / 7.68}vw, ${54 / 16}rem);
  }
  h2 {
    font-size: clamp(${28 / 16}rem, ${36 / 7.68}vw, ${40 / 16}rem);
  }
  h3, .h3 {
    font-size: clamp(${24 / 16}rem, ${30 / 7.68}vw, ${32 / 16}rem);
  }
  button[type="submit"] {
    background-color: var(--primary-500);
    color: var(--color-900);
    font-size: clamp(${18 / 16}rem, ${21 / 7.68}vw, ${24 / 16}rem);
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: center;
    padding: 1rem 2rem;
    &[disabled] {
      opacity: .8 !important;
      pointer-events: none;
    }
  }

  main {
    display: grid;
    grid-gap: clamp(64px, ${96 / 768 * 100}vw, 128px);
  }

  #___gatsby, .max-width {
    width: calc(100% - 80px);
    @media (max-width: 768px){  
      width: calc(100% - 34px);
    }
    max-width: 1286px;
    margin: 0 auto;
  }

  .max-width-header {
    height: 100%;
    width: calc(100% - 34px);
    max-width: 1286px;
    margin: 0 auto;
  }

  .styled-link {
    width: fit-content;
    display: block;
    position: relative;
    padding-bottom: 3px;
    transition: background-size 0.4s ease-out;
    background-image: linear-gradient(currentColor, currentColor);
    background-size: 0% 2px;
    background-position: left bottom;
    background-repeat: no-repeat;
    svg {
      transition: transform .3s ease-out;
    }
    &:hover,
    &:focus-visible {
      outline: none;
      background-size: 100% 2px;
      svg {
        transform: translateX(5px);
      }
    }
  }

  .no-focus {
    position: absolute;
    opacity: 0;
    left: 0;
    top: 0;
  }

  .no-focus:focus-visible {
    outline: none;
  }

  .cta-primary,
  .cta-secondary,
  .cta-white,
  .wp-block-button a {
    outline: none;
    font-family: var(--serif);
    font-size: clamp(${18 / 16}rem, ${21 / 7.68}vw, ${24 / 16}rem);
    padding: ${16 / 24}em ${32 / 24}em;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    text-align: center;
    position: relative;
    transition: background-color .2s ease-out;
    position: relative;
    > * {
      position: relative;
      z-index: 1;
    }
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: var(--primary-100);
      transform: scaleY(0);
      transform-origin: bottom;
      transition: transform .2s ease-in-out .2s;
      z-index: 0;
    }
    &::after {
      content: '';
      position: absolute;
      left: 50%;
      top: -8px;
      transform: translateX(-50%) rotateZ(45deg) scale(0);
      background-color: var(--primary-600);
      width: 16px;
      height: 16px;
      pointer-events: none;
      transition: transform .2s ease-in-out;
    }
    &:hover,
    &:focus-visible {
      &::before {
        transform: scaleY(1);
        transition: transform .2s ease-in-out;
      }
      &::after {
        transform: translateX(-50%) rotateZ(45deg) scale(1);
        transition: transform .2s ease-in-out .2s;
      }
    }
    &:active::before {
      background-color: var(--primary-200);
    }
    &:focus-visible::before {
      background-color: var(--primary-300);
    }
  }
  .cta-primary, .wp-block-button a {
    background-color: var(--primary-500);
    color: var(--primary-900);
    &::before {
      background-color: var(--primary-300);
    }
  }
  .cta-secondary {
    border: 2px solid var(--primary-800);
    color: var(--primary-800);
    &::after{
      top: -9px;
      background-color: var(--primary-800);
    }
  }
  .cta-white {
    background-color: var(--primary-100);
    color: #0F3730;
  }

  body.animate {
    .anim {
      opacity: 0;
      will-change: opacity, transform;
      &.anim-active {
        opacity: 1;
        transition: opacity 1s cubic-bezier(0.17, 0.67, 0.5, 1), transform 1.2s cubic-bezier(0.17, 0.67, 0.5, 1);
      }
      &:not(.animNotTransform) {
        transform: translateY(21px);
        &.anim-active {
          transform: translateY(0);
        }
      }
    }
    .ornament.anim-active path {
      transition: stroke-dashoffset 1s ease-in;
      stroke-dashoffset: 0;
      &:nth-child(1) {
        transition-delay: .4s;
      }
      &:nth-child(2) {
        stroke-dashoffset: 1500;
      }
      &:nth-child(3) {
        transition-delay: .4s;
      }
    }
  }
  .noScript {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    background-color: var(--primary-100);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    div {
      max-width: ${610/16}rem;
    }
    h1 {
      margin: 2rem 0 1rem;
    }
  }
`

export default GlobalStyle