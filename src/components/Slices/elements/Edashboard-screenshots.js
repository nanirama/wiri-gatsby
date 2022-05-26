import React, { useRef } from "react"
import Slider from "react-slick"
import { GatsbyImage, getImage} from "gatsby-plugin-image"
import { Grid, Row, Col } from 'react-flexbox-grid';
import { LeftArrow, RightArrow } from "../../../utils/imgImport";
import SVG from "react-inlinesvg";

import { DashboardSection, Heading, SlickArrows, RuleSlide, RuleList, RuleItem } from "./styled";

const EDashboardScreenshots = ({data}) => {
  const { title, subtitle, screenshots } = data.primary.dashboard_screenshot.document.data
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

    responsive: [      
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
    ],


    customPaging: function(i) {
      return (
        <RuleItem>
          <SVG src={screenshots[i].icon.fixed.src} 
          title="rule icon"
          height={42}
          width={42} />
          <p>{screenshots[i].label}</p>
        </RuleItem>
      );
    }   
  }

  return (
    <DashboardSection>
      <Grid>
        <Heading>{title} <span className="txt-green">.</span></Heading>
        <p className="subtitle">{subtitle}</p>

        <Slider
          className="rule-slider"
          ref={c => (slider.current = c)}
          {...settings}
        >
          {screenshots && screenshots.map((item, index)=>{
            return(
              <RuleSlide key={index}>
                <GatsbyImage image={getImage(item.screenshot)} />
              </RuleSlide>
            )
          })}
        </Slider>
      </Grid>
    </DashboardSection>
  )
}
export default EDashboardScreenshots