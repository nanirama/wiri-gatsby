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

    default:
      return "/"
  }
}
