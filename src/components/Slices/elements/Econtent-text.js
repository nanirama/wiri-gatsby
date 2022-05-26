import * as React from "react"
import { graphql } from "gatsby"
import { PrismicRichText } from "@prismicio/react"
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Bloglist } from "../styled";
export const EContentText = ({ data }) => {
    return (
        <Grid>
            <Row>
                <Col lg={12} md={12} sm={12}>
                    <Bloglist>
                        <PrismicRichText
                            field={data.primary.richtext.richText}
                        />
                    </Bloglist>
                </Col>
            </Row>
        </Grid>
    )
}