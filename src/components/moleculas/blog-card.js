import { motion } from "framer-motion"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"

export default function Card({ data, scrollProgresValue }) {
  return (
    <Wrapper transition={{ type: "spring", stiffness: 10 }} style={{ y: scrollProgresValue }}>
      <Image>
        <GatsbyImage image='' alt='' />
        {/* categories */}
      </Image>
      <Information>
        <p className="title">Czy musimy zapłacić za nieruchomość po spadku?</p>
        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus senectus mauris, aliquet nam feugiat netus augue aliquam ut.</p>
        <Link to='/'>Czytaj więcej</Link>
      </Information>
    </Wrapper>
  )
}

const Wrapper = styled(motion.div)`
  height: 100%;
`

const Image = styled.div`
  position: relative;
  height: 305px;
  background-color: gray;
`

const Information = styled.div`
  margin-top: 20px;
`