import React from "react"
import Heading from "../common/heading"
import { Wrapper } from "../styled/lib"
import { Inner } from "../styled/call-to-action"

export const ECallToAction = props => {
  return (
    <Wrapper className="container">
      <Inner>
        <Heading
          title={props.data.title}
          subtitle={props.data.subtitle}
          align={props.data.align}
        />
        <button className="btn-blue mt-3 mt-sm-5">{props.data.label}</button>
      </Inner>
    </Wrapper>
  )
}

export default ECallToAction
