import React from "react"
import { graphql } from "gatsby"
import ECallToAction from "../elements/Ecall-to-action"

const CallToAction = ({slice}) => {  
  if (!slice.primary.cta.document.data) return null
  return <>{ECallToAction({ data: slice })}</>
}

export default CallToAction

export const query = graphql`
  fragment CtaSlice on PrismicHomepageDataBodyCtaBlock {
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

