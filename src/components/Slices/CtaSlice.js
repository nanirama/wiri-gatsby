import * as React from "react"
import {  Row, Col } from 'react-flexbox-grid';
import { Link, graphql } from "gatsby"
import { PrismicRichText } from "@prismicio/react"

import { Bloggroup } from "../Slices/styled";


const CTASlice = ({ data }) => {
    return (
        <Bloggroup><Row>
            <Col lg={12} md={12} sm={12}>
                {data && data.cta_block_heading && <h2>{data.cta_block_heading.text}</h2>}
                {data && data.cta_block_content && <p><span>{data.cta_block_content}</span></p>}
                {data && data.cta_button_text && <Link to="/">{data.cta_button_text}</Link>}
            </Col>
        </Row>
        </Bloggroup>
    )
}


export default CTASlice

export const query = graphql`
  fragment BlogPostDataCta on PrismicBlogDataBodyCtaBlock {
    slice_type
    primary {
        cta_block_heading {
              html
              text
            }
            cta_block_content
            cta_button_text
            cta_button_link
    }
  }
`