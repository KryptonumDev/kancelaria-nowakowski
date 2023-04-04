import React, { useState } from "react";
import styled from "styled-components";
import { InputBorder, Ornament, RightArrow, SelectDropdown } from "../atoms/Icons";
import { Link } from "gatsby";
import { useForm } from "react-hook-form";
import axios from "axios";

const ContactUs = ({data}) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [sent, setSent] = useState(false);
  const url = 'https://kancelaria.headlesshub.com/wp-json/contact-form-7/v1/contact-forms/13/feedback';
  const onSubmit = data => {
    console.log(errors);
    let body = new FormData()
    body.append('email', data.email)
    body.append("phone", data.tel)
    body.append('fullname', data.name)
    body.append('subject', data.subject)
    body.append('date', data.date)

    axios.post(url, body)
    .then((res) => {
      if(res.status === 200){
        setSent(true)
        reset()
      } else {
        // toast('There was some problem with contact form, try later')
      }
    })
  }

  return (
    <Wrapper>
      <header className="header">
        <Ornament />
        <div dangerouslySetInnerHTML={{__html: data.sectionTitle}}></div>
      </header>
      <div className="content" dangerouslySetInnerHTML={{__html: data.contentUnderTitle}}>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3>Dane kontaktowe</h3>
          <div className="form-input">
            <label>
              <span>Imię i nazwisko</span>
              {errors.name && (
                <span role="alert" className="error">To pole jest wymagane</span>
              )}
              <div className="input">
                <input
                  type="text"
                  {...register("name", {required: true, maxLength: 80})}
                  aria-invalid={errors.name ? "true" : "false"}
                />
                <InputBorder />
              </div>
            </label>
          </div>
          <div className="form-input">
            <label>
              <span>Adres e-mail</span>
              {errors.email ? (
                <span role="alert" className="error">Nieprawidłowy adres e-mail</span>
              ) : (
                <span>(ocjonalnie)</span>
              )}
              <div className="input">
                <input
                  type="email"
                  {...register("email", {pattern: /^\S+@\S+$/i})}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                <InputBorder />
              </div>
            </label>
          </div>
          <div className="form-input">
            <label>
              <span>Telefon</span>
              {errors.tel && (
                <span role="alert" className="error">To pole jest wymagane</span>
              )}
              <div className="input">
                <input
                  type="tel"
                  {...register("tel", {required: true})}
                  aria-invalid={errors.tel ? "true" : "false"}
                />
                <InputBorder />
              </div>
            </label>
          </div>
          <h3>Temat i termin</h3>
          <div className="form-input">
            <label>
              <span>Wybierz temat:</span>
              {errors.subject && (
                <span role="alert" className="error">To pole jest wymagane</span>
              )}
              <div className="input">
                <select
                  {...register("subject", {required: true})}
                  aria-invalid={errors.subject ? "true" : "false"}
                >
                  <option value="odszkodowania">Odszkodowania</option>
                  <option value="odszkodowania">Odszkodowania</option>
                  <option value="odszkodowania">Odszkodowania</option>
                  <option value="odszkodowania">Odszkodowania</option>
                </select>
                <InputBorder />
                <SelectDropdown />
              </div>
            </label>
          </div>
          <div className="form-input">
            <label>
              <span>Wybierz datę i godzinę</span>
              {errors.date && (
                <span role="alert" className="error">To pole jest wymagane</span>
              )}
              <div className="input">
                <input
                  min={new Date().toISOString().slice(0,new Date().toISOString().lastIndexOf(":"))}
                  type="datetime-local"
                  {...register("date")}
                  aria-invalid={errors.date ? "true" : "false"}
                />
                <InputBorder />
              </div>
            </label>
          </div>
          <div className="form-input">
            <label>
              {errors.legal && (
                <span role="alert" className="error">To pole jest wymagane</span>
              )}
              <input
                type="checkbox"
                {...register("legal", {required: true})}
                aria-invalid={errors.legal ? "true" : "false"}
              />
              <span>Wyrażam zgodę na przetwarzanie moich danych osobowych na zasadach określonych w <Link to="/polityka-prywatnosci/">Polityce prywatności</Link></span>
            </label>
          </div>
          <button className="cta-primary" type="submit">
            <span>Wyślij</span>
            <RightArrow />
          </button>
        </form>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-areas: "header form" "content form";
  grid-template-columns: 1.2fr 1fr;
  column-gap: ${140/13.66}vw;
  row-gap: 42px;
  .header {
    grid-area: header;
    h2 {
      margin-top: ${32/16}rem;
    }
  }
  .content {
    grid-area: content;
    p {
      margin: 1rem 0;
      font-family: var(--serif);
      font-size: clamp(${22/16}rem, ${26/7.68}vw, ${24/16}rem);
      &:nth-of-type(2){
        font-size: clamp(${22/16}rem, ${26/7.68}vw, ${28/16}rem);
        em {
          font-size: clamp(${22/16}rem, ${26/7.68}vw, ${24/16}rem);
        }
      }
    }
    a {
      text-decoration: underline;
      text-decoration-color: var(--secondary-500);
    }
    ul {
      list-style-type: none;
      font-size: clamp(${21 / 16}rem, ${21 / 7.68}vw, ${24 / 16}rem);
      font-family: var(--serif);
      li {
        position: relative;
        padding-left: 36px;
        ::before {
          content: '';
          position: absolute;
          left: 0;
          top: 4px;
          width: 32px;
          height: 32px;
          background: center / cover no-repeat;
        }
      }
      > li {
        &:not(:last-child) {
          margin-bottom: 1rem;
        }
        &::before {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='33' fill='none'%3E%3Cpath stroke='%230F3730' strokeLinecap='round' stroke-linejoin='round' strokeWidth='1.5' d='M19.2 13.282a3.2 3.2 0 1 0-6.399-.002 3.2 3.2 0 0 0 6.4.002Z' clip-rule='evenodd'/%3E%3Cpath stroke='%230F3730' strokeLinecap='round' strokeWidth='1.5' d='M16 29.814c0-4.804-9.364-8.958-9.6-16.568C6.235 7.902 10.697 3.147 16 3.147c5.302 0 9.763 4.755 9.6 10.099-.238 7.766-9.6 11.636-9.6 16.568Z' clip-rule='evenodd'/%3E%3C/svg%3E");
        }
        > ul {
          margin-top: ${8 / 16}rem;
          li {
            &:not(:last-child) {
              margin-bottom: ${8 / 16}rem;
            }
            &::before {
              background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='33' fill='none'%3E%3Cpath stroke='%230F3730' strokeLinecap='square' strokeWidth='1.5' d='M26.665 16.48H5.332M19.12 24.027c0-3.88 3.416-7.547 7.546-7.547M19.12 8.934c0 3.88 3.416 7.546 7.546 7.546'/%3E%3C/svg%3E");
            }
          }
        }
      }
    }
  }
  .form  {
    grid-area: form;
    h3 {
      font-size: ${24 / 16}rem;
      margin: ${32 / 16}rem 0 ${12 / 16}rem 0;
      &:first-of-type {
        margin-top: 0;
      }
    }
    .form-input {
      &:nth-last-child(2) {
        margin: 2rem 0 1rem;
      }
      width: 100%;
      &:not(:last-child) {
        margin-bottom: ${12 / 16}rem;
      }
      label {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        span:first-child {
          font-size: ${20 / 16}rem;
          margin: 0 0 ${4 / 16}rem ${4 / 16}rem;
        }
        span:last-child {
          font-size: 1rem;
        }
        .error:not(:empty) {
          color:var(--error-800);
          & + .input {
            input {
              border-color: var(--error-800);
            } 
            .ornament {
              fill: var(--error-800);
            }
          }
        }
      }
      .input {
        width: 100%;
        height: 56px;
        position: relative;
        input, select {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 100%;
          border: 2px solid var(--secondary-600);
          padding: ${13 / 16}rem ${8 / 16}rem;
          &:focus + svg .ornament {
            fill: #f90;
          }
        }
        .border {
          position: absolute;
          right: -5px;
          top: -5px;
        }
        .dropdown {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
        }
      }
      input[type="checkbox"] {
        -webkit-appearance: none;
        appearance: none;
        width: unset;
        width: 24px;
        height: 24px;
        border: 2px solid var(--primary-900);
        &:checked {
          background: center / 80% no-repeat url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='13' fill='none'%3E%3Cpath stroke='%230F3730' strokeLinecap='square' strokeWidth='1.5' d='M2 7.5c2.223 1.405 3.884 3.916 3.884 3.916h.033S9.445 5.173 16 1.334'/%3E%3C/svg%3E")
        }
        & + span {
          width: calc(100% - 32px);
          font-size: ${14 / 16}rem;
          a {
            text-decoration: underline;
          }
        }
      }
    }
  }
  @media (max-width: 999px){
    grid-template-areas: "header" "form" "content";  
    grid-template-columns: 1fr;
    row-gap: ${42 / 16}rem;
    .header {
      text-align: center;
    }
    .form {
      max-width: 515px;
      margin: 0 auto;
    }
    .content {
      p {
        margin-top: 0;
      }
    }
  }
  @media (max-width: 549px){
    .header {
      text-align: left;
    }
  }
`

export default ContactUs;