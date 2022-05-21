import React from "react"
import { Grid, Row, Col } from 'react-flexbox-grid';

import { CallSection, Heading } from "./styled"

const CallToAction = () => {

  return (
    <Grid fluid>
      <CallSection>
        <Grid>
          <Heading>Ready to get ahead of the competitors? <span className="txt-green">.</span></Heading>
          <p className="subtitle">Instant sign up, no credit card required</p>
          <button className="btn-blue">Try for FREE</button>
        </Grid>
      </CallSection>
    </Grid>
  )
}

export default CallToAction
