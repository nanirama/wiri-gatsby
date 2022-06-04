import React from "react"
import { GatsbyImage, getImage} from "gatsby-plugin-image"
import { HeroSection, HeroHeading, HeroImage } from "./styled"
import { Grid, Row, Col } from 'react-flexbox-grid';
import { useStaticQuery, graphql } from "gatsby"

const EHomeHero = ({data})=>{
  const { Herobackground } = useStaticQuery(graphql`
    query {
      Herobackground: file(relativePath: {eq: "hero-back.png"}) {
        childImageSharp {
          fluid {
            srcWebp
          }
        }
      }
    }
  `)
    const { title, subtitle, button_label, under_button, hero_image, menu_image, promotion_image, rating_image, qr_image, question_image  } = data.primary.hero.document.data
  
    return (
        <Grid fluid>
          <HeroSection>
            <Grid>
              <Row middle="xs">
                <Col xs={12} lg={6} className="pr-6">
                  <HeroHeading>
                    <span className="blue-line">{title}</span>
                    <span className="txt-green">.</span>
                  </HeroHeading>
                  <p className="subtitle">{subtitle}</p>
                  <button className="btn-blue">{button_label}</button>
                  <p className="bottom-text">{under_button}</p>
                </Col>
                <Col xs={12} lg={6}>
                  <HeroImage Heroback={Herobackground.childImageSharp.fluid.srcWebp}>
                  <GatsbyImage
                      image={getImage(hero_image)}
                      alt="hero img"
                      className="hero-img"
                    />
                    <GatsbyImage
                      className="float review-img"
                      image={getImage(rating_image)}
                      alt="rating img"
                    />
                    <GatsbyImage
                      className="float menu-img"
                      image={getImage(menu_image)}
                      alt="menu img"
                    />
                    <GatsbyImage
                      className="float deals-img"
                      image={getImage(promotion_image)}
                      alt="promotion img"
                    />
                    <GatsbyImage
                      className="float question-img"
                      image={getImage(question_image)}
                      alt="question img"
                    />
                    <GatsbyImage
                      className="qr-img"
                      image={getImage(qr_image)}
                      alt="qr img"
                    />
                  </HeroImage>
                </Col>
              </Row>
            </Grid>
          </HeroSection>
        </Grid>
  )
}

export default EHomeHero