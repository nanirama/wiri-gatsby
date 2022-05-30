import React, { useState, useEffect } from "react"
import { Grid, Row, Col } from 'react-flexbox-grid';
import SVG from "react-inlinesvg"
import { useStaticQuery, graphql } from "gatsby"
import { PricingSection, TopText, Heading, Plan, Button, Tag, PricingSlider, PricingSlide, Header, Body, Footer } from "./styled"

import Check1 from "../../../assets/images/check1.svg"
import Check2 from "../../../assets/images/check2.svg"

const EPricingTable = ({ data }) => {
    const { PricingBack1, PricingBack2 } = useStaticQuery(graphql`
        query {
            PricingBack1: file(relativePath: {eq: "pricing-back1.png"}) {
                childImageSharp {
                    fixed(width: 351, height: 320) {
                        srcWebp
                    }
                }
            }
            PricingBack2: file(relativePath: {eq: "pricing-back2.png"}) {
                childImageSharp {
                    fixed(width: 144, height: 140) {
                        srcWebp
                    }
                }
            }
        }
  `)
    const { default_monthly,
        per_year_label,
        per_month_label,
        save_label,
        subtitle,
        title,
        year_label,
        month_label,
        body } = data.primary.ptable.document.data
    const [plan, setPlan] = useState(
        default_monthly ? "monthly" : ""
      )
      useEffect(() => {
        
      }, [plan]);
    return (
        <Grid fluid>
            <PricingSection PricingBack1={PricingBack1.childImageSharp.fixed.srcWebp}>
                <Grid>
                    <TopText>
                        <Heading>{title.text} <span className="txt-green">.</span></Heading>
                        <p className="subtitle">{subtitle.text}</p>
                    </TopText>
                    <Plan>
                        <Button
                            onClick={() => setPlan("monthly")}
                            active={plan === "monthly"}
                            className={plan === "monthly" && 'active'}>{month_label}</Button>
                        <Button
                            onClick={() => setPlan("yearly")}
                            active={plan === "yearly"}
                            className={plan === "yearly" && 'active'}
                        >{year_label}</Button>
                        <Tag>{save_label.text}</Tag>
                    </Plan>
                    <PricingSlider PricingBack2={PricingBack2.childImageSharp.fixed.srcWebp}>
                    <Row>
                        {body && body.map((pricing,index)=>{
                            const {button_label,
                                featured,
                                label,
                                order,
                                per_month,
                                per_year} = pricing.primary
                            return(
                                <Col xs={12} lg={4} key={index}>
                            <PricingSlide className={index==1 && 'green'}>
                                <Header>
                                    <p className="price">
                                        ${plan === 'monthly' ? per_month : per_year}
                                        <span className="per-month">
                                            /{plan === 'monthly' ? per_month_label : per_year_label}
                                        </span>
                                    </p>
                                    <p className="type">{label}</p>
                                </Header>
                                <hr />
                                <Body>
                                    <ul>
                                    {pricing.items?.map((feature, idx) => {
                                        let Icon = feature.included ? Check2 : Check1
                                        return (
                                        <li className="d-flex align-items-center" key={idx}>
                                            <SVG
                                            className="me-2"
                                            src={Icon}
                                            title="check icon"
                                            height={26}
                                            width={26}
                                            />
                                            <p className="feature">{feature.feature.text}</p>
                                        </li>
                                        )
                                    })}                                    
                                    </ul>
                                    <Footer>
                                        <button
                                            className="btn-green">
                                            {button_label}
                                        </button>
                                    </Footer>
                                </Body>
                            </PricingSlide>
                        </Col>
                            )
                        })}
                    </Row>
                    </PricingSlider>
                </Grid>
            </PricingSection>
        </Grid>
    )
}

export default EPricingTable