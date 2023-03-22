import React from "react"
import styled from "styled-components"
import { Ornament } from "../atoms/Icons"
import Filter from "../organisms/blog-filter"
import Grid from "../organisms/blog-grid"
import Pagination from "../organisms/blog-pagination"

export default function Content({ categories, posts, data, page }) {

  return (
    <Wrapper>
      <Ornament />
      <h1>{data.pageTitle}</h1>
      <Filter categories={categories} />
      <Grid posts={posts} currentPage={page} />
      <Pagination defaultUrl='/blog/' currentPage={page} itemCount={posts.length} />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  h1{
    font-size: clamp(${36 / 16}rem, ${54 / 13.66}vw, ${54 / 16}rem);
    position: relative;
    display: block;
    width: fit-content;
    max-width: 630px;
    
    &::after{
      content: "";
      position: absolute;
      transform: translate(-50%, 50%) rotateZ(45deg);
      left: 0;
      bottom: -10px;
      width: 6px;
      height: 6px;
      background-color: #4FD2BB;
    }

    &::before{
      content: "";
      position: absolute;
      transform: translate(0, 50%);
      left: 0;
      bottom: -10px;
      width: 100%;
      height: 2px;
      background-color: #4FD2BB;
    }
  }
`