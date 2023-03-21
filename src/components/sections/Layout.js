import React, { useEffect } from "react";
import GlobalStyle from "../../styles/GlobalStyle";
import Nav from "../organisms/Nav";

const Layout = ({children}) => {
  useEffect(() => {
    const orphans = ['w','z','u','o','i','np.'];
    const paragraphs = document.querySelectorAll('p, li, h2, h3');
    paragraphs.forEach(paragraph => {
      orphans.forEach(orphan => {
        paragraph.innerHTML = paragraph.innerHTML.replaceAll(` ${orphan} `, ` ${orphan}&nbsp;`);
      });
    })
  }, [])
  return (
    <>
      <GlobalStyle />
      <Nav />
      {children}
    </>
  );
}
 
export default Layout;