import React from "react"
import Layout from "../components/Layout"




import HomeHero from "../components/Slices/home/Home-hero"
import MainBenefits from "../components/Slices/home/Main-benefits"
import AppScreenshots from "../components/Slices/home/App-screenshots"
import WebsiteWidget from "../components/Slices/home/Website-widget"
import CallToAction from "../components/Slices/home/Call-to-action"
import DashboardScreenshots from "../components/Slices/home/Dashboard-screenshots"
import PricingTable from "../components/Slices/home/Pricing-table"
import Faq from "../components/Slices/home/Faq"

import { graphql } from "gatsby"

const HomePage = (props) => {

  const { data } = props
  console.log('props', pageContext)
  if (!data) return null

  
if(data && data.prismicHomepage && data.prismicHomepage.pageContext)
{
  const pageContext = data.prismicHomepage
  return(
    <Layout activeDocMeta={pageContext}>
      <HomeHero />
      <MainBenefits/>
      <AppScreenshots/>
      <WebsiteWidget/>
      <CallToAction/>
      <DashboardScreenshots/>
      <PricingTable/>
      <Faq/>
    </Layout>
  )
}
else{
  return ''
}
 
}


export const query = graphql`
  query homepageQuery($id: String, $lang: String) {
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
      }
    }
  }
`

export default HomePage
