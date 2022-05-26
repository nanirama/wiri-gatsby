import React from "react"
import { graphql } from "gatsby"
import EAppScreenshots from "../elements/Eapp-screenshots";

const PageAppScreenshots = ({ slice }) => {
  if (!slice.primary.app_screenshot.document.data) return null
  return <>{EAppScreenshots({ data: slice })}</>
}
export default PageAppScreenshots

export const query = graphql`
  fragment PageAppScreenshotsSlice on PrismicPageDataBodyAppScreenshots {
    slice_type
    primary {
        app_screenshot {
          document {
            ... on PrismicAppScreenshots {
              id
              data {
                title
                subtitle
                screenshots {
                  name
                  image {
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

