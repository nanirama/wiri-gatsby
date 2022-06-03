
import React, { useState, useEffect, useRef } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Grid, Row, Col } from 'react-flexbox-grid';
import SVG from "react-inlinesvg"

import Slider from "react-slick"
import { SlickArrows } from "../../styled/lib"
import { LeftArrow, RightArrow } from "../../../utils/imgImport"
import { WidgetSection, Title, WidgetItem, WidgetImg, WidgetSlide, DesktopWidget, MobileWidget } from "./styled"
import { useStaticQuery, graphql } from "gatsby"

const EWebsiteWidget = ({data})=>{
  const { WidgetBack } = useStaticQuery(graphql`
    query {
      WidgetBack: file(relativePath: {eq: "widget-back.png"}) {
        childImageSharp {
          fluid {
            srcWebp
          }
        }
      }
    }
  `)
   const { title, widgets } = data.primary.website_widget.document.data
  const [centerImage, setCenterImage] = useState(widgets[0].screenshot)
  useEffect(() => {
    //console.log('initial Image', centerImage)
  }, [centerImage]);

  const [selected, setSelect] = useState(0)
  const slider = useRef()

  const next = () => {
    slider.current.slickNext()
  }
  const previous = () => {
    slider.current.slickPrev()
  }
  const nextClick = e => {
    setSelect(e)
  }
  const settings = {
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    centerMode: true,
    afterChange: nextClick,
    responsive: [
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
return (
    <WidgetSection>
      <Grid>
        <Title>
          <span className="blue-line">{title}</span><span className="txt-green">.</span>
        </Title>

        <DesktopWidget>
          <Row>
            <Col xs={12} md={4}>
              <Row end="lg">
                <Col xs={12} lg={12}>
                  <ul>
                    {widgets && widgets.map((widget, index) => {
                      if (index % 2 == 0) {
                        return (
                          <WidgetItem className="row-reverse" key={index}>
                            <div className="widget-img" onMouseEnter={e => setCenterImage(widget.screenshot)} onClick={e => setCenterImage(widget.screenshot)}>
                              <SVG src={widget.icon.fixed.src} />
                            </div>
                            <p className="widget-name" onMouseEnter={e => setCenterImage(widget.screenshot)} onClick={e => setCenterImage(widget.screenshot)}>{widget.label}</p>
                          </WidgetItem>
                        )
                      }
                    })}

                  </ul>
                </Col></Row>
            </Col>
            <Col xs={12} md={4}>
              <WidgetImg WidgetBack={WidgetBack.childImageSharp.fluid.srcWebp}>
                <GatsbyImage image={getImage(centerImage)} />
              </WidgetImg>
            </Col>
            <Col xs={12} md={4}>
              <ul>
                {widgets && widgets.map((widget, index) => {
                  if (index % 2 != 0) {
                    return (
                      <WidgetItem key={index}>
                        <div className="widget-img" onMouseEnter={e => setCenterImage(widget.screenshot)} onClick={e => setCenterImage(widget.screenshot)}><SVG src={widget.icon.fixed.src} /></div>
                        <p className="widget-name" first="xs" onMouseEnter={e => setCenterImage(widget.screenshot)} onClick={e => setCenterImage(widget.screenshot)}>{widget.label}</p>
                      </WidgetItem>
                    )
                  }
                })}
              </ul>
            </Col>
          </Row>
        </DesktopWidget>
        <MobileWidget>
          <Slider
            className="widget-slider"
            ref={c => (slider.current = c)}
            {...settings}
          >
            {widgets && widgets.map((widget, index) => {
              return (
                <>
                  <WidgetSlide>
                    <GatsbyImage image={getImage(widget.screenshot)} />
                  </WidgetSlide>
                  <WidgetItem key={index}>
                    <div className="widget-img">
                      <SVG src={widget.icon.fixed.src} />
                    </div>
                    <p className="widget-name">{widget.label}</p>
                  </WidgetItem>
                  </>
              )
            })}

          </Slider>
          <SlickArrows className="arrows">
            <button onClick={previous}>
              <LeftArrow />
            </button>
            <button onClick={next}>
              <RightArrow />
            </button>
          </SlickArrows>
          
        </MobileWidget>
      </Grid>
    </WidgetSection>
  )
}

export default EWebsiteWidget