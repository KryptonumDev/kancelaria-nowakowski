import styled from "styled-components";
import mark from './../../resources/images/blog-ul-mark.svg'

export const StyledContent = styled.div`
> * {
    max-width: 737px;
    width: 100%;
  }
  > * + * {
    margin-top: 64px;
  }

  h2 + *, h3 + * {
    margin-top: 20px;
  }

  p + p{
    margin-top: 16px;
  }

  p em {
    font-family: 'Literata';
    font-style: normal;
  }

  h2{
    margin-bottom: 32px;
    font-family: 'Literata';
    font-weight: 400;
    font-size: clamp(${28 / 16}rem, ${36 / 7.68}vw, ${40 / 16}rem);
    line-height: 130%;
    letter-spacing: -0.01em;
    color: #0F3730;
    scroll-margin-top: 120px;
  }

  h3{
    margin-top: 32px;
    font-family: 'Literata';
    font-weight: 400;
    font-size: clamp(${22 / 16}rem, ${24 / 7.68}vw, ${24 / 16}rem);
    line-height: 158%;
    color: #12433A;
  }

  p, table{
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

    @media (max-width: 480px) {
      grid-template-columns: 1fr;
      grid-gap: 24px;
    }
  }

  table {
    border-spacing: 0 0;
    width: 100%;
    border: 1px solid var(--secondary-500);
    tr:not(:last-child) td {
      border-bottom: 1px solid var(--secondary-500);
    }
    td:not(:last-child){
      border-right: 1px solid var(--secondary-500);
    }
    td {
      padding: .5em 1em;
    }
  }

  figure{
   height: auto;
   width:100%;
   img{
    height: auto;
    width:100%;
   }
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

    > li{
      padding: clamp(16px, ${24 / 768 * 100}vw, 32px);
      border: 2px solid #4FD2BB;
      position: relative;
      counter-increment: my-awesome-counter;
      list-style: none;
      font-family: 'Literata';
      font-weight: 400;
      font-size: clamp(18px, ${21 / 768 * 100}vw, 24px);
      line-height: 158%;
      color: #12433A;

      br{
        content: "";
        margin: 12px;
        display: block;
      }

      strong{
        font-weight: 400;
        font-size: clamp(${24 / 16}rem, ${28 / 7.68}vw, ${32 / 16}rem);
        line-height: 131%;
        letter-spacing: -0.005em;
      }

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
        top: clamp(20px, ${24 / 768 * 100}vw, 32px);
        font-weight: 400;
        font-size: clamp(36px, ${50 / 768 * 100}vw, 54px);
        line-height: 111%;
        letter-spacing: -0.01em;
        color: #3DA290;
      }

      ol,ul{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 12px;
        
        @media (max-width: 540px) {
          grid-template-columns: 1fr;
        }
      }
    }
  }

  .cta-wrapper{
    text-align: center;
    margin: 64px 0;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: clamp(24px, ${42/768*100}vw, 42px) 32px clamp(43px, ${43/768*100}vw, 68px);
    overflow: hidden;
    max-width: 848px;

    span{
      display: block;
      svg{
        width: 100%;
      }
    }


    @media (max-width: 768px) {
      width: calc(100% + 34px);
      transform: translateX(-17px);
    }

    .gatsby-image-wrapper, .inline-gatsby-image-wrapper{
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
        margin: 0 auto;
        margin-top: 16px;
        margin-bottom: 20px;
        text-align: center;
        font-family: 'Literata';
        font-weight: 400;
        font-size: clamp(${18 / 16}rem, ${21 / 7.68}vw, ${24 / 16}rem);
        line-height: 158%;
        color: #12433A;
        max-width: 600px;
        @media (max-width: 420px) {
          margin: 0 auto 4px auto;
        }
      }

    .cta-content{
        position: relative;
        z-index: 2;
    }

  }

  .custom-list-icons{
      .custom-list-icons__title{
        h1,h2,h3,h4,h5,h6{
          font-family: 'Literata';
          font-weight: 400;
          font-size: clamp(${28 / 16}rem, ${36 / 7.68}vw, ${40 / 16}rem);
          line-height: 130%;
          letter-spacing: -0.01em;
          color: #0F3730;
        }
        p{
          font-family: 'Literata';
          font-size: clamp(${22 / 16}rem, ${24 / 7.68}vw, ${24 / 16}rem);
          line-height: 158%;
          color: #12433A;
        }
      }
      ul{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;

        @media (max-width: 540px) {
          grid-template-columns: 1fr;
        }
      }
      li{
        font-family: 'Lato';
        font-weight: 400;
        font-size: 20px;
        line-height: 150%;
        color: #12433A;
        display: grid;
        grid-template-columns: 24px 1fr;
        padding-left: 0;
        grid-gap: 8px;
        &::before{
          display: none;
        }
      }
    }

    
    .custom-list{
      .custom-list__title{
        *{
          font-family: 'Literata';
          font-weight: 400;
          font-size: clamp(${28 / 16}rem, ${36 / 7.68}vw, ${40 / 16}rem);
          line-height: 130%;
          text-align: center;
          letter-spacing: -0.01em;
          color: #0F3730;
        }
      }
      ul{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;

        @media (max-width: 540px) {
          grid-template-columns: 1fr;
        }
      }
      li{
        padding: 12px;
        font-family: 'Lato';
        font-weight: 400;
        font-size: 20px;
        line-height: 150%;
        color: #12433A;
        border: 1px solid #D8E1E3;
        &::before{
          display: none;
        }
      }
    }

    .tabs-list{
      max-width: unset;

      .first-tab-content{
        display: none;

        &.active{
          display: block;
        }
      }

      .second-tab-content{
        display: none;

        &.active{
          display: block;
        }
      }

      .tabs-list__title{
        font-family: 'Literata';
        font-weight: 400;
        font-size: 28px;
        line-height: 164%;
        color: #12433A;
        text-align: center;
      }

      .tabs-list__control{
        margin-top: 24px;
        display: grid;
        grid-template-columns: 1fr 1fr;

        @media (max-width: 540px) {
          grid-template-columns: 1fr;
        }

        button{
          padding: 24px 12px;
          font-family: 'Literata';
          font-weight: 400;
          font-size: clamp(${22 / 16}rem, ${24 / 7.68}vw, ${24 / 16}rem);
          line-height: 158%;
          text-align: center;
          color: #0F3730;
          border-bottom: 3px solid #BFCACD;

          &.active{
            border-bottom: 3px solid #3DA290;
          }
        }
      }

      ul{
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
        gap: 32px;

        li{
          padding-left: 0;
          width: calc(50% - 16px);
          background: #6FE8D2;
          display: grid;
          grid-template-columns: 78px 1fr;
          min-height: 122px;

          &:last-child:nth-child(odd){
            width: 100%;
          }

          .gcb-services-grid__img-container{
            background: #9CFFEE;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          p{
            padding-left: 32px;
            font-family: 'Literata';
            font-weight: 400;
            font-size: clamp(${22 / 16}rem, ${24 / 7.68}vw, ${24 / 16}rem);
            line-height: 138%;
            color: #0F3730;
            display: flex;
            align-items: center;
          }

          &::before{
            display: none;
          }
        }
      }
    }
`