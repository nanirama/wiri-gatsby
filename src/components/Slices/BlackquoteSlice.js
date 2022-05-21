import * as React from "react"
import {  Row, Col } from 'react-flexbox-grid';
import { graphql } from "gatsby"
import { PrismicRichText } from "@prismicio/react"

import { Blackquote, Quotesvg, Quotecnt } from "../Slices/styled"

const BlackQuoteSlice = ({ data }) => {
    console.log('BlackQuoteSlice', data)
    return (
        <Row>
            <Col lg={12} md={12} sm={12}>
                <Blackquote>
                    <Quotesvg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" /></svg></Quotesvg>
                    <Quotecnt><p>“{data && data.quote_text && data.quote_text.text}”</p></Quotecnt>

                </Blackquote>
            </Col>
        </Row>
    )
}


export default BlackQuoteSlice

export const query = graphql`
fragment BlogPostDataBlockquote on PrismicBlogDataBodyBlockquote {
  slice_type
  primary {
    quote_text {
        text
        raw
        html
    }
 }
}
`