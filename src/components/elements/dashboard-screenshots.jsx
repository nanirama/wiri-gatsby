import React, { useRef } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Slider from "react-slick"
import Heading from "../common/heading"
import { Wrapper } from "../styled/lib"
import {
  SlickArrows,
  RuleSlide,
  RuleItem,
  RuleList,
} from "../styled/dashboard-screenshots"
import { LeftArrow, RightArrow } from "../../utils/imgImport"
import SVG from "react-inlinesvg"

export const EDashboardScreenshots = props => {
  
  const screenshots = props.data.screenshots

  const slider = useRef()
  const next = () => {
    slider.current.slickNext()
  }
  const previous = () => {
    slider.current.slickPrev()
  }

  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    appendDots: dots => (
      <SlickArrows>
        <button onClick={previous}>
          <LeftArrow />
        </button>
        <RuleList>{dots}</RuleList>
        <button onClick={next}>
          <RightArrow />
        </button>
      </SlickArrows>
    ),
    customPaging: i => (
      <RuleItem>
        <SVG
          className="me-1"
          src={screenshots[i].icon.url}
          title="rule icon"
          height={42}
          width={42}
        />
        <p>{screenshots[i].label}</p>
      </RuleItem>
    ),
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
    ],
  }

  return (
    <Wrapper className="container">
      <Heading
        title={props.data.title}
        subtitle={props.data.subtitle}
        align="center"
      />
      <Slider
        className="rule-slider"
        ref={c => (slider.current = c)}
        {...settings}
      >
        {screenshots.map((item, idx) => (
          <div className="d-flex justify-content-center" key={idx}>
            <RuleSlide>
              <GatsbyImage image={getImage(item.screenshot)} alt={item.label} />
            </RuleSlide>
          </div>
        ))}
      </Slider>
    </Wrapper>
  )
}
export default EDashboardScreenshots
