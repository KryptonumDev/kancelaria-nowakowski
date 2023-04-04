import { motion } from "framer-motion"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"

const htmlDelete = (string) => {

    if(!string){
        return string
    }    

    return string.replace(/<[^>]*>?/gm, '');
}

export default function Card({ index, data, scrollProgresValue }) {
  const scrollValue = ((index + 2) % 3 === 0)
    ? 120 - (scrollProgresValue * 120)
    : 0 + (scrollProgresValue * 120)

  return (
    <Wrapper initial={{ y: scrollValue }} transition={{ type: "spring", stiffness: 10 }} style={{ y: scrollValue }}>
      <Link aria-label={`blog post: ${htmlDelete(data.gutenberg.title)}`} tabIndex='-1' className="link" to={data.uri} />
      <Image>
        <GatsbyImage className="image" image={data.featuredImage.node.localFile.childImageSharp.gatsbyImageData} alt={data.featuredImage.node.altText} />
        <Categories>
          {data.categories.nodes.map((el, index) => (
            <div key={el.name + index}>
              {el.name}
            </div>
          ))}
        </Categories>
      </Image>
      <Information>
        <p className="title" >{htmlDelete(data.gutenberg.title)}</p>
        <div className="description" dangerouslySetInnerHTML={{ __html: data.gutenberg.excerpt }} />
        <Link className="styled-link" to={`/${data.slug}/`} >
          <span>Czytaj więcej</span>
          <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.1641 16.0801L5.83105 16.0801" stroke="#0F3730" strokeWidth="1.5" strokeLinecap="square" />
            <path d="M19.6172 23.6268C19.6172 19.7472 23.034 16.0801 27.1639 16.0801" stroke="#0F3730" strokeWidth="1.5" strokeLinecap="square" />
            <path d="M19.6172 8.53335C19.6172 12.413 23.034 16.0801 27.1639 16.0801" stroke="#0F3730" strokeWidth="1.5" strokeLinecap="square" />
          </svg>
        </Link>
      </Information>
    </Wrapper>
  )
}

const Wrapper = styled(motion.div)`
  height: 100%;
  position: relative;

  .image img{
    transition: transform .4s ease-out;
  }

  &:hover{
    .image img{
      transform: scale(1.05);
    }

    .styled-link{
      background-size: 100% 2px;
    }
  }

  @media (max-width: 1024px){
    display: flex;
    align-items: center;
    gap: 8px;
    max-width: 900px;
    transform: unset !important;
  }

  @media (max-width: 680px){
    display: block;
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
  }

  .link{
    position: absolute;
    inset: 0;
    z-index: 3;
  }
`

const Categories = styled.div`
  position: absolute;
  z-index: 2;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;

  div{
    padding: 4px 20px;
    font-size: 20px;
    line-height: 150%;
    display: flex;
    align-items: center;
    color: #0F3730;
    background-color: #D8E1E3;
  }
`

const Image = styled.div`
  position: relative;
  .image {
    width: 100%;
    height: 300px;
    img {
      aspect-ratio: 314 / 235;
    }
    @media (max-width: 1024px) {
      height: 100%;
      width: 314px;
    }

    @media (max-width: 680px){
      width: 100%;
    }
  }
`

const Information = styled.div`
  margin-top: 20px;

  @media (max-width: 1024px){
    margin-top: 0;
  }

  .title{
    font-size: 24px;
    line-height: 160%;
    color: #0F3730;
    font-family: var(--serif);

    @media (max-width: 680px) {
      margin-top: 12px;
    }
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
    width: fit-content;
  }
`