import React from "react"
import Layout from "../components/Layout"
import { SliceZone } from "@prismicio/react"
import { components } from "../components/Slices/home"



import { graphql } from "gatsby"

const HomePage = (props) => {  
  const { data } = props
  if (!data) return null  
  const pageContent = data.prismicHomepage
  const page = pageContent.data || {}

  console.log('pageContent',pageContent)

  return(
    <Layout activeDocMeta={pageContent}>
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
  query homepageQuery($id: String, $lang: String) {
    Blog : allPrismicBloglistingpage {
      edges {
        node {
          lang
          data {
            title {
              text
            }
          }
        }
      }
    }
    Blogs : allPrismicBlog {
      totalCount
      edges {
        node {
          id
          uid
          lang
          data {
            category1 {
              blog_category {
                id
                document {
                  ... on PrismicBlogCategory {
                    id
                    uid
                    lang
                    data {
                      title {
                        text
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    prismicHomepage(id: { eq: $id }, lang: { eq: $lang }) {
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
          ... on PrismicHomepageDataBody1MetaData {
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
        body {
          ... on PrismicSliceType {
            slice_type
          }
          ...HomeHeroSlice
          ...WowClientsSlice
          ...AppScreenshotsSlice
          ...WebsiteWidgetsSlice
          ...CtaSlice
          ...DashboardScreenshotsSlice
          ...PricingTableSlice
          ...FaqsSlice
        }
      }
    }
  }
`

export default HomePage
