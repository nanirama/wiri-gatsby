import React, { useRef } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Slider from "react-slick"

import Heading from "../common/heading"
import { Wrapper, SlickArrows } from "../styled/lib"
import { Section, Inner, AppSlider, AppSlide } from "../styled/app-screenshots"
import { LeftArrow, RightArrow } from "../../utils/imgImport"

export const EAppScreenshots = props => {
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
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: true,
        },
      },
    ],
  }

  return (
    <Section className="position-relative">
      <Wrapper className="container">
        <Inner>
          <Heading
            title={props.data.title}
            subtitle={props.data.subtitle}
            align="center"
          />
        </Inner>
      </Wrapper>
      <AppSlider>
        <Slider
          className="app-slider"
          ref={c => (slider.current = c)}
          {...settings}
        >
          {props.data.screenshots.map((item, idx) => (
            <div className="d-flex justify-content-center" key={idx}>
              <AppSlide>
                <GatsbyImage image={getImage(item.image)} alt={item.name} />
                {/* <img className="w-100" src={item} alt={item.name} /> */}
              </AppSlide>
            </div>
          ))}
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
    </Section>
  )
}
export default EAppScreenshots
