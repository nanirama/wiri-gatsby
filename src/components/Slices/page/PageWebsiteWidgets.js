import React from "react"
import { graphql } from "gatsby"
import EWebsiteWidget from "../elements/Ewebsite-widget";
const PageWebsiteWidgets = ({ slice }) => {
  if (!slice.primary.website_widget.document.data) return null
  return <>{EWebsiteWidget({ data: slice })}</>
}
export default PageWebsiteWidgets

export const query = graphql`
  fragment PageWebsiteWidgetsSlice on PrismicPageDataBodyWebsiteWidgets {
    slice_type
    primary {
      website_widget {
        document {
          ... on PrismicWebsiteWidgets {
            id
            data {
              title
              widgets {
                label
                screenshot {
                  gatsbyImageData
                }
                icon {
                  fixed(width: 30) {
                    src
                  }
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  }
`

