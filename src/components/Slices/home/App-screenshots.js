import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Grid, Row, Col } from 'react-flexbox-grid';

import { AppSection, Wrapper, TopText, Heading, AppImages, AppSlide } from "./styled"

const AppScreenshots = () => {

    return (
        <AppSection>
            <Grid fluid>
                <Wrapper>
                    <Grid>
                        <TopText>
                            <Heading>One app, so many possibilities <span className="txt-green">.</span></Heading>
                            <p className="subtitle">Fully customize your app according to your brand and needs</p>
                        </TopText>
                        <AppImages>
                            <Row>
                                <Col xs={12} lg={3} sm={6}>
                                    <AppSlide>
                                        <StaticImage src="../../../assets/images/app1.png" alt="" />
                                    </AppSlide>
                                </Col>
                                <Col xs={12} lg={3} sm={6}>
                                    <AppSlide>
                                        <StaticImage src="../../../assets/images/app2.png" alt="" />
                                    </AppSlide>
                                </Col>
                                <Col xs={12} lg={3} sm={6}>
                                    <AppSlide>
                                        <StaticImage src="../../../assets/images/app3.png" alt="" />
                                    </AppSlide>
                                </Col>
                                <Col xs={12} lg={3} sm={6}>
                                    <AppSlide>
                                        <StaticImage src="../../../assets/images/app4.png" alt="" />
                                    </AppSlide>
                                </Col>
                            </Row>
                        </AppImages>

                    </Grid>
                </Wrapper>
            </Grid>
        </AppSection>
    )
}
export default AppScreenshots
