import * as React from "react"
import { graphql } from "gatsby"
import { EContentText } from "../elements/Econtent-text"

const PageContentText = ({ slice }) => {
  if (!slice.primary.richtext) return null
  return <>{EContentText({ data: slice })}</>
}
export default PageContentText
export const query = graphql`
  fragment PageDataBodyText on PrismicPageDataBodyText {
    slice_type
    primary {
      richtext {
        text
        html
        richText
      }
    }
  }
`