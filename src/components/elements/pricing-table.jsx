import React, { useState, useRef } from "react"
import Slider from "react-slick"
import Heading from "../common/heading"
import { Wrapper, SlickArrows } from "../styled/lib"
import {
  Inner,
  Plan,
  Button,
  Tag,
  PricingSlider,
  PricingSlide,
  Header,
  Body,
  Footer,
} from "../styled/pricing-table"
import {
  LeftArrow,
  RightArrow,
  Check1,
  Check2,
} from "../../utils/imgImport"
import SVG from "react-inlinesvg"

const PricingComponent = ({ pricing, active, labels }) => {
  return (
    <PricingSlide active={pricing.primary.featured}>
      <Header>
        <p className="price">
          ${active ? pricing.primary.per_month : pricing.primary.per_year}
          <span className="per-month">
            /{active ? labels.per_month_label : labels.per_year_label}
          </span>
        </p>
        <p className="type">{pricing.primary.label}</p>
      </Header>
      <hr />
      <Body>
        <ul>
          {pricing.items?.map((feature, idx) => {
            let Icon = feature.included ? Check2 : Check1
            return (
              <li className="d-flex align-items-center" key={idx}>
                <SVG
                  className="me-2"
                  src={Icon}
                  title="check icon"
                  height={26}
                  width={26}
                />
                <p className="feature">{feature.feature.text}</p>
              </li>
            )
          })}
        </ul>
        <Footer>
          <button
            className={`btn-green ${pricing.primary.featured ? "active" : ""}`}
          >
            {pricing.primary.button_label}
          </button>
        </Footer>
      </Body>
    </PricingSlide>
  )
}

export const EPricingTable = props => {
  
  const pricingTableData = props.data

  const [plan, setPlan] = useState(
    pricingTableData.default_monthly ? "monthly" : ""
  )
  const slider = useRef()

  const next = () => {
    slider.current.slickNext()
  }
  const previous = () => {
    slider.current.slickPrev()
  }
  const settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <section className="pricing-container position-relative">
      <Wrapper className="container">
        <Inner>
          <Heading
            title={pricingTableData.title.text}
            subtitle={pricingTableData.subtitle.text}
            align="center"
          />
          <Plan>
            <Button
              onClick={() => setPlan("monthly")}
              active={plan === "monthly"}
            >
              {pricingTableData.month_label}
            </Button>
            <Button
              onClick={() => setPlan("yearly")}
              active={plan === "yearly"}
            >
              {pricingTableData.year_label}
            </Button>
            <Tag>{pricingTableData.save_label.text}</Tag>
          </Plan>
        </Inner>
      </Wrapper>
      <PricingSlider className="container">
        <Slider
          className="pricing-slider"
          ref={c => (slider.current = c)}
          {...settings}
        >
          {pricingTableData.body.map((item, idx) => (
            <div className="d-flex justify-content-center" key={idx}>
              <PricingComponent
                pricing={item}
                active={plan === "monthly" ? true : false}
                labels={{
                  per_month_label: pricingTableData.per_month_label,
                  per_year_label: pricingTableData.per_year_label,
                }}
              />
            </div>
          ))}
        </Slider>
        <SlickArrows className="pricing-arrows">
          <button onClick={previous}>
            <LeftArrow />
          </button>
          <button onClick={next}>
            <RightArrow />
          </button>
        </SlickArrows>
      </PricingSlider>
    </section>
  )
}

export default EPricingTable
