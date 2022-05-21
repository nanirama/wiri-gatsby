import * as React from "react"
import { Row, Col } from 'react-flexbox-grid';
import { graphql } from "gatsby"
import { PrismicRichText } from "@prismicio/react"

import {Bloglist} from "../Slices/styled"

const TextSlice2 = ({ slice }) => {
    return (
        <Row>
        <Col lg={12} md={12} sm={12}>
          <Bloglist>
            <ol>
              <li>Lorem ipsum dolor sit amet, consectetur</li>
              <li>Aenean id sem ut eros ullamcorper dapibus</li>
              <li>Morbi lectus orci, vehicula sit amet odio</li>
              <li>pharetra aliquet tellus. Nam quam arcu,</li>


              <li>Lorem ipsum dolor sit amet, consectetur</li>
              <li>Aenean id sem ut eros ullamcorper dapibus</li>
              <li>Morbi lectus orci, vehicula sit amet odio</li>
              <li>pharetra aliquet tellus. Nam quam arcu,</li>
            </ol>
          </Bloglist>
        </Col>
      </Row>
    )
  }

  export default TextSlice2
