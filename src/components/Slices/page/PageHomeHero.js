import React from "react"
import { graphql } from "gatsby"
import EHomeHero from "../elements/Ehome-hero"

const PageHomeHero = ({slice}) => {
  if (!slice.primary.hero.document.data) return null
  return <>{EHomeHero({ data: slice })}</>
}
export default PageHomeHero
export const query = graphql`
  fragment PageHomeHeroSlice on PrismicPageDataBodyHeroSection{
    slice_type
    primary {
      hero {
        document {
          ... on PrismicHomeHero {
            id
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
    }
  }
`