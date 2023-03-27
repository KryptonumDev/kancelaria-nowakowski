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
    --secondary-700: #AC8A58;
    --secondary-800: #8A6C3F;
    --secondary-900: #694D25;
    --neutral-100: #FDFDFC;
    --neutral-200: #FBFBF9;
    --neutral-300: #FAF9F6;
    --neutral-400: #F8F7F3;
    --neutral-500: #F6F5F0;
    --neutral-600: #EAE8DD;
    --neutral-700: #C3BFAC;
    --neutral-800: #AAA58B;
    --neutral-900: #9D977A;

    --sans-serif: 'Lato', sans-serif;
    --serif: 'Literata', serif;
  }
  body {
    font-size: 16px;
    line-height: 1.5;
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden;
    min-width: 320px;
    font-family: 'Lato', sans-serif;
    color: var(--primary-800);
    margin-top: 137px;
    @media (max-width: 1149px) {
      margin-top: 113px;
    }
  }
  button, select {
    cursor: pointer;
  }
  input, button, textarea, select {
    font: inherit;
    color: inherit;
    background-color: transparent;
    border: none;
  }
  svg {
    vertical-align: top;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Literata', serif;
    font-weight: 400;
    color: var(--primary-900);
    line-height: 1.22;
  }
  h1 {
    font-size: clamp(${36/16}rem, ${54/7.68}vw, ${54/16}rem);
  }
  h2 {
    font-size: clamp(${28/16}rem, ${40/13.66}vw, ${40/16}rem);
  }
  h3 {
    font-size: clamp(${18/16}rem, ${24/10.24}vw, ${24/16}rem);
  }
  button[type="submit"] {
    background-color: var(--primary-500);
    color: var(--color-900);
    font-size: clamp(${18/16}rem, ${21/7.68}vw, ${24/16}rem);
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: center;
    padding: 1rem 2rem;
  }

  #___gatsby, .max-width {
    width: calc(100% - 80px);

    @media (max-width: 768px){  
      width: calc(100% - 34px);
    }
    max-width: 1286px;
    margin: 0 auto;
    height: 100%;
  }

  .cta-primary,
  .cta-secondary,
  .cta-white {
    font-family: var(--serif);
    font-size: clamp(${18/16}rem, ${24/13.66}vw, ${24/16}rem);
    padding: ${16/24}em ${32/24}em;
    white-space: nowrap;
    display: inline-block;
    text-align: center;
  }
  .cta-primary {
    background-color: var(--primary-500);
    color: var(--primary-900);
  }
  .cta-secondary {
    box-shadow: inset 0 0 0 2px var(--primary-800);
    color: var(--primary-800);
  }
  .cta-white{
    background: #ECFFFC;
    color: #0F3730;
  }
`

export default GlobalStyle