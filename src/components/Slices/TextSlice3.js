import * as React from "react"
import { Row, Col } from 'react-flexbox-grid';
import { graphql } from "gatsby"
import { PrismicRichText } from "@prismicio/react"


import { Bloglist1 } from "../Slices/styled"

const TextSlice3 = ({ slice }) => {
    return (


        <Row>
            <Col lg={12} md={12} sm={12}>
                <Bloglist1>
                    <h2>Lorem ipsum dolor sit amet.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit ipsum vel ligula tempus condimentum. Nunc in efficitununc. Nulla facilisi. Quisque sit amet leo lorem. Aliquam Quisque nibh ex, semper sit amet ornare vel, porttitor non lorem. Nam et purus tortor. Aenean rutrum nec eros non sagittis. Integer quis magna vitae tortor.</p>
                </Bloglist1>
            </Col>
        </Row>
    )
}


export default TextSlice3