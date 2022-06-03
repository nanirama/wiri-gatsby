import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { handleLangContent } from "../../utils/handleLangContent"
import { EPricingTable } from "../elements/pricing-table"

export const PricingTable = data => {
  const { allPrismicPricingTable } = useStaticQuery(graphql`
    query {
      allPrismicPricingTable {
        nodes {
          lang
          data {
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
          }
        }
      }
    }
  `)

  const pricingTableData = handleLangContent(
    allPrismicPricingTable.nodes,
    data.activeDocMeta.lang
  )

  return <>{EPricingTable({ data: pricingTableData })}</>
}

export default PricingTable
