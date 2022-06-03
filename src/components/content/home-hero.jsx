import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { handleLangContent } from "../../utils/handleLangContent"
import { EHomeHero } from "../elements/home-hero"

export const HomeHero = data => {
  //console.log("HomeHero", data);

  const { allPrismicHomeHero } = useStaticQuery(graphql`
    query {
      allPrismicHomeHero {
        nodes {
          lang
          data {
            title
            subtitle
            button_label
            under_button
            hero_image {
              gatsbyImageData
            }
            menu_image {
              gatsbyImageData
            }
            promotion_image {
              gatsbyImageData
            }
            qr_image {
              gatsbyImageData
            }
            question_image {
              gatsbyImageData
            }
            rating_image {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)

  const homeData = handleLangContent(
    allPrismicHomeHero.nodes,
    data.activeDocMeta.lang
  )

  //const ComponentToRender = require("../elements/home-hero").default

  return <>{EHomeHero({ data: homeData })}</>
}

export default HomeHero
