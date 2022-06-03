import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Heading from "../common/heading"
import Accordion from "../common/accordion"
import {Inner,Row} from "../styled/faq"

export const EFaq = props => {
  return (
    <section className="faq-container">
      <div className="container">
        <Row className="row justify-content-around">
          <div className="col-lg-6 mt-5 mt-lg-none text-center">
            <GatsbyImage
              image={getImage(props.data.image)}
              alt={props.data.title}
            />
          </div>
          <div className="col-lg-6">
            <Inner>
              <Heading title={props.data.title} align="left" />
              <div className="mt-4 mt-md-5">
                {props.data.questions.map((item, idx) => (
                  <Accordion key={idx} data={item} />
                ))}
              </div>
            </Inner>
          </div>
        </Row>
      </div>
    </section>
  )
}

export default EFaq
