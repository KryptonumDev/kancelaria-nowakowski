import { useMotionValueEvent, useScroll } from "framer-motion"
import React, { useState } from "react"
import styled from "styled-components"
import Card from "../moleculas/blog-card"

export default function Grid({ currentPage, posts }) {
  const { scrollYProgress } = useScroll()
  const [scrollProgresValue, setScrollProgresValue] = useState(0)

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollProgresValue(latest)
  })
  return (
    <Wrapper>
      {posts.map((el, index) => {
        if (
          index >= 11 * (currentPage - 1) + (currentPage - 1) &&
          index <= 11 * currentPage + (currentPage - 1)
        ) {
          return (
            <Card
              key={el.uri + index}
              index={index}
              scrollProgresValue={scrollProgresValue}
              data={el}
            />
          )
        }
        return null
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 120px 32px;
  margin-bottom: 168px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding-bottom: 0;
  }
`