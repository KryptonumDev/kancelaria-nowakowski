import React, { useEffect, useMemo } from "react"
import styled from "styled-components"
import mark from './../../resources/images/blog-ul-mark.svg'
import { slugTransform } from './../../helpers/slug-transform'

export default function Content({ headings, content }) {

  return (
    <Wrapper>
      {headings.length > 1 && (
        <Navigation>
          <svg width="116" height="97" viewBox="0 0 116 97" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="85" height="81" transform="translate(15.5 8)" fill="white" />
            <path d="M89.5448 17.0039V59.6749H68.5153V38.3329H47.4922V17.0039H89.5448Z" fill="#3BBD9A" />
            <path d="M89.5412 81H26.4688V17L47.4887 38.329V59.6677H68.5118L89.5412 81Z" fill="#15957E" />
          </svg>
          <div>
            {headings.map(el => (
              <a href={'#' + slugTransform(el.innerText)}>{el.innerText}</a>
            ))}
          </div>
        </Navigation>
      )}
      <PostContent dangerouslySetInnerHTML={{ __html: content }} />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 128px;
  display: grid;
  grid-gap: 32px;
  grid-template-columns: 408fr 848fr;
`

const Navigation = styled.aside`
  padding: 96px 25px;
  border: 1px solid #4FD2BB;
  position: sticky;
  top: 150px;
  height: fit-content;

  svg{
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, -50%);
  }

  > div {
    display: grid;
    grid-gap: 16px;

    a{
      font-weight: 400;
      font-size: 20px;
      line-height: 150%;
      color: #12433A;
      padding-left: 18px;
      position: relative;

      &::before{
        content: "";
        position: absolute;
        width: 8px;
        height: 8px;
        left: 0;
        top: 10px;
        background: #4FD2BB;
        transform: rotateZ(45deg);
      }
    }
  }
`

const PostContent = styled.div`
  > * {
    max-width: 737px;
  }
  > * + * {
    margin-top: 16px;
  }
  h2{
    margin-top: 32px;
    margin-bottom: 32px;
    font-family: 'Literata';
    font-weight: 400;
    font-size: 40px;
    line-height: 130%;
    letter-spacing: -0.01em;
    color: #0F3730;
  }

  h3{
    margin-top: 32px;
    font-family: 'Literata';
    font-weight: 400;
    font-size: 24px;
    line-height: 158%;
    color: #12433A;
  }

  p{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    color: #12433A;
  }
  .wp-block-columns{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
    width: fit-content;
  }

  .wp-block-image{
    figcaption{
      font-weight: 400;
      font-size: 14px;
      line-height: 171%;
      color: #12433A;
    }
  }
  .wp-block-pullquote{
    max-width: unset;
    blockquote{
      padding: 75px 0 48px;
      font-family: 'Literata';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 158%;
      color: #0F3730;
      border-top: 2px solid #BFCACD;
      border-bottom: 2px solid #BFCACD;
      position: relative;

      &::after{
        content: '“';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 24px;
        font-weight: 400;
        font-size: 54px;
        line-height: 60px;
        letter-spacing: -0.01em;
        color: #4FD2BB;

      }
    }
  }

  ul{
    margin-top: 20px;
    display: grid;
    grid-gap: 16px;

    li{
      padding-left: 28px;
      list-style: none;
      font-family: 'Lato';
      font-weight: 400;
      font-size: 20px;
      line-height: 150%;
      color: #12433A;
      position: relative;

      &::before{
        content: url(${mark});
        position: absolute;
        left: 0;
        top: 0;
      }
    }
  }

  ol{
    max-width: unset;
    display: grid;
    grid-gap: 32px;
    margin-top: 32px;
    counter-reset: my-awesome-counter;

    li{
      padding: 32px;
      border: 2px solid #4FD2BB;
      position: relative;
      counter-increment: my-awesome-counter;
      list-style: none;
      font-family: 'Literata';
      font-weight: 400;
      font-size: 24px;
      line-height: 158%;
      color: #12433A;

      &::before{
        content: "Krok";
        display: block;
        padding-top: 24px;
        padding-bottom: 12px;
        color: #3DA290;
      }

      &::after{
        content:  "0" counter(my-awesome-counter);
        position: absolute;
        right: 32px;
        top: 32px;
        font-weight: 400;
        font-size: 54px;
        line-height: 111%;
        letter-spacing: -0.01em;
        color: #3DA290;
      }
    }
  }

  .cta-wrapper{
    max-width: unset;
    margin: 64px 0;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 42px 32px 68px;
    overflow: hidden;
    .gatsby-image-wrapper{
        position: absolute !important;
        top: 0;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        height: 100% !important;
        max-width: unset !important;
        z-index: -1;
        width: 100%;
    }

    .cta-title{
        margin-top: 16px;
        margin-bottom: 20px;
        text-align: center;
        font-family: 'Literata';
        font-weight: 400;
        font-size: 24px;
        line-height: 158%;
        color: #12433A;
        max-width: 600px;
      }

    .cta-secondary{
        font-size: 24px;
        padding: 16px 32px;
        white-space: nowrap;
        display: inline-block;
        text-align: center;
        box-shadow: inset 0 0 0 2px #315B54;
        color: #315B54;
        margin: 0 auto;
        display: block;
        width: fit-content;
        text-decoration: unset;
    }

    .cta-content{
        position: relative;
        z-index: 2;
    }
}

`