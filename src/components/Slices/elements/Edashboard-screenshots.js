import React, { useRef, useState, useEffect } from "react"
import Slider from "react-slick"
import { GatsbyImage, getImage} from "gatsby-plugin-image"
import { Grid, Row, Col } from 'react-flexbox-grid';
import { SlickArrows } from "../../styled/lib"
import { LeftArrow, RightArrow } from "../../../utils/imgImport";
import SVG from "react-inlinesvg";

import { DashboardSection, Heading,  RuleSlide, RuleSlides, RuleList, RuleItem } from "./styled";

const EDashboardScreenshots = ({data}) => {

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
        breakpoint:1023,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  const settingsThumbs = {
    slidesToShow: 4,
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
        breakpoint:1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },     
      {
        breakpoint:680,
        settings: {
          centerMode: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint:480,
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

  // const settings = {
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   dots: true,
    
  //   appendDots: dots => (
  //     <SlickArrows>
  //       <button onClick={previous}>
  //         <LeftArrow />
  //       </button>
  //       <RuleList>{dots}</RuleList>
  //       <button onClick={next}>
  //         <RightArrow />
  //       </button>
  //     </SlickArrows>
  //   ),

  //   responsive: [      
  //     {
  //       breakpoint: 479,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 2,
  //       },
  //     },
  //   ],

    
  //   customPaging: function(i) {
  //     return (
  //       <RuleItem>
  //         <SVG src={screenshots[i].icon.fixed.src} 
  //         title="rule icon"
  //         height={42}
  //         width={42} />
  //         <p>{screenshots[i].label}</p>
  //       </RuleItem>
  //     );
  //   }   
  // }

  return (

    <>
    {/* <DashboardSection>
      <Grid>
        <Heading>{title}<span className="txt-green">.</span></Heading>
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
    </DashboardSection> */}


<DashboardSection>
<Grid>
        <Heading>{title}<span className="txt-green">.</span></Heading>
        <p className="subtitle">{subtitle}</p>

<div className="slider-wrapper">

<Slider className="dashboard-slider"
    {...settingsMain}
    asNavFor={nav2}
    ref={slider => (setSlider1(slider))}>
      
          {screenshots && screenshots.map((item, index)=>{
            return(
              <div key={index}>
                <GatsbyImage image={getImage(item.screenshot)} />
              </div>
            )
          })}
        </Slider>

<div className="thumbnail-slider-wrap">
  {/* <Slider
    {...settingsThumbs}
    asNavFor={nav1}
    ref={slider => (setSlider2(slider))}>

    {slidesData.map((slide) =>

      <div className="slick-slide" key={slide.id}>
        <img className="slick-slide-image" src={`https://picsum.photos/800/400?img=${slide.id}`} />
      </div>

    )}

  </Slider> */}

<Slider
    {...settingsThumbs}
    asNavFor={nav1}
    ref={slider => (setSlider2(slider))}>

          {screenshots && screenshots.map((item, index)=>{
            return(
              // <RuleSlides key={index}>
              //   <GatsbyImage image={getImage(item.icon)} />
              //   <p>{item.label}</p>
                
              // </RuleSlides>

<RuleSlide className="slick-slid" key={index+1}>                
<GatsbyImage image={getImage(item.icon)} />
<label className="slick-slide-label">{item.label}</label>
</RuleSlide>

            )
          })}
        </Slider>
        {/* <SlickArrows className="dashboard-arrows">
               <button onClick={previous}>
                  <LeftArrow />
               </button>
               <button onClick={next}>
                  <RightArrow />
               </button>
            </SlickArrows> */}

</div>
</div>
</Grid>
</DashboardSection>

</>







  )
}
export default EDashboardScreenshots