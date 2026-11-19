import React from 'react';
import Layout from "./src/components/layout/Layout"
import { pushRouteChange } from "./src/helpers/gtm"

// Replaces gatsby-plugin-google-tagmanager. Sends the route change only when GTM
// is loaded, that is after consent for statistics cookies.
export const onRouteUpdate = () => {
  pushRouteChange()
}

export const wrapPageElement = ({ props, element }) => {
  return <Layout {...props}>{element}</Layout>
}