import React from "react"
import { graphql } from "gatsby"
import EDashboardScreenshots from "../elements/Edashboard-screenshots"

const PageDashboardScreenshots = ({slice}) => {
  if (!slice.primary.dashboard_screenshot.document.data) return null
  return <>{EDashboardScreenshots({ data: slice })}</>
}
export default PageDashboardScreenshots


export const query = graphql`
  fragment PageDashboardScreenshotsSlice on PrismicPageDataBodyDashboardScreenshots {
    slice_type
    primary {
      dashboard_screenshot {
        document {
          ... on PrismicDashboardScreenshots {
            id
            data {
              title
              subtitle
              screenshots {
                label
                screenshot {
                  gatsbyImageData
                }
                icon {                  
                  gatsbyImageData
                  fixed(width: 42) {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

