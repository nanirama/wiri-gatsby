import React from 'react';
import { StyledDropdown } from "./styled"

const Dropdown = ({ question, answer, idx, openIdx, setOpenIdx }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    idx === openIdx ? setOpenIdx(null) : setOpenIdx(idx);
  };

  return (
    <StyledDropdown open={idx === openIdx} onClick={handleClick}>
      <h4 className="question">{question}</h4>
      <p className="answer">{answer}</p>
    </StyledDropdown>
  );
};

export default Dropdown;