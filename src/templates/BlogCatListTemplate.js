import * as React from "react"
import {  graphql } from "gatsby";
import Layout from "../components/Layout"

import BlogIndex from "../components/Blog";
import Pagination from '../components/Pagination';

const BlogCatListTemplate = (props) => {
    const { data, pageContext, path, location } = props

    const { allPrismicBlog, catList } = data
  
    const { basePath, humanPageNumber, categories } = pageContext;
  
    const blogs = allPrismicBlog.edges.map((blog) => blog.node);
  
    if (!blogs) return null;  
    if (!data) return null
    const activeDocMeta = data.prismicBlogCategory

    let Featured_Article = blogs.length > 1 && blogs[0]
    let AllBlogs = blogs.length > 1 ? blogs.shift() : blogs
    if(data.prismicBlogCategory.data.featured_article)
    {
      const Featured_Article = data.prismicBlogCategory.data.featured_article.document 
      if(Featured_Article && Featured_Article.id && data.prismicBlogCategory.data.featured_article){
        AllBlogs = Featured_Article && Featured_Article.id && data.prismicBlogCategory.data.featured_article && blogs.filter((item)=>{
          return item.id!==Featured_Article.id
        })
      }      
    }
   
  return (
    <Layout activeDocMeta={activeDocMeta}>
      <BlogIndex
        blogs={AllBlogs}
        basePath={basePath}
        isFirstPage={humanPageNumber === 1}
        path={path}
        lang={pageContext.lang}
        cat={pageContext.uid}
        featuredArticle = {Featured_Article}
        catList={catList}
        title={data.prismicBlogCategory.data.title.text ? data.prismicBlogCategory.data.title.text : 'Wiri Blog'}
      />
      <Pagination data={pageContext} />
    </Layout>
  )
}

export const data = graphql`
  query($skip: Int!, $limit: Int!, $lang: String!, $uid: String!) {
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
     prismicBlogCategory(uid: {eq: $uid}, lang: {eq: $lang}) {
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
            ... on PrismicBlogCategoryDataBody1MetaData {
              id
              slice_type
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
      filter: {lang: {eq: $lang}, data: {category1: {elemMatch: {blog_category: {uid: {eq: $uid}}}}}}
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
              firstImage: article_image {
                gatsbyImageData(layout: CONSTRAINED, width: 500, height: 550)
              }
            }
          }
        }
      }
    }
`;

export default BlogCatListTemplate
