import React from "react";
import Layout from "./src/layout/layout"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

const loadableReady = require("@loadable/component").loadableReady

exports.replaceHydrateFunction = () => {
  return (element, container, callback) => {
    loadableReady(() => {
      ReactDOM.render(element, container, callback)
    })
  }
}