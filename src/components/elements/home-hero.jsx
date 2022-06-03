import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const EHomeHero = props => {
  
  return (
    <section className="container">
      <div className="home-hero">
        <div className="row align-items-center">
          <div className="col-lg-6 left-side">
            <h1 className="title">
              <span className="blue-line">{props.data.title}</span>
              <span className="txt-green">.</span>
            </h1>
            <p className="subtitle mb-5">{props.data.subtitle}</p>
            <button className="btn-blue">{props.data.button_label}</button>
            <p className="bottom-text">{props.data.under_button}</p>
          </div>
          <div className="col-lg-6 right-side">
              
            <GatsbyImage
              image={getImage(props.data.hero_image)}
              alt="hero img"
              className="hero-img"
            />
            <GatsbyImage
              className="float review-img"
              image={getImage(props.data.rating_image)}
              alt="rating img"
            />
            <GatsbyImage
              className="float menu-img"
              image={getImage(props.data.menu_image)}
              alt="menu img"
            />
            <GatsbyImage
              className="float deals-img"
              image={getImage(props.data.promotion_image)}
              alt="promotion img"
            />
            <GatsbyImage
              className="float question-img"
              image={getImage(props.data.question_image)}
              alt="question img"
            />
            <GatsbyImage
              className="qr-img"
              image={getImage(props.data.qr_image)}
              alt="qr img"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default EHomeHero
