import React from "react"
import { graphql } from "gatsby"
import EFaq from "../elements/Efaq";

const FaqSlice = ({slice}) => { 
  if (!slice.primary.faq.document.data) return null 
  return <>{EFaq({ data: slice })}</>
}
export default FaqSlice

export const query = graphql`
  fragment FaqsSlice on PrismicHomepageDataBodyFaqBlock {
    slice_type
    primary {
      faq {
        document {
          ... on PrismicFaqs {
            id
            data {
              title
              image {
                gatsbyImageData
              }
              questions {
                answer
                question
              }
            }
          }
        }
      }
    }
  }
`

