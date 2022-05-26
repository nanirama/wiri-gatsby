import React from "react"
import { graphql } from "gatsby"
import { Grid } from 'react-flexbox-grid';

import { CallSection, Heading } from "./styled"




const ECallToAction = ({ data }) => {
    const { cta_heading, cta_content, cta_subheading, button_link, button_label } = data.primary.cta.document.data
  return (
    <Grid fluid>
      <CallSection>
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