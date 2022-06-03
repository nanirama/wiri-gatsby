import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { handleLangContent } from "../../utils/handleLangContent"
import { EAppScreenshots } from "../elements/app-screenshots"

export const AppScreenshots = data => {
  const { allPrismicAppScreenshots } = useStaticQuery(graphql`
    query {
      allPrismicAppScreenshots {
        nodes {
          lang
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
  `)
  //const appData = allPrismicAppScreenshots.nodes[0].data
  const appData = handleLangContent(
    allPrismicAppScreenshots.nodes,
    data.activeDocMeta.lang
  )

  //const ComponentToRender = require("../elements/app-screenshots").default
  //const slider = useRef()

  return <>{EAppScreenshots({ data: appData })}</>
}
export default AppScreenshots
