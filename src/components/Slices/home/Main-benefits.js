import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { WowClients, Inner, Heading, Benfit, Icon, Content } from "./styled"
import { Grid, Row, Col } from 'react-flexbox-grid';

const MainBenefits = () => {

    return (
        <WowClients>
            <Grid>
                <Row middle="xs">
                    <Col xs={12} lg={6} first="lg" last="xs">
                        <StaticImage src="../../../assets/images/wow-clients.png" alt="" />
                    </Col>
                    <Col xs={12} lg={6}>
                        <Inner>
                            <Heading>Wow your clients<span className="txt-green">.</span></Heading>
                            <p className="subtitle">Provide an overview of this product's secondary benefits.</p>
                            <Benfit>
                                <Icon>
                                    <StaticImage src="../../../assets/images/sale.svg" alt="" />
                                </Icon>
                                <div>
                                    <h3>Convert more sales</h3>
                                    <Content>Lorem ipsum dolor sit consectetur adipiscing sit amet dui sed velit fringilla tincidunt.</Content>
                                </div>
                            </Benfit>
                            <Benfit>
                                <Icon>
                                    <StaticImage src="../../../assets/images/satisfaction.svg" alt="" />
                                </Icon>
                                <div>
                                    <h3>Increase satisfaction</h3>
                                    <Content>Lorem ipsum dolor sit consectetur adipiscing sit amet dui sed velit fringilla tincidunt.</Content>
                                </div>
                            </Benfit>
                            <Benfit>
                                <Icon>
                                    <StaticImage src="../../../assets/images/audience.svg" alt="" />
                                </Icon>
                                <div>
                                    <h3>Build audience</h3>
                                    <Content>Lorem ipsum dolor sit consectetur adipiscing sit amet dui sed velit fringilla tincidunt.</Content>
                                </div>
                            </Benfit>
                        </Inner>
                    </Col>
                </Row>
            </Grid>
        </WowClients>
    )
}
export default MainBenefits
