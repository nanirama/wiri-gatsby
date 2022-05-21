const path = require("path")
const { paginate } = require(`gatsby-awesome-pagination`);


const prismicConfig = {
  defaultLanguage: "en-us",
  langs: ["en-us", "es-es"],
}



exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
  query {
    Blogs : allPrismicBlog {
      edges {
        node {
          id
          uid   
          lang       
        }
      }
    }
    HomePages : allPrismicHomepage {
      edges {
        node {
          id
          lang
          uid
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
    }
  }
`)
const DEFAULT_BLOG_BASE_PATH = 'blog';
const DEFAULT_BLOG_POSTS_PER_PAGE = 6;

const basePath = DEFAULT_BLOG_BASE_PATH;
const blogs = data.Blogs.edges;

const postsPerPage = DEFAULT_BLOG_POSTS_PER_PAGE; 
console.log('lang list', prismicConfig.langs)
prismicConfig.langs.forEach((lang) => {   
  const pathPrefix = lang === prismicConfig.defaultLanguage ? `/${basePath}` : `/${lang.slice(0, 2)}/${basePath}`
  paginate({
    createPage,
    items: blogs,
    itemsPerPage: postsPerPage,
    pathPrefix: pathPrefix,
    component: path.resolve(__dirname, "src/templates/BlogListTemplate.js"),
    context: {
      basePath,
      paginationPath: pathPrefix,
      lang: lang
    },
  });
})

blogs.forEach(({ node }) => { 
  const pathPrefix = node.lang === prismicConfig.defaultLanguage ? `/${node.uid}` : `/${node.lang.slice(0, 2)}/${node.uid}`   
  createPage({
    path: pathPrefix,
    component: path.resolve(__dirname, "src/templates/BlogTemplate.js"),
    context: {
      lang: node.lang,
      id:node.id
    },
  })
})

data.HomePages.edges.forEach(({ node }) => {    
  createPage({
    path:
      node.lang === prismicConfig.defaultLanguage
          ? "/"
          : `/${node.lang.slice(0, 2)}/`,
    component: path.resolve(__dirname, "src/templates/homepage.js"),    
    context: {
      lang: node.lang,
      id: node.id
    },
  })
})

}
