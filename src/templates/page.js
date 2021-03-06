import * as React from "react"
import { graphql } from "gatsby"
import { SliceZone } from "@prismicio/react"

import Layout from "../components/Layout"
import Heading from "../components/common/heading"
import { Wrapper } from "../components/styled/lib"

import { components } from "../components/Slices/page"

const PageTemplate = ({ data }) => {
  
  if (!data) return null

  const pageContent = data.prismicPage
  const page = pageContent.data || {}

  
  return (
    <Layout activeDocMeta={pageContent}>
      <Wrapper className="container">
          <Heading
            title={pageContent.data.title.text}
            align="left"
          />
      </Wrapper>
      <SliceZone
        slices={page.body}
        components={components}
        context={pageContent}
        defaultComponent={() => null}
      />
    </Layout>
  )
}

export const query = graphql`
  query pageQuery($id: String) {
    prismicPage(id: { eq: $id }) {
      lang
      type
      alternate_languages {
        id
        type
        lang
        uid
      }
      data {
        body1 {
          ... on PrismicPageDataBody1MetaData {
            id
            primary {
              meta_title
              meta_description
              seo_meta_image {
                fixed(width: 1200) {
                  src
                }
              }
            }
          }
        }
        title {
          text
        }
        body {
          ... on PrismicSliceType {
            slice_type
          }
          ...PageHomeHeroSlice
          ...PageAppScreenshotsSlice
          ...PageWowClientsSlice
          ...PageWebsiteWidgetsSlice
          ...PageCtaSlice
          ...PageDashboardScreenshotsSlice
          ...PagePricingTableSlice
          ...PageFaqsSlice
          ...PageDataBodyText
        }
      }
    }
  }
`

export default PageTemplate
