import React, { useState } from "react";
import { Data } from "../components/Data";
import styled from "styled-components";

const Accordion = () => {
  const [clicked, setClicked] = useState(false);
  const toggle = (index) => {
    if (clicked === index) {
      // if clicked than close it
      return setClicked(null);
    } else {
      setClicked(index);
    }
  };
  return (
    <AccordionSection>
      <h1>Accordion Example</h1>
      <AccordionContainer>
        {Data.map((item, index) => {
          return (
            <>
              <AccordionWrap onClick={() => toggle(index)} key={index}>
                <h2>{item.first_name}</h2>
                <span>{clicked === index ? "-" : "+"}</span>
              </AccordionWrap>
              {clicked === index ? (
                <AccordionDropdown>
                  <p>{item.email}</p>
                  <p>{item.phone}</p>
                </AccordionDropdown>
              ) : null}
            </>
          );
        })}
      </AccordionContainer>
    </AccordionSection>
  );
};

export default Accordion;

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const AccordionContainer = styled.div`
  /* box-shadow: 2px 10px 30px 1px rgba(153, 153, 153, 0.3); */
`;
const AccordionWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  text-align: center;
  align-items: center;
  background: #675756;
  border-radius: 20px;
  margin-top: 10px;
  color: white;
  cursor: pointer;
  h2 {
    padding: 20px;
    font-size: 30px;
  }
  span {
    color: white;
    font-size: 40px;
    margin-right: 20px;
  }
`;
const AccordionDropdown = styled.div`
  margin-top: 10px;
  background: rgba(153, 45, 22, 0.3);
  border-radius: 10px;
  padding: 10px;
`;
