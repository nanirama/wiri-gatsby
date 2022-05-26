import * as React from "react"
import {  graphql } from "gatsby";
import Layout from "../components/Layout"

import BlogIndex from "../components/Blog";
import Pagination from '../components/Pagination';

const BlogListTemplate = (props) => {

  const { data, pageContext, path } = props

  const { allPrismicBlog, catList } = data

  const { basePath, humanPageNumber } = pageContext;

  const blogs = allPrismicBlog.edges.map((blog) => blog.node);

  



  if (!blogs) return null;
  if (!data) return null
  const activeDocMeta = data.prismicBloglistingpage
  let Featured_Article = blogs[0]
  let AllBlogs = blogs.shift()
  if(data.prismicBloglistingpage.data.featured_article)
  {
    const Featured_Article = data.prismicBloglistingpage.data.featured_article.document
    AllBlogs = data.prismicBloglistingpage.data.featured_article && blogs.filter((item)=>{
      return item.id!==Featured_Article.id
    })
  }

  return (
    <Layout activeDocMeta={activeDocMeta}>
      <BlogIndex
        blogs={AllBlogs}
        basePath={basePath}
        isFirstPage={humanPageNumber === 1}
        path={path}
        lang={pageContext.lang}
        catList={catList}
        featuredArticle = {Featured_Article}
        title={data.prismicBloglistingpage.data.title.text ? data.prismicBloglistingpage.data.title.text : 'Wiri Blog'}
      />
      <Pagination data={pageContext} />
    </Layout>
  )
}

export const data = graphql`
  query($skip: Int!, $limit: Int!, $lang: String!) {
    catList : allPrismicBlogCategory(filter: {lang: {eq: $lang}}) {
      edges {
        node {
          lang
          uid
          data {
            title {
              text
            }
          }
        }
      }
    }
    prismicBloglistingpage( lang: { eq: $lang }) {
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
          }
          featured_article {
            document {
              ...BlogFeaturedBlog
            }
          }
          body1 {
          ... on PrismicBloglistingpageDataBody1MetaData{
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
              excerpt {
                text
                html
              }
              article_image {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
`;

export default BlogListTemplate
