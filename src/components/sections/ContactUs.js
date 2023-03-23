import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import { InputBorder, Ornament } from "../atoms/Icons";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "gatsby";

const ContactUs = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <Wrapper>
      <div className="info">
        <Ornament />
        <h2>Skontaktuj się z nami.</h2>
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
        <form action="">
          <h3>Dane kontaktowe</h3>
          <div className="form-input">
            <label>
              <span>Imię i nazwisko</span>
              <div className="input">
                <input type="text" name="name" />
                <InputBorder />
              </div>
            </label>
          </div>
          <div className="form-input">
            <label>
              <span>Adres e-mail</span>
              <span>(opcjonalne)</span>
              <div className="input">
                <input type="email" name="email" />
                <InputBorder />
              </div>
            </label>
          </div>
          <div className="form-input">
            <label>
              <span>Telefon</span>
              <div className="input">
                <input type="tel" name="tel" />
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
        </form>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin: clamp(${68/16}rem, ${98/7.68}vw, ${128/16}rem) 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${145/13.66}vw;
  h2 + p {
    margin: ${48/16}rem 0 ${24/16}rem;
    & + h3 {
      margin-bottom: 1rem;
    }
  }

  form h3 {
    &:first-of-type {
      margin-top: 0;
    }
    margin: ${32/16}rem 0 ${12/16}rem 0;
  }
  .form-input {
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
        svg {
          position: absolute;
          right: -5px;
          top: -5px;
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
          background: center / 80% no-repeat url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='13' fill='none'%3E%3Cpath stroke='%230F3730' stroke-linecap='square' stroke-width='1.5' d='M2 7.5c2.223 1.405 3.884 3.916 3.884 3.916h.033S9.445 5.173 16 1.334'/%3E%3C/svg%3E")
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
`
 
export default ContactUs;