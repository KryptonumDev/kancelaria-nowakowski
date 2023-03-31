import React from "react";
import styled from "styled-components";

const HowWeWork = ({data}) => {
  return (
    <Wrapper>
      <header>
        <div dangerouslySetInnerHTML={{__html: data.sectionTitle}}></div>
        <p>{data.textUnderTitle}</p>
      </header>
      <div className="steps">
        {data.steps.map((step, i) => (
          <div className="steps-item" key={i}>
            <h3>{step.name}</h3>
            <div dangerouslySetInnerHTML={{__html: step.text}}></div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  header {
    max-width: ${627/16}rem;
    h2 {
      font-size: clamp(1.75rem, 4.6875vw, 2.5rem);
      margin-bottom: ${42/16}rem;
    }
    p {
      font-size: clamp(${22/16}rem, ${26/7.68}vw, ${28/16}rem);
      font-family: var(--serif);
    }
  }
  .steps {
    margin-top: ${40/16}rem;
    display: flex;
    flex-wrap: wrap;
    counter-reset: counter;
    .steps-item {
      counter-increment: counter;
      border: 1px solid var(--secondary-400);
      padding: clamp(${24/16}rem, ${32/7.68}vw, ${56/16}rem);
      width: calc(50% - 1rem);
      position: relative;
      ::after {
        content: '';
        width: 100%;
        height: 1px;
        background-color: var(--secondary-400);
        position: absolute;
        right: -100%;
        top: 50%;
        transform: translate(2rem, -50%);
      }
      &:nth-child(even){
        margin-left: calc(50% + 1rem);
        ::after {
          left: -100%;
          transform: translate(-2rem, -50%);
        }
      }
      &:not(:last-child){
        margin-bottom: 2rem;
      }
      h3 {
        text-align: right;
        position: relative;
        ::before {
          content: '0'counter(counter);
          position: absolute;
          left: 0;
          bottom: 0;
          line-height: 1;
          color: var(--primary-600);
          font-family: var(--serif);
          font-size: clamp(${50/16}rem, ${50/7.68}vw, ${54/16}rem);
        }
        font-size: clamp(${24/16}rem, ${30/7.68}vw, ${32/16}rem);
        margin-bottom: clamp(1rem, ${24/7.68}vw, ${24/16}rem);
      }
      p {
        &:not(:last-child) {
          margin-bottom: 1rem;
        }
      }
    }
  }
  @media (max-width: 1289px){
    .steps {
      .steps-item {
        width: calc(80% - 1rem);
        ::after {
          width: 20%;
          right: -20%;
        }
        &:nth-child(even){
          margin-left: calc(20% + 1rem);
          ::after {
            left: -20%;
          }
        }
      }
    }
  }
  @media (max-width: 589px){
    .steps {
      display: block;
      .steps-item {
        padding-top: 3rem;
        width: 100%;
        ::after {
          content: none;
        }
        &:nth-child(even){
          margin-left: 0;
        }
        h3 {
          text-align: left;
          padding-top: 2rem;
          ::before {
            top:-2rem;
          }
        }
      }
    }
  }
`
 
export default HowWeWork;