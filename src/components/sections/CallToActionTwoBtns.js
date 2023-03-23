import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Ornament } from '../atoms/Icons';

const CallToActionTwoBtns = ({data}) => {
  return (
    <Wrapper>
      <div className="blog">
        <Ornament />
        <h3>Zaciekawiły Cię artykuły?</h3>
        <Link to="/blog" className="cta-secondary">Sprawdź bloga</Link>
      </div>
      <div className="contact">
        <Ornament />
        <h3>Nie znalazłeś odpowiedzi na swoje pytanie?</h3>
        <Link to="/kontakt" className="cta-primary">Napisz do nas</Link>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin: clamp(${75/16}rem, ${95/7.68}vw, ${120/16}rem) 0;
  background-color: lightcyan;
  padding: ${52/16}rem ${42/16}rem;
  columns: 2;
  column-gap: min(${66/7.68}vw, ${116/16}rem);
  text-align: center;
  h3 {
    margin: 1rem 0 ${20/16}rem;
  }
  .cta-primary {
    background-color: var(--primary-100);
    color: var(--primary-900);
  }
  @media (max-width: 699px){
    margin-left: -17px;
    margin-right: -17px;
    padding: ${24/16}rem 1rem ${62/16}rem;
    columns: 1;
    > *:first-child {
      margin-bottom: ${32/16}rem;
    }
    h3 {
      margin: 1rem 0 ${8/16}rem;
    }
  }
`
 
export default CallToActionTwoBtns;