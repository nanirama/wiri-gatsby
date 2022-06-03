import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { handleLangContent } from "../../utils/handleLangContent"
import { EFaq } from "../elements/faq"

export const Faq = data => {
  const { allPrismicFaqs } = useStaticQuery(graphql`
    query {
      allPrismicFaqs {
        nodes {
          lang
          data {
            title
            image {
              gatsbyImageData
            }
            questions {
              question
              answer
            }
          }
        }
      }
    }
  `)

  const faqData = handleLangContent(
    allPrismicFaqs.nodes,
    data.activeDocMeta.lang
  )

  //const ComponentToRender = require("../elements/faq").default

  //return <ComponentToRender data={faqData} />

  return <>{EFaq({ data: faqData })}</>
}

export default Faq
