import React from "react"
import { graphql } from "gatsby"
import ECallToAction from "../elements/Ecall-to-action"

const PageCallToAction = ({slice}) => {  
  if (!slice.primary.cta.document.data) return null
  return <>{ECallToAction({ data: slice })}</>
}

export default PageCallToAction

export const query = graphql`
  fragment PageCtaSlice on PrismicPageDataBodyCtaBlock {
    slice_type
    primary {
      cta {
        document {
          ... on PrismicCallToAction {
            id
            data {
              cta_heading
              cta_content {
                text
                html
              }
              cta_subheading
              button_link
              button_label
            }
          }
        }
      }
    }
  }
`

