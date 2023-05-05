import React from "react"
import styled from "styled-components"
import { Ornament } from "../atoms/Icons"
import Filter from "../organisms/blog-filter"
import Grid from "../organisms/blog-grid"
import Pagination from "../organisms/blog-pagination"

export default function Content({ categories, posts, data, context, postsCount }) {

  return (
    <Wrapper>
      <Ornament />
      <h1 className="anim">{context.description || data.pageTitle}</h1>
      <Filter categories={categories} postsCount={postsCount} />
      <Grid posts={posts} currentPage={context.page} />
      <Pagination defaultUrl='/blog/' currentPage={context.page} itemCount={posts.length} />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  h1{
    margin: 1rem 0 clamp(${24 / 16}rem, ${34 / 7.68}vw, 3rem);
    font-size: clamp(${36 / 16}rem, ${50 / 7.68}vw, ${54 / 16}rem);
    display: block;
    width: fit-content;
    max-width: 630px;
  }
`