import React, { useRef } from "react"
import Slider from "react-slick"
import { StaticImage } from "gatsby-plugin-image"
import { Grid, Row, Col } from 'react-flexbox-grid';
import { LeftArrow, RightArrow } from "../../../utils/imgImport";
import SVG from "react-inlinesvg";

import { DashboardSection, Heading, SlickArrows, RuleSlide, RuleList, RuleItem } from "./styled";
import Conversation from "../../../assets/images/conversation.svg";

const DashboardScreenshots = () => {
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
        <SVG src={Conversation} 
        title="rule icon"
        height={42}
        width={42} />
        <p>Conversations</p>
      </RuleItem>
    ),
    responsive: [
      {
        breakpoint: 1130,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },     
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 4,
        },
      },
      
    ],
  }

  return (
    <DashboardSection>
      <Grid>
        <Heading>Rule it all <span className="txt-green">.</span></Heading>
        <p className="subtitle">Wiri’s automated functionality makes it easy to engage with clients that land on your website while driving them to place table reservations and answering their questions.</p>

        <Slider
          className="rule-slider"
          ref={c => (slider.current = c)}
          {...settings}
        >
          <RuleSlide>
            <StaticImage src="../../../assets/images/rule1.png" alt="" />
          </RuleSlide>
          <RuleSlide>
            <StaticImage src="../../../assets/images/rule1.png" alt="" />
          </RuleSlide>
          <RuleSlide>
            <StaticImage src="../../../assets/images/rule1.png" alt="" />
          </RuleSlide>
          <RuleSlide>
            <StaticImage src="../../../assets/images/rule1.png" alt="" />
          </RuleSlide>
        </Slider>
      </Grid>
    </DashboardSection>
  )
}
export default DashboardScreenshots
