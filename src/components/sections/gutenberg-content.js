import React from "react"
import { useEffect } from "react"
import styled from "styled-components"
import Navigation from "../organisms/content-navigation"
import { StyledContent } from "../organisms/content-styles"
import { slugTransform } from "../../helpers/slug-transform"
import useHeadings from "../../hooks/create-headings"
import { Link } from "gatsby"

export default function Content({ content }) {


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

    document.getElementById('content').querySelectorAll('h2').forEach(el => {
      el.id = slugTransform(el.innerText)
    })

    document.getElementById('content').querySelectorAll('.ORNAMENT_PLACEHOLDER').forEach(el => {
      el.innerHTML = `
      <svg xmlns='http://www.w3.org/2000/svg' width='627' height='91' viewBox="0 0 627 91" fill='none'>
        <g fill='#5BA699'>
          <path d='M310.829 0l-45.552 45.5L310.829 91l45.553-45.5L310.829 0zm-43.657 45.5l43.657-43.607L354.487 45.5l-43.658 43.607L267.172 45.5z'></path>
          <path d='M326.233 0l-8.175 8.167a.666.666 0 000 .947.668.668 0 00.947 0l7.228-7.22L369.891 45.5l-44.132 44.08a.67.67 0 10.948.946L371.786 45.5 326.233 0zm-31.681 0L249 45.5 294.552 91l8.613-8.602a.669.669 0 10-.948-.946l-7.665 7.655L250.895 45.5l43.657-43.607 7.665 7.656a.67.67 0 10.948-.947L294.552 0z'></path>
          <path d='M318.531 81.692a.671.671 0 00-.473.196.666.666 0 000 .947l7.701 7.693a.67.67 0 10.948-.947l-7.702-7.693a.672.672 0 00-.474-.196zM243.13 21.485L219.088 45.5l24.042 24.015L267.172 45.5 243.13 21.486zM220.983 45.5l22.147-22.121L265.277 45.5 243.13 67.622 220.983 45.5zm157.546-24.015L354.487 45.5l24.042 24.015L402.571 45.5l-24.042-24.014zM356.382 45.5l22.147-22.121L400.676 45.5l-22.147 22.122L356.382 45.5zm-45.553-17.808l-17.828 17.807 17.828 17.808 17.828-17.808-17.828-17.807zm-15.933 17.807l15.933-15.914 15.933 15.914-15.933 15.915-15.933-15.915zm331.257-.667H423.557c-.459 0-.831.3-.831.669 0 .37.372.669.831.669h202.596c.459 0 .831-.3.831-.67 0-.369-.372-.668-.831-.668zm-428.051 0H.832c-.46 0-.832.3-.832.669 0 .37.372.669.832.669h197.27c.459 0 .831-.3.831-.67 0-.369-.372-.668-.831-.668z'></path>
        </g>
      </svg>
      `
    })

  }, [])

  const headings = useHeadings(content)
  return (
    <Wrapper>
      <Navigation headings={headings} />
      <div>
        <StyledContent id='content' dangerouslySetInnerHTML={{ __html: content.replaceAll(/<style\b[^>]*>(.*?)<\/style>/gs, '') }} />
        <Contakt>
          <h3>Jesteśmy do Twojej dyspozycji. Zacznij działać.</h3>
          <Link to="/kontakt/" className="cta-secondary"><span>Jestem zainteresowany</span></Link>
        </Contakt>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-gap: 32px;
  grid-template-columns: 408fr 848fr;

  @media (max-width: 940px) {
    grid-template-columns: 1fr;
  }
`

const Contakt = styled.div`
  margin-top: 32px;

  h3{
    text-align: center;
    font-size: clamp(22px, ${26/768*100}, 24px);
  }

  a{
    display: block;
    margin: 24px auto 0 auto;
    width: fit-content;
  }
`
