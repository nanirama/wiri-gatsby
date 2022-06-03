import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { handleLangContent } from "../../utils/handleLangContent"
import { EWebsiteWidget } from "../elements/website-widget"

export const WebsiteWidget = data => {
  const { allPrismicWebsiteWidgets } = useStaticQuery(graphql`
    query {
      allPrismicWebsiteWidgets {
        nodes {
          lang
          data {
            title
            widgets {
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
  //const widgetData = allPrismicWebsiteWidgets.nodes[0].data
  const widgetData = handleLangContent(
    allPrismicWebsiteWidgets.nodes,
    data.activeDocMeta.lang
  )

  return <>{EWebsiteWidget({ data: widgetData })}</>
}

export default WebsiteWidget
