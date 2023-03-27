import { motion, useMotionValue } from "framer-motion"
import { Link } from "gatsby"
import React, { useCallback, useEffect, useState } from "react"
import styled from "styled-components"

export default function Filter({ postsCount, categories }) {

  const x = useMotionValue(0)

  const [maxButtonsTransform, setMaxButtonsTransform] = useState(0)

  useEffect(() => {
    const parrent = document.getElementById('control-wrap')
    const child = document.getElementById('control')
    const maxTransform = child.clientWidth - parrent.clientWidth

    setMaxButtonsTransform(maxTransform)
  }, [])

  const transform = useCallback((direction, x, maxButtonsTransform) => {
    const transformx = x.get()
    x.stop()
    if (direction === 'left') {
      if (transformx + 200 > 0) {
        x.set(0)
      } else {
        x.set(transformx + 200)
      }
    } else if (direction === 'right') {
      if (transformx - 200 < - maxButtonsTransform) {
        x.set(-maxButtonsTransform)
      } else {
        x.set(transformx - 200)
      }
    }
  }, [])

  return (
    <Wrapper>
      <div className="flex">
        <h2>Kategorie:</h2>
        {maxButtonsTransform > 0 && (
          <div className="arrows" >
            <button onClick={() => { transform('left', x, maxButtonsTransform) }}>
              <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" transform="translate(0.5 0.0800781)" fill="white" />
                <path d="M8.5 24.0801L40.4995 24.0801" stroke="#0F3730" stroke-width="1.5" stroke-linecap="square" />
                <path d="M19.8203 12.76C19.8203 18.5795 14.6952 24.0801 8.50022 24.0801" stroke="#0F3730" stroke-width="1.5" stroke-linecap="square" />
                <path d="M19.8203 35.4002C19.8203 29.5807 14.6952 24.0801 8.50022 24.0801" stroke="#0F3730" stroke-width="1.5" stroke-linecap="square" />
              </svg>
            </button>
            <button onClick={() => { transform('right', x, maxButtonsTransform) }}>
              <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" transform="translate(0.5 0.0800781)" fill="white" />
                <path d="M40.5 24.0801L8.50048 24.0801" stroke="#0F3730" stroke-width="1.5" stroke-linecap="square" />
                <path d="M29.1797 35.4002C29.1797 29.5807 34.3048 24.0801 40.4998 24.0801" stroke="#0F3730" stroke-width="1.5" stroke-linecap="square" />
                <path d="M29.1797 12.76C29.1797 18.5795 34.3048 24.0801 40.4998 24.0801" stroke="#0F3730" stroke-width="1.5" stroke-linecap="square" />
              </svg>
            </button>
          </div>
        )}
      </div>
      <SliderWrapper id='control-wrap'>
        <Slider style={{ x }} drag='x' dragConstraints={{ left: maxButtonsTransform > 0 ? -maxButtonsTransform : 0, right: 0 }} maxButtonsTransform={maxButtonsTransform} id='control'>
          <Link activeClassName="active" to='/blog/'>
            Wszystkie ({postsCount})
          </Link>
          {categories.map(el => (
            <Link activeClassName="active" to={el.uri}>
              {el.name} ({el.count})
            </Link>
          ))}
        </Slider>
      </SliderWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 80px;

  .flex{
    display: flex;
    align-items: center;
    justify-content: space-between;

    .arrows{
      display: flex;
      gap: 24px;
    }
  }

  a{
    padding: 4px 20px;
    background: #D8E1E3;
    font-size: 20px;
    line-height: 30px;
    font-family: 'Lato';
    color: #0F3730;

    &.active{
      background-color: #51C6B1;
    }
  }

`

const Slider = styled(motion.div)`
    display: flex;
    gap: 16px;
    width: max-content;
    transition: transform .3s cubic-bezier(0.39, 0.575, 0.565, 1);

`

const SliderWrapper = styled.div`
    margin: 24px auto 48px auto;
    overflow: hidden;
    width: calc(100% + 40px);
    position: relative;

    &::after{
      content: "";
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      width: 40px;
    }

    @media (max-width: 1366px) {
      width: 100%;
      overflow: unset;
    }

`