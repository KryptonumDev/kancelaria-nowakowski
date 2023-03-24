import React, { useRef, useState } from "react"
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

const Testimonials = ({ data }) => {
  const constraintsRef = useRef(null)
  const [activeSlide, setActiveSlide] = useState(0)

  const dragEndHandler = (event, info) => {
    const offset = info.offset.x
    if (Math.abs(offset) > 5) {
      const direction = offset < 0 ? 1 : -1
      let nextSlide = 0
      if (direction === 1) {
        nextSlide = activeSlide + direction < data.comments.length ? activeSlide + direction : activeSlide
      } else if (direction === -1) {
        nextSlide = activeSlide + direction >= 0 ? activeSlide + direction : 0
      }
      setActiveSlide(nextSlide)
    }
  }
  const width = constraintsRef?.current?.offsetWidth || 350

  return (
    <Wrapper ref={constraintsRef}>
      <Content animate={{ x: -1 * activeSlide * width }} dragConstraints={constraintsRef} drag="x" onDragEnd={dragEndHandler}>
        {data.comments.map((el, index) => (
          <motion.div className="item">
            <GatsbyImage className="image" image={el.commentImage.localFile.childImageSharp.gatsbyImageData} alt={el.commentImage.altText} />
            <div className="content">
              <StaticImage className="background" src="./../../../resources/images/backogrund-comment.jpg" alt='tło' />
              <h3>{el.commentTitle}</h3>
              <div dangerouslySetInnerHTML={{ __html: el.commentContent }} />
              <span className="sygn">{el.commentAuthor}</span>
            </div>
          </motion.div>
        ))}
      </Content>
      <Control>
        <button onClick={() => { setActiveSlide(activeSlide - 1 >= 0 ? activeSlide - 1 : 0) }}>
          <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="64" height="64" transform="translate(0.715698 0.480469)" fill="white" />
            <path d="M11.381 32.4805L54.0471 32.4805" stroke="#0F3730" stroke-width="1.5" stroke-linecap="square" />
            <path d="M26.4748 17.387C26.4748 25.1463 19.6413 32.4805 11.3813 32.4805" stroke="#0F3730" stroke-width="1.5" stroke-linecap="square" />
            <path d="M26.4748 47.5739C26.4748 39.8146 19.6413 32.4805 11.3813 32.4805" stroke="#0F3730" stroke-width="1.5" stroke-linecap="square" />
          </svg>
        </button>
        {data.comments.map((el, index) => (
          <button onClick={() => { setActiveSlide(index) }} className={index === activeSlide ? 'active dot' : "dot"} />
        ))}
        <button onClick={() => { setActiveSlide(activeSlide + 1 < data.comments.length ? activeSlide + 1 : activeSlide) }}>
          <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="64" height="64" transform="translate(0.284241 0.480469)" fill="white" />
            <path d="M53.615 32.4805L10.949 32.4805" stroke="#0F3730" stroke-width="1.5" stroke-linecap="square" />
            <path d="M38.5225 47.5739C38.5225 39.8146 45.3561 32.4805 53.616 32.4805" stroke="#0F3730" stroke-width="1.5" stroke-linecap="square" />
            <path d="M38.5225 17.387C38.5225 25.1463 45.3561 32.4805 53.616 32.4805" stroke="#0F3730" stroke-width="1.5" stroke-linecap="square" />
          </svg>
        </button>
      </Control>
    </Wrapper>
  );
}

const Control = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
  padding: 12px 0;
  .dot{
    width: 12px;
    height: 12px;
    border: 1px solid #3DA290;
    transform: rotate(45deg);

    &.active{
      width: 16px;
      height: 16px;
      background: #3DA290;
    }
  }
`

const Content = styled(motion.div)`
  display: flex;
  width: max-content;
 `

const Wrapper = styled.section`
  width: 100%;
  overflow: hidden;
  .background{
    position: absolute;
  }

  .item{
    display: grid;
    align-items: center;
    grid-template-columns: 406fr 879fr;
    max-width: 1286px;
    width: calc(100vw - 80px);

    @media (max-width: 768px) {
      width: calc(100vw - 34px);
    }
    @media (max-width: 520px) {
      grid-template-columns: 1fr;
    }
  }

  .image{
    @media (max-width: 520px){
      width: 30vw;
      min-width: 102px;
    }
  }

  img{
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
  }

  .content{
    /* max-width: 737px; */
    padding: clamp(50px, ${50 / 520 * 100}vw, 80px) 32px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;

    @media (max-width: 520px){
      padding: 50px 20px 40px 20px;
    }

    h3{
      margin-bottom: 32px;
      font-family: 'Literata';
      font-weight: 400;
      font-size: clamp(24px, ${30 / 768 * 100}vw, 32px);
      line-height: 131%;
      letter-spacing: -0.005em;
      color: #0F3730;
      max-width: 535px;
      position: relative;

      &::before{
        content: '“';
        position: absolute;
        font-family: 'Literata';
        font-weight: 400;
        font-size: 54px;
        line-height: 111%;
        letter-spacing: -0.01em;
        color: #9CFFEE;
        top: 0;
        left: 50%;
        transform: translate(-50%, -70%  );

        @media(max-width: 1024px) {
          left: 0;
          transform: translateY(-70%);
        }
        @media (max-width: 640px){
          transform: translateY(-60%);
        }
      }
    }

    p{
      font-family: 'Literata';
      font-size: clamp(18px, ${21 / 768 * 100}vw, 24px);
      line-height: 158%;
      color: #0F3730;
      max-width: 650px;
    }

    .sygn{
      margin-top: 20px;
      text-align: right;
      font-family: 'Corinthia';
      font-weight: 400;
      font-size: clamp(32px, ${40 / 768 * 100}vw, 40px);
      line-height: 120%;
      color: #12433A;
      max-width: 737px;
    }

    .background{
      position: absolute;
      z-index: -1;
      inset: 0;

      img{
        object-fit: cover !important;
      }
    }
  }
`

export default Testimonials;