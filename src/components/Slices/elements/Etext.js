import * as React from "react"
import { PrismicRichText } from "@prismicio/react"
import { Row, Col } from 'react-flexbox-grid';
import { Bloglist } from "../styled";
export const EText = ({ data }) => {
  return (
    <Row>
    <Col lg={12} md={12} sm={12}>
      <Bloglist>
      {data && data.text_content &&
      <PrismicRichText
          field={data.primary.richtext.richText}
      />} 
      </Bloglist>      
    </Col>
  </Row>
  )
}