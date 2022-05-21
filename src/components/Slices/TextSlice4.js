import * as React from "react"
import { Row, Col } from 'react-flexbox-grid';
import { graphql } from "gatsby"
import { PrismicRichText } from "@prismicio/react"


import { Bloglist2 } from "../Slices/styled"

const TextSlice4 = ({ slice }) => {
    return (


        <Row>
            <Col lg={12} md={12} sm={12}>
                <Bloglist2>
                    <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit ipsum vel ligula tempus condimentum. Nunc in efficitununc. Nulla facilisi. Quisque sit amet leo lorem. Aliquam Quisque nibh ex, semper sit amet ornare vel, porttitor non lorem. Nam et purus tortor. Aenean rutrum nec eros non sagittis. Integer quis magna vitae tortor.</p>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, Aenean id.</h3>
                    <p>rem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit ipsum vel ligula tempus condimentum. Nunc in efficitununc. Nulla facilisi. Quisque sit amet leo lorem. Aliquam Quisque nibh ex, semper sit amet ornare vel, porttitor non lorem. Nam et purus tortor. Aenean rutrum nec eros non sagittis. Integer quis magna vitae tortor.Mauris non ligula feugiat tellus bibendum volutpat sed vel turpis. Ut commodo leo sit amet diam dictum sagittis. Aliquam pellentesque nisl eu mi laoreet, et mattis eros luctus. </p>
                </Bloglist2>
            </Col>
        </Row>
    )
}


export default TextSlice4