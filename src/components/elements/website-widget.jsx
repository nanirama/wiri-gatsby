import React, { useState, useRef } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Slider from "react-slick"
import { SlickArrows } from "../styled/lib"
import {
  Section,
  Title,
  WidgetItem,
  WidgetImg,
  WidgetSlide,
} from "../styled/website-widget"
import { LeftArrow, RightArrow } from "../../utils/imgImport"
import SVG from "react-inlinesvg"

const ItemBox = ({ active, data, reverse }) => (
  <WidgetItem
    className={`mt-3 ${reverse ? "flex-row-reverse" : ""}`}
    active={active}
  >
    <div className="widget-img">
      <SVG
        className="icon"
        src={data.icon.url}
        title="social icon"
        height={42}
        width="auto"
      />
    </div>
    <p className={`widget-name ${reverse ? "text-end me-2" : "ms-2"}`}>
      {data.label}
    </p>
  </WidgetItem>
)

export const EWebsiteWidget = props => {
  const widgetData = props.data

  const widgets1 = []
  const widgets2 = []
  const widgets = widgetData.widgets
  const widgetLength = widgets.length
  for (let i = 0; i < widgetLength / 2; i++) widgets2.push(widgets[i])
  for (let i = widgetLength / 2; i < widgetLength; i++)
    widgets1.push(widgets[i])

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
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <Section>
      <div className="container">
        <Title>
          <span className="blue-line">{widgetData.title}</span>
          <span className="txt-green">.</span>
        </Title>
        <div className="row align-items-center mt-3 d-none d-lg-flex">
          <div className="col-4 d-flex justify-content-end">
            <ul>
              {widgets1?.map((item, idx) => (
                <div
                  onClick={() => setSelect(idx + widgetLength / 2)}
                  onKeyDown={() => setSelect(idx + widgetLength / 2)}
                  role="presentation"
                  key={idx}
                >
                  <ItemBox
                    data={item}
                    active={idx + widgetLength / 2 === selected}
                    reverse
                  />
                </div>
              ))}
            </ul>
          </div>
          <WidgetImg className="col-4">
            <GatsbyImage
              image={getImage(widgets[selected].screenshot)}
              alt="widget img"
            />
          </WidgetImg>
          <div className="col-4 ">
            <ul>
              {widgets2?.map((item, idx) => (
                <div
                  onClick={() => setSelect(idx)}
                  onKeyDown={() => setSelect(idx)}
                  role="presentation"
                  key={idx}
                >
                  <ItemBox data={item} active={idx === selected} />
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="d-lg-none mt-5">
        <Slider
          className="widget-slider"
          ref={c => (slider.current = c)}
          {...settings}
        >
          {widgets.map((item, idx) => (
            <div
              className="d-flex flex-column align-items-center justify-content-center"
              key={idx}
            >
              <WidgetSlide>
                <GatsbyImage
                  image={getImage(widgets[selected].screenshot)}
                  alt="widget img"
                />
              </WidgetSlide>
              <ItemBox data={item} active={idx === selected} />
            </div>
          ))}
        </Slider>
        <SlickArrows>
          <button onClick={previous}>
            <LeftArrow />
          </button>
          <button onClick={next}>
            <RightArrow />
          </button>
        </SlickArrows>
      </div>
    </Section>
  )
}

export default EWebsiteWidget
