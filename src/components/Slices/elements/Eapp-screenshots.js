import React from "react"
import { GatsbyImage, getImage} from "gatsby-plugin-image"
import { Grid, Row, Col } from 'react-flexbox-grid';

import { AppSection, Wrapper, TopText, Heading, AppImages, AppSlide } from "./styled"

const EAppScreenshots = ({ data }) => {
    const { title, subtitle, screenshots } = data.primary.app_screenshot.document.data
    return (
        <AppSection>
            <Grid fluid>
                <Wrapper>
                    <Grid>
                        <TopText>
                            <Heading>{title} <span className="txt-green">.</span></Heading>
                            <p className="subtitle">{subtitle}</p>
                        </TopText>
                        <AppImages>
                            <Row>
                                {screenshots && screenshots.map((item, index) => {
                                    return (
                                        <Col xs={12} lg={3} sm={6} key={index}>
                                            <AppSlide>
                                                    <GatsbyImage image={getImage(item.image)} alt={item.name} />
                                            </AppSlide>
                                        </Col>
                                    )
                                })}
                            </Row>
                        </AppImages>

                    </Grid>
                </Wrapper>
            </Grid>
        </AppSection>
    )
}

export default EAppScreenshots