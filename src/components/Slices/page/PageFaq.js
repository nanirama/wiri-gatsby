import React from "react"
import { graphql } from "gatsby"
import EFaq from "../elements/Efaq";

const PageFaqSlice = ({slice}) => { 
  if (!slice.primary.faq.document.data) return null 
  return <>{EFaq({ data: slice })}</>
}
export default PageFaqSlice

export const query = graphql`
  fragment PageFaqsSlice on PrismicPageDataBodyFaqBlock {
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

