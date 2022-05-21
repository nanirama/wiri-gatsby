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
                                        $9
                                        <span className="per-month">
                                            /month
                                        </span>
                                    </p>
                                    <p className="type">Basic</p>
                                </Header>
                                <hr />
                                <Body>
                                    <ul>
                                        <li> <SVG src={Check1} /> <p className="feature">1 User</p></li>
                                        <li> <SVG src={Check1} /> <p className="feature">Up to 5 bookings per day</p></li>
                                        <li> <SVG src={Check1} /> <p className="feature">30 days chat history</p></li>
                                        <li> <SVG src={Check1} /> <p className="feature">Up to 5 modules</p></li>
                                        <li> <SVG src={Check1} /> <p className="feature">Standard support</p></li>
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
                                        $19
                                        <span className="per-month">
                                            /month
                                        </span>
                                    </p>
                                    <p className="type">Enhanced</p>
                                </Header>
                                <hr />
                                <Body>
                                    <ul>
                                        <li> <SVG src={Check2} /> <p className="feature">3 User</p></li>
                                        <li> <SVG src={Check2} /> <p className="feature">Up to 20 bookings per day</p></li>
                                        <li> <SVG src={Check2} /> <p className="feature">1 year days chat history</p></li>
                                        <li> <SVG src={Check2} /> <p className="feature">All modules</p></li>
                                        <li> <SVG src={Check2} /> <p className="feature">Standard support</p></li>
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
                                        $39
                                        <span className="per-month">
                                            /month
                                        </span>
                                    </p>
                                    <p className="type">Unlimited</p>
                                </Header>
                                <hr />
                                <Body>
                                    <ul>
                                        <li> <SVG src={Check1} /> <p className="feature">Unlimited User</p></li>
                                        <li> <SVG src={Check1} /> <p className="feature">Unlimited bookings</p></li>
                                        <li> <SVG src={Check1} /> <p className="feature">Unlimited chat history</p></li>
                                        <li> <SVG src={Check1} /> <p className="feature">All modules</p></li>
                                        <li> <SVG src={Check1} /> <p className="feature">Priority support</p></li>
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
