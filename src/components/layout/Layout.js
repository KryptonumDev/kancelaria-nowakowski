import React, { useEffect } from "react";
import GlobalStyle from "../../styles/GlobalStyle";
import Nav from "../organisms/Nav";
import Footer from "../organisms/Footer";
import BreadCrumbs from './breadcrumbs';
import Cookies from "./cookies";
import { useState } from "react";

const Layout = ({ children, pageContext }) => {
  useEffect(() => {
    const orphans = ['w','W','z','u','o','i','np.'];
    const paragraphs = document.querySelectorAll('p, h2, h3, span');
    paragraphs.forEach(paragraph => {
      orphans.forEach(orphan => {
        paragraph.innerHTML = paragraph.innerHTML.replaceAll(` ${orphan} `, ` ${orphan}&nbsp;`);
      });
    })
  }, [])

  const [cookiesActive, setCookiesActive] = useState(true)
  return (
    <>
      <Cookies isActive={cookiesActive} setIsActive={setCookiesActive} />
      <GlobalStyle />
      <Nav />
      {(pageContext.uri !== '/' && pageContext.breadcrumbs)
        && <BreadCrumbs data={pageContext.breadcrumbs} />}
      {children}
      <Footer />
    </>
  );
}

export default Layout;