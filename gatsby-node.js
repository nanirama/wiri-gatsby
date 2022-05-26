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
    Pages : allPrismicPage {
      nodes {
        id
        lang
        url
        uid
      }
    }
    Blog : allPrismicBloglistingpage {
      edges {
        node {
          id
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
    BlogCategories: allPrismicBlogCategory {
      edges {
        node {
          id
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
const DEFAULT_BLOG_POSTS_PER_PAGE = 8;

const basePath = DEFAULT_BLOG_BASE_PATH;
const blogs = data.Blogs.edges;

const postsPerPage = DEFAULT_BLOG_POSTS_PER_PAGE; 

data.Pages.nodes.forEach(page => {
  createPage({
    path: page.url,
    component: path.resolve(__dirname, "src/templates/page.js"),
    context: {
      lang: page.lang,
      id: page.id,
      url: page.url,
    },
  })
})
data.Blog.edges.map(({node})=>{
  const blogWithLang = blogs.filter((b)=>{
    return b.node.lang===node.lang
  })
  const pathPrefix = node.lang === prismicConfig.defaultLanguage ? `${basePath}` : `${node.lang.slice(0, 2)}/${basePath}`
  paginate({
    createPage,
    items: blogWithLang,
    itemsPerPage: postsPerPage,
    pathPrefix: pathPrefix,
    component: path.resolve(__dirname, "src/templates/BlogListTemplate.js"),
    context: {
      id:node.id,
      basePath,
      paginationPath: pathPrefix,
      lang: node.lang
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

data.BlogCategories.edges.forEach(({ node }) => { 
  let blogsWithCat = blogs.filter((blog)=>{
    return blog.node.data.category1 && blog.node.data.category1.find((cat)=>{
      return cat.blog_category &&  cat.blog_category.document && cat.blog_category.document.uid === node.uid && cat.blog_category.document.lang===node.lang
    })
  }) 
  
  if(blogsWithCat.length>0){
    console.log('cat lang',node.lang)
    console.log('cat node.uid',node.uid)
    console.log('cat blogs', blogsWithCat.length)
    const categoryPath =  node.lang === prismicConfig.defaultLanguage ? `${basePath}/${node.uid}` : `/${node.lang.slice(0, 2)}/${basePath}/${node.uid}`
    paginate({
      createPage,
      items: blogsWithCat,
      itemsPerPage: postsPerPage,
      pathPrefix: categoryPath,
      component: path.resolve(__dirname, "src/templates/BlogCatListTemplate.js"),
      context: {
        uid: node.uid,
        basePath,
        paginationPath: categoryPath,
        lang: node.lang
      },
    });
  }
  
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
