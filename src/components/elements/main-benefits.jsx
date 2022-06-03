import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Heading from "../common/heading"
import { Benfit, Icon, Content, Inner, Row} from "../styled/main-benefits"

export const EMainBenefits = props => {
  
  const backImg = getImage(props.data.background)

  return (
    <section className="wow-clients">
      <div className="container">
        <Row className="row align-items-center justify-content-around">
          <div className="col-lg-6 mt-5 mt-lg-none">
            <GatsbyImage image={backImg} alt="wow img" />
          </div>
          <div className="col-lg-6">
            <Inner>
              <Heading
                title={props.data.title}
                subtitle={props.data.subtitle}
                align="left"
              />
              <div className="mt-4 mt-md-5">
                {props.data.benefits.map((item, idx) => (
                  <Benfit key={idx}>
                    <Icon>
                      <img src={item.icon.url} alt="icon" />
                    </Icon>
                    <div>
                      <h3>{item.title}</h3>
                      <Content>{item.content}</Content>
                    </div>
                  </Benfit>
                ))}
              </div>
            </Inner>
          </div>
        </Row>
      </div>
    </section>
  )
}
export default EMainBenefits
