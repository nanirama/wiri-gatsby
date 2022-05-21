
import React from "react"
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Moment from 'moment';


import { Blogwrapper, BlogButton, Button, Blogimg } from "../components/Slices/styled";
import { Grid, Row, Col } from 'react-flexbox-grid';


import Layout from "../components/Layout"
import TextSlice from "../components/Slices/TextSlice"
import ImgSlice from "../components/Slices/ImgSlice"
import BlackquoteSlice from "../components/Slices/BlackquoteSlice"
import TextImageSlice from "../components/Slices/TextImageSlice"
import CTASlice from "../components/Slices/CtaSlice"
import InterestArticles from "../components/Slices/InterestingArticles"

// import Heading from "../components/common/heading"
// import { Wrapper } from "../components/styled/lib"

// import { components } from "../slices"

const BlogTemplate = (props) => {
  const { data } = props
  console.log("Page props", data)

  if (!data) return null

  const pageContent = data.prismicBlog

  console.log('blogsiglepageContent', pageContent)
  //const page = pageContent.data || {}

  return (
    <Layout activeDocMeta={pageContent}>
      <Blogwrapper>
        <Grid>
          <Row>
            <Col lg={12} md={12} sm={12}>
              <h1>{pageContent.data.title.text}</h1>
              <h6>Published on {Moment(pageContent.data.publish_date).format('MMMM D, YYYY')}</h6>
              <Blogimg>
                <GatsbyImage image={getImage(pageContent.data.article_image)} alt={pageContent.data.title.text} />
              </Blogimg>
              <BlogButton><Button>product updates</Button></BlogButton>
            </Col>
          </Row>
          {pageContent.data.body.map((item, index) => {
            const { slice_type, primary, items } = item
            {
              console.log('Slice Types', slice_type)
              if (slice_type === 'text_block' && primary) {
                return <TextSlice data={primary} />
              }
              if (slice_type === 'image_block' && primary) {
                return <ImgSlice data={primary} />
              }
              if (slice_type === 'blockquote' && primary) {
                return <BlackquoteSlice data={primary} />
              }
              if (slice_type === 'cta_block' && primary) {
                return <CTASlice data={primary} />
              }
              if (slice_type === 'image_content_block' && primary) {
                return <TextImageSlice data={primary} />
              }
              if (slice_type === 'interesting_articles' && items) {
                return <InterestArticles data={items} lang={pageContent.lang} />
              }
            }

          })}
         </Grid>
      </Blogwrapper>
    </Layout>
  )
}

export const query = graphql`
  query BlogSingleQuery($id: String, $lang: String!) {
    prismicBlog(id: {eq: $id}, lang: {eq: $lang}) {
        lang
        type
        alternate_languages {
        id
        type
        lang
        uid
        }
        data {
          title {
            text
            html
          }
          article_image {
            gatsbyImageData(layout: FULL_WIDTH)
          }
          publish_date
          body {
            ...BlogPostDataText
            ...BlogPostDataImage
            ...BlogPostDataBlockquote
       
            ...BlogPostDataTextImage
            ...BlogPostDataIArticles
            ...BlogPostDataCta
          }
          body1 {
              ... on PrismicBlogDataBody1MetaData {
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

export default BlogTemplate
