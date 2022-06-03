import React from "react"
import { ECallToAction } from "../elements/call-to-action"
//const ComponentToRender = require("../elements/call-to-action").default

export const CallToAction = (props) => {
  const ctaData = {
    title: "Ready to get ahead of the competitors?",
    subtitle: "Instant sign up, no credit card required",
    align: "center",
    label: "Try for FREE",
  }

  //return <ComponentToRender data={ctaData} />
  return <>{ECallToAction({ data: ctaData })}</>
}

export default CallToAction
