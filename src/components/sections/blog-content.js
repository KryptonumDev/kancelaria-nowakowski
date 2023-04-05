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
    font-size: clamp(${36 / 16}rem, ${50 / 7.68}vw, ${54 / 16}rem);
    display: block;
    width: fit-content;
    max-width: 630px;
  }
`