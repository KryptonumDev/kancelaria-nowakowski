import React from "react";
import styled from "styled-components";
import { Ornament } from "../atoms/Icons";

const CalendlyCta = () => {
  return (
    <Wrapper>
      <Ornament />
      <h3>Wolisz spotkanie online? Umów się przez Calendly.</h3>
      <a href="" className="cta-secondary">Umów spotkanie</a>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: ${48/16}rem 1rem ${32/16}rem;
  text-align: center;
  background-color: #2F554E1A;
  h3 {
    margin: clamp(${4/16}rem, ${16/7.68}vw, 1rem) 0 clamp(${8/16}rem, ${42/7.68}vw, ${20/16}rem);
  }
  @media (max-width: 499px){
    a {
      width: 100%;
    }
  }
`
 
export default CalendlyCta;