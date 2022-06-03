import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { handleLangContent } from "../../utils/handleLangContent"
import { EDashboardScreenshots } from "../elements/dashboard-screenshots"

export const DashboardScreenshots = data => {
  const { allPrismicDashboardScreenshots } = useStaticQuery(graphql`
    query {
      allPrismicDashboardScreenshots {
        nodes {
          lang
          data {
            title
            subtitle
            screenshots {
              label
              icon {
                url
              }
              screenshot {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `)

  const dashboardData = handleLangContent(
    allPrismicDashboardScreenshots.nodes,
    data.activeDocMeta.lang
  )

  //const ComponentToRender = require("../elements/dashboard-screenshots").default
  //const slider = useRef()

  //return <ComponentToRender slider={slider} data={dashboardData} />

  return <>{EDashboardScreenshots({ data: dashboardData })}</>
}
export default DashboardScreenshots
