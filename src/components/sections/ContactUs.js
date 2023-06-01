import React, { useState, useRef } from "react";
import styled from "styled-components";
import { InputBorder, Ornament, RightArrow, SelectDropdown } from "../atoms/Icons";
import { Link } from "gatsby";
import { useForm } from "react-hook-form";
import axios from "axios";

const ContactUs = ({data}) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [sent, setSent] = useState(false);
  const [formIsSending, setFormIsSending] = useState(false);

  const isBrowser = typeof window !== "undefined";
  const formSent = useRef();
  const getCookie = (cookieName) =>
    isBrowser
    ? document.cookie.split("; ").find((row) => row.startsWith(`${cookieName}`))?.split("=")[1]
    : '';

  const url = 'https://kancelaria.headlesshub.com/wp-json/contact-form-7/v1/contact-forms/13/feedback';
  const onSubmit = data => {
    let body = new FormData()
    body.append('email', data.email)
    body.append("phone", data.tel)
    body.append('fullname', data.name)
    body.append('subject', data.subject)
    body.append('date', data.date)
    setFormIsSending(true);

    axios.post(url, body)
    .then((res) => {
      if(res.status === 200){
        document.cookie = `sentCount=${getCookie('sentCount') ? Number(getCookie('sentCount'))+1 : 1};max-age=86400;path=/`;
        setSent(true);
        setFormIsSending(false);
        reset();
      } else {
        setFormIsSending(false);
        window.alert('Coś poszło nie tak. Proszę spróbować ponownie później.');
      }
    })
  }
  
  const sendAgain = () => {
    formSent.current.classList.add('hide');
    setTimeout(() => {
      formSent.current.classList.remove('hide');
      setSent(false);
      setTimeout(() => {
        document.querySelectorAll('form .anim').forEach(el => {
          el.classList.add('anim-active');
        })
      }, 400);
    }, 400);
  }

  return (
    <Wrapper>
      <header className="header">
        <Ornament />
        <div className="anim" dangerouslySetInnerHTML={{__html: data.sectionTitle}}></div>
      </header>
      <div className="content anim" dangerouslySetInnerHTML={{__html: data.contentUnderTitle}}>
      </div>
      <div className="form">
        {(sent || getCookie('sentCount') >= 3) ? (
          <div className="form-sent" ref={formSent}>
            <div>
              <h3>Wiadomość została wysłana pomyślnie. Oczekuj naszego telefonu.</h3>
              {(!getCookie('sentCount') || getCookie('sentCount') < 3) && (
                <button className="cta-secondary" onClick={sendAgain}>
                  <span>Wypełnij ponownie</span>
                  <RightArrow />
                </button>
              )}
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="anim">Dane kontaktowe</h3>
            <div className="form-input anim">
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
            <div className="form-input anim">
              <label>
                <span>Adres e-mail</span>
                {errors.email ? (
                  <span role="alert" className="error">Nieprawidłowy adres e-mail</span>
                ) : (
                  <span>(opcjonalnie)</span>
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
            <div className="form-input anim">
              <label>
                <span>Telefon</span>
                {errors.tel && (
                  <span role="alert" className="error">Wprowadź prawidłowy numer telefonu</span>
                )}
                <div className="input">
                  <input
                    type="tel"
                    {...register("tel", {required: true, pattern: /(\(?(\+|00)?48\)?)?[ -]?\d{3}[ -]?\d{3}[ -]?\d{3}(?!\w)/})}
                    aria-invalid={errors.tel ? "true" : "false"}
                  />
                  <InputBorder />
                </div>
              </label>
            </div>
            <h3 className="anim">Temat i termin</h3>
            <div className="form-input anim">
              <label>
                <span>Wybierz temat:</span>
                {errors.subject && (
                  <span role="alert" className="error">To pole jest wymagane</span>
                )}
                <div className="input">
                  <select
                    {...register("subject", {required: true})}
                    aria-invalid={errors.subject ? "true" : "false"}
                    defaultValue=""
                  >
                    <option value="" disabled>Wybierz temat...</option>
                    <option value="B2B">B2B</option>
                    <option value="Kredyty CHF">Kredyty CHF</option>
                    <option value="Hałas Lotniczy">Hałas lotniczy</option>
                    <option value="Sprawy Rozwodowe">Sprawy rozwodowe</option>
                    <option value="Proces sądowy">Proces sądowy</option>
                    <option value="Sprawy spadkowe">Sprawy spadkowe</option>
                    <option value="Odzkodowania">Odszkodowania</option>
                    <option value="Inne">Inne</option>
                  </select>
                  <InputBorder />
                  <SelectDropdown />
                </div>
              </label>
            </div>
            <div className="form-input anim">
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
            <div className="form-input legal anim">
              {errors.legal && (
                <span role="alert" className="error">To pole jest wymagane</span>
              )}
              <label>
                <input
                  type="checkbox"
                  {...register("legal", {required: true})}
                  aria-invalid={errors.legal ? "true" : "false"}
                />
                <span>Wyrażam zgodę na przetwarzanie moich danych osobowych na zasadach określonych w <Link to="/polityka-prywatnosci/">Polityce prywatności</Link></span>
              </label>
            </div>
            <button className="cta-primary anim" type="submit" disabled={formIsSending ? true : false}>
              <span>{formIsSending ? 'Wysyłanie...' : 'Wyślij'}</span>
              <RightArrow />
            </button>
          </form>
        )}
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
      &:hover {
        text-decoration-color: var(--primary-500);
      }
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
        &:first-of-type::before {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='25' fill='none' viewBox='0 0 24 25'%3E%3Cpath stroke='%230F3730' stroke-linecap='square' stroke-width='1' d='M17.817 21.842C8.667 22.26 1.854 11.887 2.8 6.826c.868-1.493 1.982-2.598 3.472-3.472l3.24 4.451L7.87 10.66s.453 1.906 2.161 3.614c1.793 1.792 3.793 2.34 3.793 2.34l2.854-1.643 4.61 3.4c-.857 1.532-1.939 2.614-3.471 3.472Z'/%3E%3C/svg%3E");
        }
        > ul {
          margin-top: ${8 / 16}rem;
          li {
            &:not(:last-child) {
              margin-bottom: ${8 / 16}rem;
            }
            &::before {
              background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='33' fill='none'%3E%3Cpath stroke='%230F3730' strokeLinecap='square' strokeWidth='1.5' d='M26.665 16.48H5.332M19.12 24.027c0-3.88 3.416-7.547 7.546-7.547M19.12 8.934c0 3.88 3.416 7.546 7.546 7.546'/%3E%3C/svg%3E") !important;
            }
          }
        }
      }
    }
  }
  .form {
    width: 100%;
    .form-sent {
      width: calc(100% + 34px);
      height: 100%;
      min-height: 750px;
      margin-left: -17px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--primary-400);
      padding: 0 2rem;
      h3 {
        font-size: clamp(${24/16}rem, ${32/7.68}vw, ${32/16}rem);
        margin-bottom: 1em;
      }
      animation: formSent .4s;
      transition: opacity .4s;
      &.hide {
        opacity: 0 !important;
      }
      @media (max-width: 699px){
        padding: 0 1rem;
      }
    }
    @keyframes formSent {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
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
        align-items: center;
        flex-wrap: wrap;
        span {
          padding: ${4 / 16}rem;
          padding-top: 0;
        }
        span:first-child {
          font-size: ${20 / 16}rem;
        }
        span:last-child {
          font-size: 1rem;
        }
      }
      .error:not(:empty) {
        color:var(--error-800);
        & + label,
        & + .input {
          input,
          select {
            border-color: var(--error-800);
          } 
          .ornament {
            fill: var(--error-800);
          }
        }
      }
      .input {
        width: 100%;
        height: 56px;
        position: relative;
        input, select {
          width: 100%;
          height: 100%;
          border: 2px solid var(--secondary-600);
          padding: ${13 / 16}rem ${8 / 16}rem;
          transition: border-color .4s;
          + .border .ornament {
            color: var(--secondary-600);
            transition: fill .4s;
          }
          &[type="datetime-local"]::-webkit-calendar-picker-indicator {
            width: 21px;
            height: 21px;
            padding: 13px;
            cursor: pointer;
            background: center / 21px no-repeat url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='25' fill='none'%3E%3Cpath stroke='%230F3730' stroke-linecap='square' stroke-width='1.5' d='M3.762 10.134h16.487M16.108 13.746h.008M12.004 13.746h.009M7.891 13.746H7.9M16.108 17.341h.008M12.004 17.341h.009M7.891 17.341H7.9M15.741 3.285v3.044M8.268 3.285v3.044'/%3E%3Cpath stroke='%230F3730' stroke-linecap='square' stroke-width='1.5' d='M20.326 4.745H3.676v17.04h16.65V4.744Z' clip-rule='evenodd'/%3E%3C/svg%3E");
          }
          &:hover {
            border-color: var(--secondary-800);
            + svg .ornament {
              fill: var(--secondary-800);
            }
          }
          &:focus-visible {
            box-shadow: none;
            border-color: var(--primary-800);
            + svg .ornament {
              fill: var(--primary-800);
            }
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
          pointer-events: none;
        }
      }
      &.legal {
        input {
          -webkit-appearance: none;
          appearance: none;
          width: unset;
          width: 24px;
          height: 24px;
          border: 2px solid var(--primary-900);
          &:checked {
            background: center / 80% no-repeat url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='13' fill='none'%3E%3Cpath stroke='%230F3730' stroke-linecap='square' stroke-width='1.5' d='M2 7.5c2.223 1.405 3.884 3.916 3.884 3.916h.033S9.445 5.173 16 1.334'/%3E%3C/svg%3E")
          }
          & + span {
            width: calc(100% - 32px);
            font-size: ${14 / 16}rem;
            a {
              text-decoration: underline;
              &:hover {
                text-decoration-color: var(--primary-500);
              }
            }
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