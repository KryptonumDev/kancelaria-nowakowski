import { useMotionValueEvent, useScroll } from "framer-motion"
import React, { useState } from "react"
import styled from "styled-components"
import Card from "../moleculas/blog-card"

export default function OtherPosts({ posts }) {
  const { scrollYProgress } = useScroll()
  const [scrollProgresValue, setScrollProgresValue] = useState(0)

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollProgresValue(latest)
  })

  return (
    <Wrapper>
      <h2>Sprawdź podobne <em>artykuły.</em></h2>
      <Grid>
        {posts.map((el, i) => (
          <Card
            key={i}
            index={i}
            scrollProgresValue={scrollProgresValue}
            data={el}
          />
        ))}
      </Grid>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  h2{
    max-width: 650px;
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
      font-family: var(--serif);
      line-height: 160%; 
      color: #12433A;

      em{
        font-style: normal;
      }
    }
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 32px;
  margin-top: 40px;
  margin-bottom: clamp(${74 / 16}rem, ${96 / 7.68}vw, ${120 / 16}rem);
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding-bottom: 0;
  }
`