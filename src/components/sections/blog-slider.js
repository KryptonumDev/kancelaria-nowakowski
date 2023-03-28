import { useMotionValueEvent, useScroll } from "framer-motion"
import React, { useState } from "react"
import styled from "styled-components"
import Card from "../moleculas/blog-card"
import CallToActionTwoBtns from "./CallToActionTwoBtns"

export default function Slider({ posts, data }) {
  const { scrollYProgress } = useScroll()
  const [scrollProgresValue, setScrollProgresValue] = useState(0)

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollProgresValue(latest)
  })

  return (
    <Wrapper>
      <h2>{data.sectionTitle}</h2>
      <div className="flex">
        <p>
          {data.leftTextUnderTitle}
        </p>
        <p>
          {data.rightTextUnderTitle}
        </p>
      </div>
      <Grid>
        {posts.map((el, index) => (
          <Card
            key={el.title + index}
            index={index}
            scrollProgresValue={scrollProgresValue}
            data={el}
          />
        ))}
      </Grid>
      <CallToActionTwoBtns data={data.callToAction} />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 128px;
  h2{
    max-width: 630px;
    font-size: clamp(${28 / 16}rem, ${36 / 7.68}vw, ${40 / 16}rem);
  }

  .flex{
    margin-top: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
      grid-gap: 16px;
    }

    p{
      font-size: clamp(${22 / 16}rem, ${24 / 7.68}vw, ${24 / 16}rem);
      font-family: 'Literata';
      line-height: 160%; 
      color: #12433A;

    }
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 32px;
  margin-top: 40px;
  padding-bottom: 120px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding-bottom: 0;
  }
`