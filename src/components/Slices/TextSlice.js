import * as React from "react"
import { Row, Col } from 'react-flexbox-grid';
import { graphql } from "gatsby"
import { PrismicRichText } from "@prismicio/react"

import { Bloglist } from "../Slices/styled";


const TextSlice = ({ data }) => {
  //console.log('slice text data', data);
  // const { text_content } = data
  // console.log('slice text data', text_content)
  return (
    <Row center="xs">
      <Col lg={10} md={12} sm={12}>
        <Bloglist>
        {data && data.text_content &&
        <PrismicRichText
            field={data.text_content.richText}
        />} 
        </Bloglist>      
      </Col>
    </Row>
  )
}

export default TextSlice

export const query = graphql`
  fragment BlogPostDataText on PrismicBlogDataBodyTextBlock {
    slice_type
    primary {
      text_content {
        richText
      }
    }
  }
`