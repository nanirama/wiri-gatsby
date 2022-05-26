import React from "react"
import { graphql } from "gatsby"
import EPricingTable from "../elements/Epricing-table"

const PagePricingTable = ({slice}) => {
  if (!slice.primary.ptable.document.data) return null
  return <>{EPricingTable({ data: slice })}</>
}

export default PagePricingTable

export const query = graphql`
  fragment PagePricingTableSlice on PrismicPageDataBodyPricingTables {
    slice_type
      primary {
        ptable {
          document {
            ... on PrismicPricingTable {
              id
              data {
                default_monthly
                per_year_label
                per_month_label
                save_label {
                  text
                }
                subtitle {
                  text
                }
                title {
                  text
                }
                year_label
                month_label
                body {
                    ... on PrismicPricingTableDataBodyPricingPlan {
                      id
                      items {
                        included
                        feature {
                          text
                        }
                        tooltip {
                          text
                        }
                      }
                      primary {
                        button_label
                        featured
                        label
                        order
                        per_month
                        per_year
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
