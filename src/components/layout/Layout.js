import React, { useEffect } from "react";
import GlobalStyle from "../../styles/GlobalStyle";
import Nav from "../organisms/Nav";
import Footer from "../organisms/Footer";
import BreadCrumbs from './breadcrumbs';
import Cookies from "./cookies";
import { useState } from "react";
import { Ornament } from "../atoms/Icons"

const Layout = ({ children, pageContext, location }) => {
  useEffect(() => {
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

  }, [location]);

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