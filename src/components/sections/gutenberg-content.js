import React from "react"
import ReactDOM from 'react-dom/client';
import { useEffect } from "react"
import styled from "styled-components"
import Navigation from "../organisms/content-navigation"
import { StyledContent } from "../organisms/content-styles"
import { slugTransform } from "../../helpers/slug-transform"
import useHeadings from "../../hooks/create-headings"
import { Link } from "gatsby"
import { Ornament } from "../atoms/Icons"
import ReactHtmlParser from 'react-html-parser';

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
      const root = ReactDOM.createRoot(el);
      root.render(<Ornament className="anim-active" />);
    })

    const contentEl = document.getElementById('content');
    Array.from(contentEl.children).forEach(child => {
      child.classList.add('anim');
    });
  }, [])

  const headings = useHeadings(content)
  return (
    <Wrapper>
      <Navigation headings={headings} />
      <div>
        {/* dangerouslySetInnerHTML={{ __html: content.replaceAll(/<style\b[^>]*>(.*?)<\/style>/gs, '')}} */}
        <StyledContent id='content'>{ReactHtmlParser(content.replaceAll(/<style\b[^>]*>(.*?)<\/style>/gs, ''))}</StyledContent>
        <Contact>
          <h3 className="anim">Jesteśmy do Twojej dyspozycji. Zacznij działać.</h3>
          <Link to="/kontakt/" className="cta-secondary anim"><span>Jestem zainteresowany</span></Link>
        </Contact>
      </div>
    </Wrapper >
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

const Contact = styled.div`
  margin-top: 32px;
  h3 {
    text-align: center;
    font-size: clamp(22px, ${26 / 768 * 100}, 24px);
  }
  a {
    display: block;
    margin: 24px auto 0 auto;
    width: fit-content;
  }
`
