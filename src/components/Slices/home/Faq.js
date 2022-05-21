import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Grid, Row, Col } from 'react-flexbox-grid';

import { FaqSection, Heading, FaqContent, FaqImage, StyledContainer } from "./styled"
import Dropdown from "./faq-dropdown";

const faqs = [
  {
    q: "Question1",
    a: "Here is answer1",
  },
  {
    q: "Question2",
    a: "Here is answer2",
  },
  {
    q: "Question3",
    a: "Here is answer3",
  },
  {
    q: "Question4",
    a: "Here is answer4",
  },
  {
    q: "Question5",
    a: "Here is answer5",
  },

];

const FaqSlice = () => {
  const [openIdx, setOpenIdx] = useState(0);
  const Dropdowns = faqs.map((faq, idx) => (
    <Dropdown
      question={faq.q}
      answer={faq.a}
      key={idx}
      idx={idx}
      openIdx={openIdx}
      setOpenIdx={setOpenIdx}
    />
  ));

  return (
    <FaqSection>
      <Grid>
        <Row middle="xs">
          <Col xs={12} lg={6} first="lg" last="xs">
            <FaqImage><StaticImage src="../../../assets/images/faq-person.png" alt="" /></FaqImage>
          </Col>
          <Col xs={12} lg={6}>
            <FaqContent>
              <Heading>Frequently Asked Question <span className="txt-green">.</span></Heading>
              <StyledContainer onClick={() => setOpenIdx(null)}>
                {Dropdowns}
              </StyledContainer>
            </FaqContent>
          </Col>
        </Row>
      </Grid>
    </FaqSection>
  )
}
export default FaqSlice
