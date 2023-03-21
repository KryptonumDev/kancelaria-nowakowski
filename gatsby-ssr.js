import React from 'react';
import Layout from "./src/components/layout/Layout"
import CorinthiaRegular from "./src/resources/fonts/Corinthia-Regular.woff2"
import LatoRegular from "./src/resources/fonts/Lato-Regular.woff2"
import LatoBold from "./src/resources/fonts/Lato-Bold.woff2"
import LiterataRegular from "./src/resources/fonts/Literata-Regular.woff2"
import LiterataSemiBold from "./src/resources/fonts/Literata-SemiBold.woff2"

export const onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: "pl" })
  setHeadComponents([
    <link
      rel="preload"
      href={CorinthiaRegular}
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,
    <link
      rel="preload"
      href={LatoRegular}
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,
    <link
      rel="preload"
      href={LatoBold}
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,
    <link
      rel="preload"
      href={LiterataRegular}
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,
    <link
      rel="preload"
      href={LiterataSemiBold}
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,
  ])
}

export const wrapPageElement = ({ props, element }) => {
  return <Layout {...props}>{element}</Layout>
}