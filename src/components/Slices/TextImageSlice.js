import * as React from "react"
import { Row, Col } from 'react-flexbox-grid';
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { PrismicRichText } from "@prismicio/react"

import { Imggroup, Blogimg1, Blogitem } from "../Slices/styled"

const TextImageSlice = ({ data }) => {
    console.log('textImage slice data', data)
    return (
        <Row>
            <Col lg={12} md={12} sm={12}>
                <Imggroup>
                    <Blogimg1>
                        <StaticImage src="../../assets/images/img6.png" alt="" />
                    </Blogimg1>
                    <Blogitem>
                        {data && data.content_text.richText && (
                            <PrismicRichText
                                field={data.content_text.richText}
                            />
                        )}
                    </Blogitem>
                </Imggroup>
            </Col>
        </Row>
    )
}
export default TextImageSlice

export const query = graphql`
  fragment BlogPostDataTextImage on PrismicBlogDataBodyImageContentBlock {
    slice_type
    primary {
        image_align
        content_text {
            richText
        }
        content_image {
            gatsbyImageData(layout: FULL_WIDTH)
        }
    }
  }
`