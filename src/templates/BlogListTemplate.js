import * as React from "react"
import {  graphql } from "gatsby";
import Layout from "../components/Layout"

import BlogIndex from "../components/Blog";
import Pagination from '../components/Pagination';

const BlogListTemplate = (props) => {

  const { data, pageContext, path, location } = props

  console.log('Page Url',pageContext)

  const {
    allPrismicBlog: { edges: blogsData },
  } = data;

  const { basePath, humanPageNumber, categories } = pageContext;

  const blogs = blogsData.map((blog) => blog.node);

  if (!blogs) return null;

  console.log("Page", props)

  if (!data) return null

  return (
    <Layout activeDocMeta={pageContext}>
      <BlogIndex
        blogs={blogs}
        basePath={basePath}
        isFirstPage={humanPageNumber === 1}
        path={path}
        lang={pageContext.lang}
      />
      <Pagination data={pageContext} />
    </Layout>
  )
}

export const data = graphql`
  query($skip: Int!, $limit: Int!, $lang: String!) {
    allPrismicBlog(
      sort: { fields: last_publication_date, order: DESC }
      skip: $skip
      limit: $limit
      filter: {lang: {eq: $lang}}
    ) {
      edges {
          node {
            id
            uid
            data {
              title {
                text
                html
              }
              excerpt {
                text
                html
              }
              article_image {
                gatsbyImageData(layout: CONSTRAINED, width: 550)
              }
            }
          }
        }
      }
    }
`;

export default BlogListTemplate
