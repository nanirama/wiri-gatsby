import * as React from "react"
import { Row, Col } from 'react-flexbox-grid';
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


import { Blogimg } from "../Slices/styled"

const ImgSlice = ({ data }) => {
    return (    
      <Row center="xs">
        <Col lg={10} md={12} sm={12}>
          {data && data.image_heading && <h3>{data.image_heading.text}</h3>}
          {data && data.block_image && (
            <Blogimg>
              <GatsbyImage image={getImage(data.block_image)} />
            </Blogimg>     
          )}               
        </Col>
      </Row>
    )
  }
  
  
  export default ImgSlice


  export const query = graphql`
  fragment BlogPostDataImage on PrismicBlogDataBodyImageBlock {
    slice_type
      primary {
            image_heading {
              text
              richText
              raw
              html
            }
            block_image {
              gatsbyImageData(layout: FULL_WIDTH)
            }
      }
  }
`