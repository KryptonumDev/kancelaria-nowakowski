import React, { useEffect, useMemo } from "react";
import GlobalStyle from "../../styles/GlobalStyle";
import Nav from "../organisms/Nav";
import Footer from "../organisms/Footer";
import BreadCrumbs from './breadcrumbs';
import Cookies from "./cookies";
import { useState } from "react";
import { Ornament } from "../atoms/Icons"

const Layout = ({ children, pageContext }) => {
  const isBrowser = typeof window !== "undefined";
  const orphansRegex = useMemo(() => {
    const orphans = ['a', 'i', 'o', 'u', 'w', 'z', 'np.'];
    new RegExp(` (${orphans.join('|')}) `, 'gi')
  }, []);

  const locationPath = isBrowser ? window.location.pathname : '';

  useEffect(() => {
    const paragraphs = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li, a, button'));
    paragraphs.forEach(paragraph =>
      paragraph.childNodes.forEach(node =>
        node?.nodeType === Node.TEXT_NODE && (node.textContent = node.textContent.replace(orphansRegex, ` $1\u00A0`))
      )
    );

    document.body.classList.add('animate');
    const animElements = document.querySelectorAll('.anim');
    let offset = 0;
    const offsetDelay = 60;
    function runAnimation(init) {
      animElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * .95) {
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

  }, [locationPath, orphansRegex]);
  
  const [cookiesActive, setCookiesActive] = useState(false)

  return (
    <>
      <noscript className="noScript">
        <div>
          <Ornament anim="true" />
          <h1>JavaScript jest wyłączony</h1>
          <p>Prosimy uruchomić JavaScript w przeglądarce, aby zobaczyć stronę.</p>
        </div>
      </noscript>
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