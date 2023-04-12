import React, { useEffect } from "react";
import GlobalStyle from "../../styles/GlobalStyle";
import Nav from "../organisms/Nav";
import Footer from "../organisms/Footer";
import BreadCrumbs from './breadcrumbs';
import Cookies from "./cookies";
import { useState } from "react";

const Layout = ({ children, pageContext }) => {
  const isBrowser = typeof window !== "undefined";
  const orphans = ['a', 'i', 'o', 'u', 'w', 'z', 'np.'];
  const orphansRegex = new RegExp(` (${orphans.join('|')}) `, 'gi');
  useEffect(() => {
    const paragraphs = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li'));
    paragraphs.forEach(paragraph =>
      paragraph.childNodes.forEach(node =>
        node?.nodeType === Node.TEXT_NODE && (node.textContent = node.textContent.replace(orphansRegex, ` $1\u00A0`))
      )
    );


    document.body.classList.add('animate');
    const animElements = document.querySelectorAll('.anim');
    let offset = 0;
    const offsetDelay = 100;
    function runAnimation(init) {
      animElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight) {
          if (el.classList.contains('anim-active')) {
            offset = 0;
          }
          setTimeout(() => {
            el.classList.add('anim-active');
          }, offset);

          init
          ? rect.bottom <= 0 ? (offset = 0) : (offset += offsetDelay)
          : offset += offsetDelay;
        }
      });
    }
    const handleScroll = (init) => requestAnimationFrame(() => runAnimation(init));

    window.addEventListener('scroll', () => handleScroll(false));
    handleScroll(true);


  }, [isBrowser ? window.location.pathname : '']);
  
  const [cookiesActive, setCookiesActive] = useState(false)

  return (
    <>
      <Cookies isActive={cookiesActive} setIsActive={setCookiesActive} />
      <GlobalStyle />
      <Nav />
      {(pageContext.uri !== '/' && pageContext.breadcrumbs)
        && <BreadCrumbs data={pageContext.breadcrumbs} />}
      {children}
      <Footer setCookiesActive={setCookiesActive} />
    </>
  );
}

export default Layout;