const prismicConfig = require("../../prismic-configuration")

exports.handleLangContent = (nodes, lang) => {

  if(!lang) lang = prismicConfig.defaultLanguage
  
  let omitNull = obj => {
    Object.keys(obj)
      .filter(k => obj[k] === null || obj[k].gatsbyImageData === null)
      .forEach(k => delete obj[k])
    return obj
  }

  let langContent = nodes.filter(function (node) {
    return node.lang === lang
  })

  const defaultLangContent = nodes.filter(function (node) {
    return node.lang === prismicConfig.defaultLanguage
  })

  console.log("handleLangContent", defaultLangContent, nodes)
  
  if (lang !== prismicConfig.defaultLanguage) {

    if(langContent.length===0) {
      return defaultLangContent[0].data
    } else {
      const mergedData = {
        ...defaultLangContent[0].data,
        ...omitNull(langContent[0].data),
      }

      return mergedData
    }
    
  } else {
    return defaultLangContent[0].data
  }
}
