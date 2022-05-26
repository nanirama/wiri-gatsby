import React, { useState } from "react"
import { GatsbyImage, getImage} from "gatsby-plugin-image"
import { Grid, Row, Col } from 'react-flexbox-grid';

import { FaqSection, Heading, FaqContent, FaqImage, StyledContainer } from "./styled"
import Dropdown from "./faq-dropdown";

const EFaq = ({data}) => {  
  const { title, image, questions } = data.primary.faq.document.data
  const [openIdx, setOpenIdx] = useState(0);
  const Dropdowns = questions.map((faq, idx) => (
    <Dropdown
      question={faq.question}
      answer={faq.answer}
      key={idx}
      idx={idx}
      openIdx={openIdx}
      setOpenIdx={setOpenIdx}
    />
  ));

  return (
    <FaqSection>
      <Grid>
        <Row>
          <Col xs={12} lg={6} first="lg" last="xs">
            <FaqImage>
              <GatsbyImage image={getImage(image)} alt={title} />
            </FaqImage>
          </Col>
          <Col xs={12} lg={6}>
            <FaqContent>
              <Heading>{title} <span className="txt-green">.</span></Heading>
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
export default EFaq