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

  const mockposts = [{},{},{},{},{},{},{},{},{},{},{},{},]
  return (
    <Wrapper>
      {mockposts.map((el, index) => {
        if (
          index >= 11 * (currentPage - 1) + (currentPage - 1) &&
          index <= 11 * currentPage + (currentPage - 1)
        ) {
          return (
            <Card
              scrollProgresValue={
                ((index + 2) % 3 === 0)
                  ? 120 - (scrollProgresValue * 120)
                  : 0 + (scrollProgresValue * 120)
              }
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
`