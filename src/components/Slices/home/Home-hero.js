import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { HeroSection, HeroHeading, HeroImage } from "./styled"
import { Grid, Row, Col } from 'react-flexbox-grid';

const HomeHero = () => {

  return (
      <Grid fluid>
        <HeroSection>
          <Grid>
            <Row middle="xs">
              <Col xs={12} lg={6}>
                <HeroHeading>
                  <span className="blue-line">Meet your new business app</span>
                  <span className="txt-green">.</span>
                </HeroHeading>
                <p className="subtitle">Various, fully customizable, simple marketing tools that will help you convert your visitors into repeating clients</p>
                <button className="btn-blue">Try for Free</button>
                <p className="bottom-text">No credit card required</p>
              </Col>
              <Col xs={12} lg={6}>
                <HeroImage>
                  <StaticImage src="../../../assets/images/hero-img.png" alt="" className="hero-img" />
                  <StaticImage src="../../../assets/images/rating.png" alt="" className="float review-img" />
                  <StaticImage src="../../../assets/images/menu.png" alt="" className="float menu-img" />
                  <StaticImage src="../../../assets/images/deals.png" alt="" className="float deals-img" />
                  <StaticImage src="../../../assets/images/question.png" alt="" className="float question-img" />
                  <StaticImage src="../../../assets/images/qr-code.png" alt="" className="qr-img" />
                </HeroImage>
              </Col>
            </Row>
          </Grid>
        </HeroSection>
      </Grid>
  )
}
export default HomeHero
