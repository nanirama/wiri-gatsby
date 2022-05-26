import * as React from "react"
import { graphql } from "gatsby"
import { components } from "../content"

export const ContentSlice = (props) => {
  const slice = props.slice

  const ComponentToRender = components[slice.primary.component]
  console.log(components, slice.primary.component)
  return <ComponentToRender activeDocMeta={props.context} /> 

}

export const query = graphql`
  fragment PageDataBodyContentSlice on PrismicPageDataBodyContentSlice {
    primary {
      component
    }
  }
`
