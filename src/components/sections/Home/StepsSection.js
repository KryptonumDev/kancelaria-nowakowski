import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const StepsSection = ({data}) => {
  console.log(data);
  return (
    <StyledSection>
      <header>
        <h2>{data.sectionTitle}</h2>
        <h3>{data.textOnTheRight}</h3>
      </header>
      <ol className="steps">
        {data.steps.map((step, i) => (
          <li key={i}>{step.stepText}</li>
        ))}
      </ol>
      <div className="underSteps">
        <h3>{data.textOnTheLeftUnderSteps}</h3>
        <div>
          <h3>{data.titleAboveButtonUnderSteps}</h3>
          <Link to={data.linkUnderSteps.url} className="cta-primary">{data.linkUnderSteps.title}</Link>
        </div>
      </div>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  padding: ${128/16}rem 0;
  header,
  .underSteps {
    display: flex;
    gap: 32px;
    & > * {
      width: 50%;
    }
  }
  .steps {
    margin: ${60/16}rem 0 ${110/16}rem 0;
    counter-reset: counter;
    display: flex;
    gap: 32px;
    li {
      flex: 1;
      counter-increment: counter;
      list-style-type: none;
      font-size: ${20/16}rem;
      &::before {
        content: counter(counter);
        font-family: var(--serif);
        display: block;
        width: 55px;
        height: 55px;
        line-height: 55px;
        text-align: center;
        margin-bottom: 24px;
        background: center / cover no-repeat url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='77' height='77' fill='none'%3E%3Cpath fill='%234FD2BB' d='M.667 38.143 38.809 0 76.95 38.143 38.809 76.285z'/%3E%3C/svg%3E");
      }
    }
  }
  .underSteps {
    a {
      margin-top: 12px;
    }
  }
  @media (max-width: 899px){
    .steps {
      margin: ${72/16}rem 0;
      flex-direction: column;
      li::before {
        margin: 0 auto 1rem;
      }
    }
    header {
      & > *:last-child {
        width: 75%;
      }
    }
    .underSteps {
      flex-direction: column;
      & > * {
        width: 100%;
      }
    }
  }
  @media (max-width: 549px){
    header {
      flex-direction: column;
      & > *:last-child {
        width: 100%;
      }
    }
    .underSteps {
      flex-direction: column;
      & > * {
        width: 100%;
      }
    }
  }
`
 
export default StepsSection;