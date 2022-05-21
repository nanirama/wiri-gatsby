import * as React from "react"
import { graphql } from "gatsby"
//import { SliceZone } from "@prismicio/react"

import Seo from "../components/seo"
// import Layout from "../components/layout"
// import Heading from "../components/common/heading"
// import { Wrapper } from "../components/styled/lib"

// import { components } from "../slices"

const PageTemplate = ({ data }) => {
  

  if (!data) return null

  const pageContent = data.prismicPage
  const page = pageContent.data || {}
  
  return (
    <h2>Pages</h2>
    // <Layout activeDocMeta={pageContent}>
    //   <Wrapper className="container">
    //       <Heading
    //         title={pageContent.data.title.text}
    //         align="left"
    //       />
    //   </Wrapper>
    //   <Seo title="Home" />
    //   <SliceZone
    //     slices={page.body}
    //     components={components}
    //     context={pageContent}
    //     defaultComponent={() => null}
    //   />
    // </Layout>
  )
}

// export const query = graphql`
//   query pageQuery($id: String) {
//     prismicPage(id: { eq: $id }) {
//       lang
//       type
//       alternate_languages {
//         id
//         type
//         lang
//         uid
//       }
//       data {
//         title {
//           text
//         }
//         body {
//           ... on PrismicSliceType {
//             slice_type
//           }
//           ...PageDataBodyText
//           ...PageDataBodyContentSlice
//         }
//       }
//     }
//   }
// `

// export default PageTemplate
