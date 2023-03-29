import React from "react"
import { useEffect } from "react"
import styled from "styled-components"
import Navigation from "../organisms/content-navigation"
import { StyledContent } from "../organisms/content-styles"

export default function Content({ headings, content }) {


  useEffect(() => {
    const changeTab = (tab) => {
      if (tab === 'first') {
        document.querySelectorAll('.first-tab-button').forEach(el => {
          el.classList.add('active')
        })
        document.querySelectorAll('.second-tab-button').forEach(el => {
          el.classList.remove('active')
        })
        document.querySelectorAll('.first-tab-content').forEach(el => {
          el.classList.add('active')
        })
        document.querySelectorAll('.second-tab-content').forEach(el => {
          el.classList.remove('active')
        })
      } else if (tab === 'second') {
        document.querySelectorAll('.first-tab-button').forEach(el => {
          el.classList.remove('active')
        })
        document.querySelectorAll('.second-tab-button').forEach(el => {
          el.classList.add('active')
        })
        document.querySelectorAll('.first-tab-content').forEach(el => {
          el.classList.remove('active')
        })
        document.querySelectorAll('.second-tab-content').forEach(el => {
          el.classList.add('active')
        })
      }
    }

    document.querySelectorAll('.second-tab-button').forEach(el => {
      el.addEventListener('click', () => { changeTab('second') })
    })
    document.querySelectorAll('.first-tab-button').forEach(el => {
      el.addEventListener('click', () => { changeTab('first') })
    })

  }, [])


  return (
    <Wrapper>
      <Navigation headings={headings} />
      <StyledContent dangerouslySetInnerHTML={{ __html: content }} />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 128px;
  display: grid;
  grid-gap: 32px;
  grid-template-columns: 408fr 848fr;

  @media (max-width: 940px) {
    grid-template-columns: 1fr;
  }
`
