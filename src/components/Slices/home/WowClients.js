import React from "react"
import { graphql } from "gatsby"
import EWowClients from "../elements/Ewow-clients";

const WowClients = ({slice}) => {   
  if (!slice.primary.wclients.document.data) return null
  return <>{EWowClients({ data: slice })}</>
}
export default WowClients

export const query = graphql`
  fragment WowClientsSlice on PrismicHomepageDataBodyWowClients {
    slice_type
    primary {
        wclients {
          document {
            ... on PrismicWowClients {
              id
              data {
                background {
                    gatsbyImageData(layout: CONSTRAINED, width: 903, height: 769)
                }
                subtitle
                title
                benefits {
                  title
                  content
                  icon {
                    gatsbyImageData(layout: FIXED, width: 24)
                  }
                }
              }
            }
          }
        }
    }
  }
`
