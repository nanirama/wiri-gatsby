import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Grid, Row, Col } from 'react-flexbox-grid';
import SVG from "react-inlinesvg"

import { PricingSection, TopText, Heading, Plan, Button, Tag, PricingSlider, PricingSlide, Header, Body, Footer } from "./styled"

import Check1 from "../../../assets/images/check1.svg"
import Check2 from "../../../assets/images/check2.svg"

const PricingTable = () => {
    return (
        <Grid fluid>
            <PricingSection>
                <Grid>
                    <TopText>
                        <Heading>Simple Pricing <span className="txt-green">.</span></Heading>
                        <p className="subtitle">Choose the plan that's right for your growing team!</p>
                    </TopText>
                    <Plan>
                        <Button>Monthly</Button>
                        <Button>Yearly</Button>
                        <Tag>Save up to 30%!</Tag>
                    </Plan>
                    <PricingSlider>
                    <Row>
                        <Col xs={12} lg={4}>
                            <PricingSlide>
                                <Header>
                                    <p className="price">
                                        $59
                                        <span className="per-month">
                                            /Per Month
                                        </span>
                                    </p>
                                    <p className="type">Basic</p>
                                </Header>
                                <hr />
                                <Body>
                                    <ul>
                                        <li> <SVG src={Check1} /> <p className="feature">Upto 5 Users</p></li>
                                        <li> <SVG src={Check1} /> <p className="feature">Max 200 objects / month</p></li>
                                        <li> <SVG src={Check1} /> <p className="feature">Unlimited queries</p></li>
                                        <li> <SVG src={Check1} /> <p className="feature">Unlimited analytics</p></li>
                                    </ul>
                                    <Footer>
                                        <button
                                            className="btn-green">
                                            Get Started
                                        </button>
                                    </Footer>
                                </Body>
                            </PricingSlide>
                        </Col>
                        <Col xs={12} lg={4}>
                        <PricingSlide className="green">
                                <Header>
                                    <p className="price">
                                        $99
                                        <span className="per-month">
                                        /Per Month
                                        </span>
                                    </p>
                                    <p className="type">Optimum</p>
                                </Header>
                                <hr />
                                <Body>
                                    <ul>
                                        <li> <SVG src={Check2} /> <p className="feature">Upto 5 Users</p></li>
                                        <li> <SVG src={Check2} /> <p className="feature">Max 200 objects / month</p></li>
                                        <li> <SVG src={Check2} /> <p className="feature">Unlimited queries</p></li>
                                        <li> <SVG src={Check2} /> <p className="feature">Unlimited analytics</p></li>
                                    </ul>
                                    <Footer>
                                        <button
                                            className="btn-green">
                                            Get Started
                                        </button>
                                    </Footer>
                                </Body>
                            </PricingSlide>
                        </Col>
                        <Col xs={12} lg={4}>
                        <PricingSlide>
                                <Header>
                                    <p className="price">
                                        $149
                                        <span className="per-month">
                                            /Per Month
                                        </span>
                                    </p>
                                    <p className="type">Full</p>
                                </Header>
                                <hr />
                                <Body>
                                    <ul>
                                        <li> <SVG src={Check1} /> <p className="feature">Upto 5 Users</p></li>
                                        <li> <SVG src={Check1} /> <p className="feature">Max 200 objects / month</p></li>
                                        <li> <SVG src={Check1} /> <p className="feature">Unlimited queries</p></li>
                                        <li> <SVG src={Check1} /> <p className="feature">Unlimited analytics</p></li>
                                    </ul>
                                    <Footer>
                                        <button
                                            className="btn-green">
                                            Get Started
                                        </button>
                                    </Footer>
                                </Body>
                            </PricingSlide>
                        </Col>
                    </Row>
                    </PricingSlider>
                </Grid>
            </PricingSection>
        </Grid>
    )
}

export default PricingTable
