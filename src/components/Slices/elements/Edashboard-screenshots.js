import React, { useState, useEffect } from "react"
import Slider from "react-slick"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Grid, Row, Col } from 'react-flexbox-grid';

import { DashboardSection, Heading, RuleSlide } from "./styled";

const EDashboardScreenshots = ({ data }) => {

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  useEffect(() => {

    setNav1(slider1);
    setNav2(slider2);

  });


  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    swipeToSlide: true,
    asNavFor: '.slider-nav',
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  const settingsThumbs = {
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    infinite: false,
    dots: false,
    arrows: true,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: '10px',
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 680,
        settings: {
          centerMode: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };



  const { title, subtitle, screenshots } = data.primary.dashboard_screenshot.document.data

  return (
    <DashboardSection>
      <Grid>
        <Heading>{title}<span className="txt-green">.</span></Heading>
        <p className="subtitle">{subtitle}</p>
        <div className="slider-wrapper">
          <Slider className="dashboard-slider"
            {...settingsMain}
            asNavFor={nav2}
            ref={slider => (setSlider1(slider))}>

            {screenshots && screenshots.map((item, index) => {
              return (
                <div key={index}>
                  <GatsbyImage image={getImage(item.screenshot)} />
                </div>
              )
            })}
          </Slider>
          <div className="thumbnail-slider-wrap">
            <Slider
              {...settingsThumbs}
              asNavFor={nav1}
              ref={slider => (setSlider2(slider))}>
              {screenshots && screenshots.map((item, index) => {
                return (
                  <RuleSlide className="slick-slid" key={index + 1}>
                    <GatsbyImage image={getImage(item.icon)} />
                    <label className="slick-slide-label">{item.label}</label>
                  </RuleSlide>
                )
              })}
            </Slider>
          </div>
        </div>
      </Grid>
    </DashboardSection>
  )
}
export default EDashboardScreenshots