import React, { useRef } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Grid, Row, Col } from 'react-flexbox-grid';
import Slider from "react-slick"
import { SlickArrows } from "../../styled/lib"
import { LeftArrow, RightArrow } from "../../../utils/imgImport";
import { useStaticQuery, graphql } from "gatsby"

import { AppSection, Wrapper, TopText, Heading, AppImages, AppSlider, AppSlide } from "./styled"

const EAppScreenshots = ({ data }) => {
    const { AppBack } = useStaticQuery(graphql`
    query {
      AppBack: file(relativePath: {eq: "app-back.png"}) {
        childImageSharp {
          fluid {
            srcWebp
          }
        }
      }
    }
  `)
    const { title, subtitle, screenshots } = data.primary.app_screenshot.document.data

    const slider = useRef()

    const next = () => {
        slider.current.slickNext()
    }
    const previous = () => {
        slider.current.slickPrev()
    }
    const settings = {
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        centerMode: true,
        responsive: [
            {
                breakpoint: 992.98,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },          
        ],
    }

    return (
        <AppSection>
            <Grid fluid>
                <Wrapper AppBack={AppBack.childImageSharp.fluid.srcWebp}>
                    <Grid>
                        <TopText>
                            <Heading>{title}<span className="txt-green">.</span></Heading>
                            <p className="subtitle">{subtitle}</p>
                        </TopText>
                        <AppSlider>
                            <Slider
                                className="app-slider"
                                ref={c => (slider.current = c)}
                                {...settings}
                            >
                                {screenshots && screenshots.map((item, index) => {
                                    return (
                                        <AppSlide>
                                            <GatsbyImage image={getImage(item.image)} alt={item.name} />
                                        </AppSlide>
                                    )
                                })}
                            </Slider>
                            <SlickArrows className="app-arrows">
                                <button onClick={previous}>
                                    <LeftArrow />
                                </button>
                                <button onClick={next}>
                                    <RightArrow />
                                </button>
                            </SlickArrows>
                        </AppSlider>
                    </Grid>
                </Wrapper>
            </Grid>
        </AppSection>
    )
}

export default EAppScreenshots