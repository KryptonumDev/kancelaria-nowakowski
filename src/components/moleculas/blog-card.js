import { motion } from "framer-motion"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Right } from "../atoms/arrows"

export default function Card({ data, scrollProgresValue }) {
  return (
    <Wrapper transition={{ type: "spring", stiffness: 10 }} style={{ y: scrollProgresValue }}>
      <Image>
        <GatsbyImage image='' alt='' />
        {/* categories */}
      </Image>
      <Information>
        <p className="title">{data.title}</p>
        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus senectus mauris, aliquet nam feugiat netus augue aliquam ut.</p>
        <Link to='/'>
          <span>Czytaj więcej</span>
          <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.1641 16.0801L5.83105 16.0801" stroke="#0F3730" stroke-width="1.5" stroke-linecap="square" />
            <path d="M19.6172 23.6268C19.6172 19.7472 23.034 16.0801 27.1639 16.0801" stroke="#0F3730" stroke-width="1.5" stroke-linecap="square" />
            <path d="M19.6172 8.53335C19.6172 12.413 23.034 16.0801 27.1639 16.0801" stroke="#0F3730" stroke-width="1.5" stroke-linecap="square" />
          </svg>
        </Link>
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

  .title{
    font-size: 24px;
    line-height: 160%;
    color: #0F3730;
    font-family: 'Literata';
  }

  .description{
    margin-top: 4px;
    margin-bottom: 8px;
    font-size: 20px;
    line-height: 150%;
    color: #12433A;
  }

  a{
    font-family: 'Literata';
    font-size: 24px;
    line-height: 160%;
    color: #12433A;
    display: flex;
    align-items: center;
  }
`