const prismicConfig = require("../../prismic-configuration")

exports.linkResolver = doc => {
  //console.log("linkResolver", doc)

  //const defaultLanguage = "en-us"

  switch (doc.type) {
    case "homepage": {
      return doc.lang === prismicConfig.defaultLanguage
        ? "/"
        : `/${doc.lang.slice(0, 2)}`
    }

    case "page": {
      return doc.lang === prismicConfig.defaultLanguage
        ? `/${doc.uid}`
        : `/${doc.lang.slice(0, 2)}/${doc.uid}`
    }

    case "bloglistingpage": {
      return doc.lang === prismicConfig.defaultLanguage
      ? "/blog/"
      : `/${doc.lang.slice(0, 2)}/blog/`
    }
    case "blog_category": {
      return doc.lang === prismicConfig.defaultLanguage
        ? `/blog/${doc.uid}`
        : `/${doc.lang.slice(0, 2)}/blog/${doc.uid}`
    }

    default:
      return "/"
  }
}
