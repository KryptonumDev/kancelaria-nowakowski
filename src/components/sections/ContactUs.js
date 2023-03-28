import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { InputBorder, Ornament, RightArrow, SelectDropdown } from "../atoms/Icons";
import { Link } from "gatsby";

let didSubmit = false;
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    tel: '',
    type: '',
    message: '',
    legal: false,
    address: '',
  });
  const [formError, setFormError] = useState({
    name: '',
    email: '',
    tel: '',
    type: '',
    message: '',
    legal: '',
    error: '',
  })
  const [formSent, setFormSent] = useState(false);
  const [formIsSending, setFormIsSending] = useState(false);

  const validateData = useCallback(() => {
    let errors = {
      name: formData.name.trim().length === 0 ? 'Pole wymagane' : '',
      email:formData.email.trim().length === 0
            ? ''
            : (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(formData.email.toLowerCase())
            ? ''
            : 'Nieprawidłowy adres e-mail',
      tel: (/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{3,6}$/im).test(formData.tel.replaceAll(' ', '')) ? '' : 'Nieprawidłowy numer telefonu',
      type: formData.type.length === 0 ? 'Pole wymagane' : '',
      message: formData.message.trim().length === 0 ? 'Pole wymagane' : '',
      legal: formData.legal === false ? 'Zgoda jest wymagana' : ''
    }
    setFormError(errors);
    return errors;
  }, [formData]);

  const handleSubmit = (e) => {
    didSubmit = true;
    e.preventDefault();
    const validate = validateData();
    let isValidate = true;
    Object.keys(validate).forEach(key => validate[key] && (isValidate = false));
    if(isValidate){
      setFormIsSending(true);
      fetch(e.target.action, {
        method: 'POST', 
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(response => {
        setFormIsSending(false);
        if(response.success){
          document.cookie = `formSent=true;max-age=60;path=/`;
          setFormSent(true);
        } else {
          setFormError(prevState => ({...prevState, error: 'Błąd podczas wysyłania formularza, spróbuj ponownie później.'}))
        }
      })
      .catch(() => {
        setFormIsSending(false);
        setFormError(prevState => ({...prevState, error: 'Błąd podczas wysyłania formularza, spróbuj ponownie później.'}))
      })
    }
  }

  useEffect(() => {
    if(didSubmit){
      validateData();
    }
  }, [formData, validateData])

  return (
    <Wrapper>
      <header className="header">
        <Ornament />
        <h2>Skontaktuj się z nami.</h2>
      </header>
      <div className="content">
        <p>Potrzebujesz profesjonalnej porady prawnej? Jesteś zainteresowany stałą współpracą z naszą Kancelarią?</p>
        <h3>Wypełnij formularz kontaktowy, napisz lub zadzwoń. Jesteśmy do Twojej dyspozycji w poniedziałek od 9.00 do 18.00 wtorek - czwartek w godzinach od 9.00 do 17.00.  W piątek zapraszamy od 8.00 do 16.00.</h3>
        <ul>
          <li>Kancelaria w Łodzi Manu Park, ul. Ogrodowa 4, lok. 5, 91-062 Łódź. Zapraszamy w indywidualnie uzgodnionym terminie.</li>
          <li>Kancelaria w Łasku ul. Żeromskiego 8/4, 98-100 Łask.
            <ul>
              <li>Poniedziałek od 9.00 do 18.00</li>
              <li>Wtorek - czwartek od 9.00 do 17.00</li>
              <li>Piątek od 8.00 do 16.00</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="form">
        <form action="" onSubmit={handleSubmit}>
          <h3>Dane kontaktowe</h3>
          <div className="form-input">
            <label>
              <span>Imię i nazwisko</span>
              <span className="error">{formError.name}</span>
              <div className="input">
                <input
                  type="text"
                  name="name"
                  onChange={e => setFormData({
                    ...formData,
                    [e.target.name]: e.target.value
                  })}
                />
                <InputBorder />
              </div>
            </label>
          </div>
          <div className="form-input">
            <label>
              <span>Adres e-mail</span>
              {formError.email ? (
                <span className="error">{formError.email}</span>
              ) : (
                <span>(opcjonalne)</span>
              )}
              <div className="input">
                <input
                  type="email"
                  name="email"
                  onChange={e => setFormData({
                    ...formData,
                    [e.target.name]: e.target.value
                  })}
                />
                <InputBorder />
              </div>
            </label>
          </div>
          <div className="form-input">
            <label>
              <span>Telefon</span>
              <span className="error">{formError.tel}</span>
              <div className="input">
                <input
                  type="tel"
                  name="tel"
                  onChange={e => setFormData({
                    ...formData,
                    [e.target.name]: e.target.value
                  })}
                />
                <InputBorder />
              </div>
            </label>
          </div>
          <h3>Temat i termin</h3>
          <div className="form-input">
            <label>
              <span>Wybierz temat:</span>
              <div className="input">
                <select name="subject">
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
              <div className="input">
                <input type="datetime-local" name="date" />
                <InputBorder />
              </div>
            </label>
          </div>
          <div className="form-input">
            <label>
              <input type="checkbox" name="legal" />
              <span>Wyrażam zgodę na przetwarzanie moich danych osobowych na zasadach określonych w <Link to="/polityka-prywatnosci">Polityce prywatności</Link></span>
            </label>
          </div>
          <button type="submit">
            <span>Wyślij</span>
            <RightArrow />
          </button>
        </form>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin: clamp(${68/16}rem, ${98/7.68}vw, ${128/16}rem) 0;
  display: grid;
  grid-template-areas: "header form" "content form";
  grid-template-columns: 1.2fr 1fr;
  column-gap: ${140/13.66}vw;
  .header {
    grid-area: header;
    h2 {
      margin-top: ${32/16}rem;
    }
  }
  .content {
    grid-area: content;
    p {
      margin: ${48/16}rem 0 ${24/16}rem;
      font-family: var(--serif);
      font-size: clamp(${20/16}rem, ${24/13.66}vw, ${26/16}rem);
      & + h3 {
        margin-bottom: 1rem;
      }
    }
    ul {
      list-style-type: none;
      font-size: clamp(${21/16}rem, ${21/7.68}vw, ${24/16}rem);
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
          margin-top: ${8/16}rem;
          li {
            &:not(:last-child) {
              margin-bottom: ${8/16}rem;
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
      font-size: ${24/16}rem;
      margin: ${32/16}rem 0 ${12/16}rem 0;
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
        margin-bottom: ${12/16}rem;
      }
      label {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        span:first-child {
          font-size: ${20/16}rem;
          margin: 0 0 ${4/16}rem ${4/16}rem;
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
          padding: ${13/16}rem ${8/16}rem;
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
          font-size: ${14/16}rem;
          a {
            text-decoration: underline;
          }
        }
      }
    }
  }
  @media (max-width: 768px){
    grid-template-areas: "header" "form" "content";  
    grid-template-columns: 1fr;
    row-gap: ${42/16}rem;
    .content {
      p {
        margin-top: 0;
      }
    }
  }
`
 
export default ContactUs;