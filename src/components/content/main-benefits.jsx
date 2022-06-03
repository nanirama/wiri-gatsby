import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { handleLangContent } from "../../utils/handleLangContent"
import { EMainBenefits } from "../elements/main-benefits"

export const MainBenefits = data => {
  const { allPrismicWowClients } = useStaticQuery(graphql`
    query {
      allPrismicWowClients {
        nodes {
          lang
          data {
            title
            subtitle
            background {
              gatsbyImageData
            }
            benefits {
              title
              content
              icon {
                url
              }
            }
          }
        }
      }
    }
  `)

  const benefitsData = handleLangContent(
    allPrismicWowClients.nodes,
    data.activeDocMeta.lang
  )

  return <>{EMainBenefits({ data: benefitsData })}</>
}

export default MainBenefits
