import React from "react";
import Layout from "./src/layout/layout"
export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};