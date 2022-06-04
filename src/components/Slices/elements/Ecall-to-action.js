import React from "react"
import { Grid } from 'react-flexbox-grid';
import { useStaticQuery, graphql } from "gatsby"
import { CallSection, Heading } from "./styled"
const ECallToAction = ({ data }) => {
  const { CtaBack } = useStaticQuery(graphql`
    query {
      CtaBack: file(relativePath: {eq: "cta-back.png"}) {
        childImageSharp {
          fixed(width: 391, height: 351) {
            srcWebp
          }
        }
      }
    }
  `)
    const { cta_heading, cta_subheading, button_label } = data.primary.cta.document.data
  return (
    <Grid fluid>
      <CallSection CtaBack={CtaBack.childImageSharp.fixed.srcWebp}>
        <Grid>
          <Heading>{cta_heading}<span className="txt-green">.</span></Heading>
          <p className="subtitle">{cta_subheading}</p>
          <button className="btn-blue">{button_label}</button>
        </Grid>
      </CallSection>
    </Grid>
  )
}

export default ECallToAction