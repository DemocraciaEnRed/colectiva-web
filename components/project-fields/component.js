import React, { Component } from 'react'
import styled, { injectGlobal } from 'styled-components'
import fetch from 'isomorphic-unfetch'
import getConfig from 'next/config'
import DatePicker from 'react-datepicker'
import es from 'date-fns/locale/es'
import ProfileLabel from '../../elements/profile-label/component'
import EditorTitle from '../../elements/editor-title/component'
import WithDocumentTagsContext from '../../components/document-tags-context/component'
import WithUserContext from '../../components/with-user-context/component'
import ProfileTags from '../../elements/profile-tags/component'
const { publicRuntimeConfig: { API_URL } } = getConfig()

injectGlobal`
//--------------------------------------

  .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle, .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow,
.react-datepicker__month-read-view--down-arrow,
.react-datepicker__month-year-read-view--down-arrow {
  margin-left: -8px;
  position: absolute;
}

.react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle, .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow,
.react-datepicker__month-read-view--down-arrow,
.react-datepicker__month-year-read-view--down-arrow, .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before,
.react-datepicker__month-read-view--down-arrow::before,
.react-datepicker__month-year-read-view--down-arrow::before {
  box-sizing: content-box;
  position: absolute;
  border: 8px solid transparent;
  height: 0;
  width: 1px;
}

.react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before,
.react-datepicker__month-read-view--down-arrow::before,
.react-datepicker__month-year-read-view--down-arrow::before {
  content: "";
  z-index: -1;
  border-width: 8px;
  left: -8px;
  border-bottom-color: #aeaeae;
}

.react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle {
  top: 0;
  margin-top: -8px;
}

.react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle, .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle::before {
  border-top: none;
  border-bottom-color: #f0f0f0;
}

.react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle::before {
  top: -1px;
  border-bottom-color: #aeaeae;
}

.react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow,
.react-datepicker__month-read-view--down-arrow,
.react-datepicker__month-year-read-view--down-arrow {
  bottom: 0;
  margin-bottom: -8px;
}

.react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow,
.react-datepicker__month-read-view--down-arrow,
.react-datepicker__month-year-read-view--down-arrow, .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before,
.react-datepicker__month-read-view--down-arrow::before,
.react-datepicker__month-year-read-view--down-arrow::before {
  border-bottom: none;
  border-top-color: #fff;
}

.react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before,
.react-datepicker__month-read-view--down-arrow::before,
.react-datepicker__month-year-read-view--down-arrow::before {
  bottom: -1px;
  border-top-color: #aeaeae;
}

.react-datepicker-wrapper {
  display: inline-block;
}

.react-datepicker {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 0.8rem;
  background-color: #fff;
  color: #000;
  border: 1px solid #aeaeae;
  border-radius: 0.3rem;
  display: inline-block;
  position: relative;
}

.react-datepicker--time-only .react-datepicker__triangle {
  left: 35px;
}

.react-datepicker--time-only .react-datepicker__time-container {
  border-left: 0;
}

.react-datepicker--time-only .react-datepicker__time {
  border-radius: 0.3rem;
}

.react-datepicker--time-only .react-datepicker__time-box {
  border-radius: 0.3rem;
}

.react-datepicker__triangle {
  position: absolute;
  left: 50px;
}

.react-datepicker-popper {
  z-index: 1;
}

.react-datepicker-popper[data-placement^="bottom"] {
  margin-top: 10px;
}

.react-datepicker-popper[data-placement^="top"] {
  margin-bottom: 10px;
}

.react-datepicker-popper[data-placement^="right"] {
  margin-left: 8px;
}

.react-datepicker-popper[data-placement^="right"] .react-datepicker__triangle {
  left: auto;
  right: 42px;
}

.react-datepicker-popper[data-placement^="left"] {
  margin-right: 8px;
}

.react-datepicker-popper[data-placement^="left"] .react-datepicker__triangle {
  left: 42px;
  right: auto;
}

.react-datepicker__header {
  text-align: center;
  background-color: #f0f0f0;
  border-bottom: 1px solid #aeaeae;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
  padding-top: 8px;
  position: relative;
}

.react-datepicker__header--time {
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
}

.react-datepicker__year-dropdown-container--select,
.react-datepicker__month-dropdown-container--select,
.react-datepicker__month-year-dropdown-container--select,
.react-datepicker__year-dropdown-container--scroll,
.react-datepicker__month-dropdown-container--scroll,
.react-datepicker__month-year-dropdown-container--scroll {
  display: inline-block;
  margin: 0 2px;
}

.react-datepicker__current-month,
.react-datepicker-time__header,
.react-datepicker-year-header {
  margin-top: 0;
  color: #000;
  font-weight: bold;
  font-size: 0.944rem;
}

.react-datepicker-time__header {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.react-datepicker__navigation {
  background: none;
  line-height: 1.7rem;
  text-align: center;
  cursor: pointer;
  position: absolute;
  top: 10px;
  width: 0;
  padding: 0;
  border: 0.45rem solid transparent;
  z-index: 1;
  height: 10px;
  width: 10px;
  text-indent: -999em;
  overflow: hidden;
}

.react-datepicker__navigation--previous {
  left: 10px;
  border-right-color: #ccc;
}

.react-datepicker__navigation--previous:hover {
  border-right-color: #b3b3b3;
}

.react-datepicker__navigation--previous--disabled, .react-datepicker__navigation--previous--disabled:hover {
  border-right-color: #e6e6e6;
  cursor: default;
}

.react-datepicker__navigation--next {
  right: 10px;
  border-left-color: #ccc;
}

.react-datepicker__navigation--next--with-time:not(.react-datepicker__navigation--next--with-today-button) {
  right: 80px;
}

.react-datepicker__navigation--next:hover {
  border-left-color: #b3b3b3;
}

.react-datepicker__navigation--next--disabled, .react-datepicker__navigation--next--disabled:hover {
  border-left-color: #e6e6e6;
  cursor: default;
}

.react-datepicker__navigation--years {
  position: relative;
  top: 0;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.react-datepicker__navigation--years-previous {
  top: 4px;
  border-top-color: #ccc;
}

.react-datepicker__navigation--years-previous:hover {
  border-top-color: #b3b3b3;
}

.react-datepicker__navigation--years-upcoming {
  top: -4px;
  border-bottom-color: #ccc;
}

.react-datepicker__navigation--years-upcoming:hover {
  border-bottom-color: #b3b3b3;
}

.react-datepicker__month-container {
  float: left;
}

.react-datepicker__month {
  margin: 0.4rem;
  text-align: center;
}

.react-datepicker__month .react-datepicker__month-text {
  display: inline-block;
  width: 4rem;
  margin: 2px;
}

.react-datepicker__input-time-container {
  clear: both;
  width: 100%;
  float: left;
  margin: 5px 0 10px 15px;
  text-align: left;
}

.react-datepicker__input-time-container .react-datepicker-time__caption {
  display: inline-block;
}

.react-datepicker__input-time-container .react-datepicker-time__input-container {
  display: inline-block;
}

.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input {
  display: inline-block;
  margin-left: 10px;
}

.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input {
  width: 85px;
}

.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input[type="time"]::-webkit-inner-spin-button,
.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input[type="time"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input[type="time"] {
  -moz-appearance: textfield;
}

.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__delimiter {
  margin-left: 5px;
  display: inline-block;
}

.react-datepicker__time-container {
  float: right;
  border-left: 1px solid #aeaeae;
  width: 70px;
}

.react-datepicker__time-container--with-today-button {
  display: inline;
  border: 1px solid #aeaeae;
  border-radius: 0.3rem;
  position: absolute;
  right: -72px;
  top: 0;
}

.react-datepicker__time-container .react-datepicker__time {
  position: relative;
  background: white;
}

.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box {
  width: 70px;
  overflow-x: hidden;
  margin: 0 auto;
  text-align: center;
}

.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list {
  list-style: none;
  margin: 0;
  height: calc(195px + (1.7rem / 2));
  overflow-y: scroll;
  padding-right: 0px;
  padding-left: 0px;
  width: 100%;
  box-sizing: content-box;
}

.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item {
  height: 30px;
  padding: 5px 10px;
}

.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item:hover {
  cursor: pointer;
  background-color: #f0f0f0;
}

.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected {
  background-color: #216ba5;
  color: white;
  font-weight: bold;
}

.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected:hover {
  background-color: #216ba5;
}

.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--disabled {
  color: #ccc;
}

.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--disabled:hover {
  cursor: default;
  background-color: transparent;
}

.react-datepicker__week-number {
  color: #ccc;
  display: inline-block;
  width: 1.7rem;
  line-height: 1.7rem;
  text-align: center;
  margin: 0.166rem;
}

.react-datepicker__week-number.react-datepicker__week-number--clickable {
  cursor: pointer;
}

.react-datepicker__week-number.react-datepicker__week-number--clickable:hover {
  border-radius: 0.3rem;
  background-color: #f0f0f0;
}

.react-datepicker__day-names,
.react-datepicker__week {
  white-space: nowrap;
}

.react-datepicker__day-name,
.react-datepicker__day,
.react-datepicker__time-name {
  color: #000;
  display: inline-block;
  width: 1.7rem;
  line-height: 1.7rem;
  text-align: center;
  margin: 0.166rem;
}

.react-datepicker__month--selected, .react-datepicker__month--in-selecting-range, .react-datepicker__month--in-range {
  border-radius: 0.3rem;
  background-color: #216ba5;
  color: #fff;
}

.react-datepicker__month--selected:hover, .react-datepicker__month--in-selecting-range:hover, .react-datepicker__month--in-range:hover {
  background-color: #1d5d90;
}

.react-datepicker__month--disabled {
  color: #ccc;
  pointer-events: none;
}

.react-datepicker__month--disabled:hover {
  cursor: default;
  background-color: transparent;
}

.react-datepicker__day,
.react-datepicker__month-text {
  cursor: pointer;
}

.react-datepicker__day:hover,
.react-datepicker__month-text:hover {
  border-radius: 0.3rem;
  background-color: #f0f0f0;
}

.react-datepicker__day--today,
.react-datepicker__month-text--today {
  font-weight: bold;
}

.react-datepicker__day--highlighted,
.react-datepicker__month-text--highlighted {
  border-radius: 0.3rem;
  background-color: #3dcc4a;
  color: #fff;
}

.react-datepicker__day--highlighted:hover,
.react-datepicker__month-text--highlighted:hover {
  background-color: #32be3f;
}

.react-datepicker__day--highlighted-custom-1,
.react-datepicker__month-text--highlighted-custom-1 {
  color: magenta;
}

.react-datepicker__day--highlighted-custom-2,
.react-datepicker__month-text--highlighted-custom-2 {
  color: green;
}

.react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range,
.react-datepicker__month-text--selected,
.react-datepicker__month-text--in-selecting-range,
.react-datepicker__month-text--in-range {
  border-radius: 0.3rem;
  background-color: #216ba5;
  color: #fff;
}

.react-datepicker__day--selected:hover, .react-datepicker__day--in-selecting-range:hover, .react-datepicker__day--in-range:hover,
.react-datepicker__month-text--selected:hover,
.react-datepicker__month-text--in-selecting-range:hover,
.react-datepicker__month-text--in-range:hover {
  background-color: #1d5d90;
}

.react-datepicker__day--keyboard-selected,
.react-datepicker__month-text--keyboard-selected {
  border-radius: 0.3rem;
  background-color: #2a87d0;
  color: #fff;
}

.react-datepicker__day--keyboard-selected:hover,
.react-datepicker__month-text--keyboard-selected:hover {
  background-color: #1d5d90;
}

.react-datepicker__day--in-selecting-range ,
.react-datepicker__month-text--in-selecting-range {
  background-color: rgba(33, 107, 165, 0.5);
}

.react-datepicker__month--selecting-range .react-datepicker__day--in-range , .react-datepicker__month--selecting-range
.react-datepicker__month-text--in-range {
  background-color: #f0f0f0;
  color: #000;
}

.react-datepicker__day--disabled,
.react-datepicker__month-text--disabled {
  cursor: default;
  color: #ccc;
}

.react-datepicker__day--disabled:hover,
.react-datepicker__month-text--disabled:hover {
  background-color: transparent;
}

.react-datepicker__month-text.react-datepicker__month--selected:hover, .react-datepicker__month-text.react-datepicker__month--in-range:hover {
  background-color: #216ba5;
}

.react-datepicker__month-text:hover {
  background-color: #f0f0f0;
}

.react-datepicker__input-container {
  position: relative;
  display: inline-block;
}
.react-datepicker__input-container > input {
  //Ourcode
   width: 100%;
  height: 40px;
  border: solid 1px #dae1e7;
  background-color: #ffffff;
  font-size: 1.4rem;
  line-height: 1.5rem;
  color: #203340;
  margin-top: 10px;
  padding: 14px;
}


.react-datepicker__year-read-view,
.react-datepicker__month-read-view,
.react-datepicker__month-year-read-view {
  border: 1px solid transparent;
  border-radius: 0.3rem;
}

.react-datepicker__year-read-view:hover,
.react-datepicker__month-read-view:hover,
.react-datepicker__month-year-read-view:hover {
  cursor: pointer;
}

.react-datepicker__year-read-view:hover .react-datepicker__year-read-view--down-arrow,
.react-datepicker__year-read-view:hover .react-datepicker__month-read-view--down-arrow,
.react-datepicker__month-read-view:hover .react-datepicker__year-read-view--down-arrow,
.react-datepicker__month-read-view:hover .react-datepicker__month-read-view--down-arrow,
.react-datepicker__month-year-read-view:hover .react-datepicker__year-read-view--down-arrow,
.react-datepicker__month-year-read-view:hover .react-datepicker__month-read-view--down-arrow {
  border-top-color: #b3b3b3;
}

.react-datepicker__year-read-view--down-arrow,
.react-datepicker__month-read-view--down-arrow,
.react-datepicker__month-year-read-view--down-arrow {
  border-top-color: #ccc;
  float: right;
  margin-left: 20px;
  top: 8px;
  position: relative;
  border-width: 0.45rem;
}

.react-datepicker__year-dropdown,
.react-datepicker__month-dropdown,
.react-datepicker__month-year-dropdown {
  background-color: #f0f0f0;
  position: absolute;
  width: 50%;
  left: 25%;
  top: 30px;
  z-index: 1;
  text-align: center;
  border-radius: 0.3rem;
  border: 1px solid #aeaeae;
}

.react-datepicker__year-dropdown:hover,
.react-datepicker__month-dropdown:hover,
.react-datepicker__month-year-dropdown:hover {
  cursor: pointer;
}

.react-datepicker__year-dropdown--scrollable,
.react-datepicker__month-dropdown--scrollable,
.react-datepicker__month-year-dropdown--scrollable {
  height: 150px;
  overflow-y: scroll;
}

.react-datepicker__year-option,
.react-datepicker__month-option,
.react-datepicker__month-year-option {
  line-height: 20px;
  width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.react-datepicker__year-option:first-of-type,
.react-datepicker__month-option:first-of-type,
.react-datepicker__month-year-option:first-of-type {
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
}

.react-datepicker__year-option:last-of-type,
.react-datepicker__month-option:last-of-type,
.react-datepicker__month-year-option:last-of-type {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border-bottom-left-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
}

.react-datepicker__year-option:hover,
.react-datepicker__month-option:hover,
.react-datepicker__month-year-option:hover {
  background-color: #ccc;
}

.react-datepicker__year-option:hover .react-datepicker__navigation--years-upcoming,
.react-datepicker__month-option:hover .react-datepicker__navigation--years-upcoming,
.react-datepicker__month-year-option:hover .react-datepicker__navigation--years-upcoming {
  border-bottom-color: #b3b3b3;
}

.react-datepicker__year-option:hover .react-datepicker__navigation--years-previous,
.react-datepicker__month-option:hover .react-datepicker__navigation--years-previous,
.react-datepicker__month-year-option:hover .react-datepicker__navigation--years-previous {
  border-top-color: #b3b3b3;
}

.react-datepicker__year-option--selected,
.react-datepicker__month-option--selected,
.react-datepicker__month-year-option--selected {
  position: absolute;
  left: 15px;
}

.react-datepicker__close-icon {
  background-color: transparent;
  border: 0;
  cursor: pointer;
  outline: 0;
  padding: 0;
  vertical-align: middle;
  position: absolute;
  height: 16px;
  width: 16px;
  top: 25%;
  right: 7px;
}

.react-datepicker__close-icon::after {
  background-color: #216ba5;
  border-radius: 50%;
  bottom: 0;
  box-sizing: border-box;
  color: #fff;
  content: "\00d7";
  cursor: pointer;
  font-size: 12px;
  height: 16px;
  width: 16px;
  line-height: 1;
  margin: -8px auto 0;
  padding: 2px;
  position: absolute;
  right: 0px;
  text-align: center;
}

.react-datepicker__today-button {
  background: #f0f0f0;
  border-top: 1px solid #aeaeae;
  cursor: pointer;
  text-align: center;
  font-weight: bold;
  padding: 5px 0;
  clear: left;
}

.react-datepicker__portal {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  left: 0;
  top: 0;
  justify-content: center;
  align-items: center;
  display: flex;
  z-index: 2147483647;
}

.react-datepicker__portal .react-datepicker__day-name,
.react-datepicker__portal .react-datepicker__day,
.react-datepicker__portal .react-datepicker__time-name {
  width: 3rem;
  line-height: 3rem;
}

@media (max-width: 400px), (max-height: 550px) {
  .react-datepicker__portal .react-datepicker__day-name,
  .react-datepicker__portal .react-datepicker__day,
  .react-datepicker__portal .react-datepicker__time-name {
    width: 2rem;
    line-height: 2rem;
  }
}

.react-datepicker__portal .react-datepicker__current-month,
.react-datepicker__portal .react-datepicker-time__header {
  font-size: 1.44rem;
}

.react-datepicker__portal .react-datepicker__navigation {
  border: 0.81rem solid transparent;
}

.react-datepicker__portal .react-datepicker__navigation--previous {
  border-right-color: #ccc;
}

.react-datepicker__portal .react-datepicker__navigation--previous:hover {
  border-right-color: #b3b3b3;
}

.react-datepicker__portal .react-datepicker__navigation--previous--disabled, .react-datepicker__portal .react-datepicker__navigation--previous--disabled:hover {
  border-right-color: #e6e6e6;
  cursor: default;
}

.react-datepicker__portal .react-datepicker__navigation--next {
  border-left-color: #ccc;
}

.react-datepicker__portal .react-datepicker__navigation--next:hover {
  border-left-color: #b3b3b3;
}

.react-datepicker__portal .react-datepicker__navigation--next--disabled, .react-datepicker__portal .react-datepicker__navigation--next--disabled:hover {
  border-left-color: #e6e6e6;
  cursor: default;
}
`

const InputField = styled.input`
  width: 100%;
  height: 40px;
  border: solid 1px #dae1e7;
  background-color: #ffffff;
  font-size: 1.4rem;
  line-height: 1.5rem;
  color: #203340;
  margin-top: 10px;
  padding: 14px;
  &:read-only,
  &:disabled {
    cursor: not-allowed;
    background-color: #f7f7f7
  }
`

const SelectField = styled.select`
  width: 100%;
  height: 50px;
  border: solid 1px #dae1e7;
  background-color: #ffffff;
  font-size: 16px;
  line-height: 1rem;
  color: #203340;
  margin-top: 10px;
  padding: 11px 15px;
  &:read-only,
  // &:disabled {
  //   cursor: not-allowed;
  //   background-color: #f7f7f7
  // }
`

const TextareaField = styled.textarea`
  width: 100%;
  min-height: 250px;
  border: solid 1px #dae1e7;
  background-color: #ffffff;
  font-size: 1.4rem;
  line-height: 2.1rem;
  color: #203340;
  margin-top: 10px;
  padding: 14px;
  &:read-only,
  &:disabled {
    cursor: not-allowed;
    background-color: #f7f7f7
  }
`

const SpanOk = styled.span`
  color: #808181;
  font-size: 0.9em;
  line-height: 1.5em;
  margin-top: 0.8em;
`
const SpanDanger = styled.span`
  margin-top: 0.8em;
  color: red;
`

const EditField = styled.div`
  border: 1px solid #dae1e7;
  padding: 2.5em 2.5em 1em;
  margin-bottom: 2em;
`

const TagsNotificationCheckboxDiv = styled.div`
  margin-top: 0.8em;
  /*color: ${(props) => props.publishedMailSent ? '#666' : 'inherit'}*/
  & > input {
    position: relative;
    top: 2px;
  }
`

class ProjectFields extends Component {
  state = {
    title: null,
    authorFullname: null,
    authorRole: null,
    authorAvatar: null,
    authorBio: null,
    status: null,
    closingDate: null,
    imageCover: null,
    youtubeId: null,
    customVideoId: null,
    youtubeURL: null,
    closure: null,
    privateProject: null,
    allowed: null,
    allowedUsers: [],
    searchedUsers: [],
    inputSearchUser: '',
    userSearchType: 'name',
    loadingAllowedUsers: true,
    loadingSearchUser: false,
    tags: [],
    allTags: [],
    tagsMaxReached: false,
    sendTagsNotification: null,
    publishedMailSent: null
  }

  componentDidMount () {
    let {
      title,
      authorFullname,
      authorRole,
      authorAvatar,
      authorBio,
      status,
      closingDate,
      imageCover,
      youtubeId,
      customVideoId,
      closure,
      tags,
      privateProject,
      allowed,
      sendTagsNotification,
      publishedMailSent
    } = this.props

    this.setState({
      title,
      authorFullname: authorFullname || null,
      authorRole: authorRole || null,
      authorAvatar: authorAvatar || null,
      authorBio: authorBio || null,
      status: status || null,
      imageCover,
      youtubeId,
      youtubeURL: youtubeId ? 'https://www.youtube.com/watch?v=' + youtubeId : '',
      customVideoId: customVideoId || null,
      closingDate: new Date(closingDate.split('T')[0].replace(/-/g, '\/')),
      closure: closure || null,
      tags: tags || [],
      privateProject: privateProject === true ? 'true' : 'false',
      allowed: allowed || [],
      sendTagsNotification,
      publishedMailSent
    }, () => {
      this.props.setNewFields(this.getBodyPayload())
      this.fetchAllowedUsers()
      this.props.fetchDocumentTags().then((documentTags) => {
        const parsedTags = documentTags.map((documentTag) => ({ id: documentTag._id, text: documentTag.name }))
        this.setState({
          allTags: parsedTags
        })
      })
    })

    console.log(new Date(closingDate))
    console.log(new Date(Date.parse(closingDate)))
    console.log(closingDate)
  }

  fetchAllowedUsers = () => {
    console.log('fetchAllowedUsers')
    const { allowed } = this.state
    if (allowed.length > 0) {
      this.setState({
        loadingAllowedUsers: true
      })
      fetch(`${API_URL}/api/v1/users/list?ids=${allowed.join(',')}&limit=20`, {
        headers: {
          Authorization: `Bearer ${this.props.authContext.keycloak.token}`,
          'Content-Type': 'application/json'
        },
        method: 'GET'
      })
        .then((res) => res.json())
        .then((res) => {
          this.setState({
            allowedUsers: res,
            loadingAllowedUsers: false
          })
        })
        .catch((err) => {
          console.error(err)
        })
    } else {
      this.setState({
        allowedUsers: [],
        loadingAllowedUsers: false
      })
      console.log('no allowed users')
    }
  }

  searchUsers = (type) => {
    console.log('searchUsers')
    const { inputSearchUser } = this.state
    if (inputSearchUser.length > 3) {
      this.setState({
        usersSearch: [],
        loadingSearchUser: true
      })
      let url = null
      if (type === 'email') {
        url = `${API_URL}/api/v1/users/search?email=${inputSearchUser}&limit=20`
      } else {
        url = `${API_URL}/api/v1/users/search?name=${inputSearchUser}&limit=20`
      }
      fetch(url, {
        headers: {
          Authorization: `Bearer ${this.props.authContext.keycloak.token}`,
          'Content-Type': 'application/json'
        },
        method: 'GET'
      })
        .then((res) => res.json())
        .then((res) => {
          this.setState({
            searchedUsers: res,
            loadingSearchUser: false
          })
        })
        .catch((err) => {
          console.error(err)
        })
    } else {
      this.setState({
        searchedUsers: [],
        loadingSearchUser: false
      })
      console.log('no users found')
    }
  }

  addUserToAllowedUsers = (user) => {
    console.log('addUsersToAllowedUsers')
    const { allowedUsers } = this.state
    // check if user is already in allowedUsers
    if (allowedUsers.filter((allowedUser) => allowedUser._id === user._id).length === 0) {
      this.setState({
        allowedUsers: [...allowedUsers, user]
      }, () => {
        this.props.setNewFields(this.getBodyPayload())
      })
    }
  }

  removeUserFromAllowedUsers = (user) => {
    console.log('removeUserFromAllowedUsers')
    const { allowedUsers } = this.state
    this.setState({
      allowedUsers: allowedUsers.filter((allowedUser) => allowedUser._id !== user._id)
    }, () => {
      this.props.setNewFields(this.getBodyPayload())
    })
  }

  getBodyPayload = () => {
    return {
      title: this.state.title,
      authorFullname: this.state.authorFullname,
      authorRole: this.state.authorRole,
      authorAvatar: this.state.authorAvatar || null,
      authorBio: this.state.authorBio,
      status: this.state.status === '' ? null : this.state.status,
      imageCover: this.state.imageCover,
      closingDate: new Date(this.state.closingDate).toISOString(),
      youtubeId: this.state.youtubeId,
      customVideoId: this.state.customVideoId,
      closure: this.state.closure,
      private: this.state.privateProject === 'true',
      allowed: this.state.allowedUsers.map((user) => user._id),
      tags: this.state.tags,
      sendTagsNotification: this.state.sendTagsNotification
    }
  }

  handleInputChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]: value
    }, () => this.props.setNewFields(this.getBodyPayload()))
  }
  handleDateChange = (date) => {
    console.log(date)
    this.setState({
      closingDate: date.toISOString().split('T')[0].replace(/-/g, '\/')
    }, () => this.props.setNewFields(this.getBodyPayload()))
  }

  parseVideoId = () => {
    let videoID = this.state.youtubeURL.split('v=')[1] || null
    if (videoID) {
      let ampersandPosition = videoID.indexOf('&')
      if (ampersandPosition !== -1) {
        videoID = videoID.substring(0, ampersandPosition)
      }
    }
    this.setState({
      youtubeId: videoID
    }, () => {
      this.props.setNewFields(this.getBodyPayload())
    })
  }

  handleInputChangeYoutube = (e) => {
    const target = e.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value
    }, () => {
      this.parseVideoId()
    })
  }

  handleTagClick = (tag) => {
    if (this.state.tagsMaxReached) { this.setState({ tagsMaxReached: false }) }

    const clickedTagId = tag._id
    const callback = () => this.props.setNewFields(this.getBodyPayload())
    if (this.state.tags.includes(clickedTagId)) { this.setState((prevState) => ({ tags: prevState.tags.filter((tagId) => tagId != clickedTagId) }), callback) } else {
      if (this.state.tags.length == 5) { this.setState({ tagsMaxReached: true }) } else { this.setState((prevState) => ({ tags: prevState.tags.concat(clickedTagId) }), callback) }
    }
  }

  toggleTagsNotificationCheckbox = () => {
    this.setState(({ sendTagsNotification }) => (
      {
        sendTagsNotification: !sendTagsNotification
      }
    ), () => this.props.setNewFields(this.getBodyPayload()))
  }

  render () {
    const tagsLoaded = this.state.allTags.length > 0
    let tags
    if (!tagsLoaded) { tags = [] } else { tags = this.state.tags.map((tagId) => this.state.allTags.find((tag) => tag.id == tagId)).filter((t) => t != undefined) }

    return (
      <EditField>
        <EditorTitle>Datos del proyecto</EditorTitle>
        <ProfileLabel>
          Título del proyecto:
          <InputField
            type='text'
            value={this.state.title}
            name='title'
            onChange={this.handleInputChange}
            placeholder='Hacer uso correcto de mayúsculas y minúsculas' />
        </ProfileLabel>
        <ProfileLabel>
          Nombre y Apellido de la autora o el autor:
          <InputField
            type='text'
            value={this.state.authorFullname}
            name='authorFullname'
            onChange={this.handleInputChange}
            placeholder='Hacer uso correcto de mayúsculas y minúsculas' />
          <SpanOk><b><u>REQUERIDO</u></b> para que aparezca el cuadro de Bio de la autora/autor del proyecto.</SpanOk>

        </ProfileLabel>
        <ProfileLabel>
          Cargo de la autora o el autor:
          <InputField
            type='text'
            value={this.state.authorRole}
            name='authorRole'
            onChange={this.handleInputChange}
            placeholder='Hacer uso correcto de mayúsculas y minúsculas' />
          <SpanOk><b><u>REQUERIDO</u></b> para que aparezca el cuadro de Bio de la autora/autor del proyecto.</SpanOk>

        </ProfileLabel>
        <ProfileLabel>
          (Opcional) URL para el avatar de la autora o autor:
          <InputField
            type='text'
            value={this.state.authorAvatar}
            name='authorAvatar'
            onChange={this.handleInputChange}
            placeholder='(OPCIONAL) Nota: Debe ser una URL valida' />
        </ProfileLabel>
        <ProfileLabel>
          Bio de la autora o autor:
          <TextareaField
            value={this.state.authorBio}
            name='authorBio'
            onChange={this.handleInputChange}
            placeholder='Escriba aquí el texto que será la bio de la autora o autor' />
          <SpanOk><b><u>REQUERIDO</u></b> para que aparezca el cuadro de Bio de la autora/autor del proyecto.</SpanOk>

        </ProfileLabel>
        <ProfileLabel>
          Privacidad del proyecto:
          <SelectField
            value={this.state.privateProject}
            name='privateProject'
            onChange={this.handleInputChange}>
            <option value='false'>Público (Todos pueden ver y participar)</option>
            <option value='true'>Privado (Seleccione que usuarios participan)</option>
          </SelectField>
        </ProfileLabel>
        {
          this.state.privateProject == 'true' && (
            <div style={{ border: '1px solid #cacaca', margin: '3px 0', padding: '0 15px', paddingBottom: '15px' }}>
              <ProfileLabel>
                <div><b>PROYECTO PRIVADO //</b> Buscar usuario por nombre o email:</div>
                <div style={{fontSize: '12px', margin: '4px 0px'}}><i>Nota: Se limitan hasta 20 resultados.</i></div>
                <InputField
                  type='text'
                  value={this.state.inputSearchUser}
                  name='inputSearchUser'
                  onChange={this.handleInputChange}
                  placeholder='Ingrese aqui un nombre, apellido o el comienzo de un email' />
                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', margin: '3px 0px' }}>
                  <div onClick={() => this.searchUsers('name')} style={{ border: '1px solid #cacaca', width: '100%', marginRight: '2px', padding: '4px', borderRadius: '0', textAlign: 'center', cursor: 'pointer', backgroundColor: '#f5f5f5' }}>
                  Buscar por NOMBRE o APELLIDO</div>
                  <div onClick={() => this.searchUsers('email')} style={{ border: '1px solid #cacaca', width: '100%', marginLeft: '2px', padding: '4px', borderRadius: '0', textAlign: 'center', cursor: 'pointer', backgroundColor: '#f5f5f5' }}>
                  Buscar por EMAIL</div>
                </div>
              </ProfileLabel>
              {
                this.state.loadingSearchUser && (
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5', padding: '10px', borderRadius: '5px' }}>
                    <div>Cargando...</div>
                  </div>
                )
              }
              {
                !this.state.loadingSearchUser && this.state.searchedUsers.length == 0 && (
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5', padding: '10px', borderRadius: '5px' }}>
                    <div>No se encontraron usuarios</div>
                  </div>
                )
              }
              {
                !this.state.loadingSearchUser && this.state.searchedUsers.length > 0 && (
                  <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexWrap: 'wrap' }}>
                    {this.state.searchedUsers.map((user) => (
                      <div key={`user-to-add-with-id-${user._id}`} style={{ display: 'flex', justifyContent: 'flex-start', backgroundColor: '#FFF', alignItems: 'center', margin: '3px 3px', border: '1px solid #cacaca', borderRadius: '5px', padding: '7px 14px' }}>
                        <img src={user.avatar} style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '5px' }} />
                        <div style={{ lineHeight: '1' }}><b>{user.fullname}</b><br /><span style={{ fontSize: '11px', lineHeight: '1' }}><i>{user.email}</i></span></div>
                        <div onClick={() => this.addUserToAllowedUsers(user)} style={{ border: '1px solid green', color: 'green', padding: '1px 10px', fontSize: '12px', borderRadius: '5px', marginLeft: '10px', cursor: 'pointer'}}>Añadir</div>
                      </div>
                    ))}
                  </div>
                )
              }  
            </div>
          )
        }
        {
          this.state.privateProject == 'true' && (
            <div style={{ border: '1px solid #cacaca', margin: '3px 0', padding: '0 15px' }}>
              <ProfileLabel>
                <div sytle={{ marginBottom: '7px' }}><b>PROYECTO PRIVADO //</b> Usuarios habilitados para participar:</div>
                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexWrap: 'wrap', marginTop: '10px' }}>
                  {this.state.allowedUsers.map((user) => (
                    <div key={`user-with-id-${user._id}`} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', margin: '3px 3px', border: '1px solid #cacaca', borderRadius: '5px', padding: '7px 14px' }}>
                      <img src={user.avatar} style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '10px' }} />
                      <div style={{ lineHeight: '1' }}><b>{user.fullname}</b><br /><span style={{ fontSize: '11px', lineHeight: '1' }}><i>{user.email}</i></span></div>
                      <div onClick={() => this.removeUserFromAllowedUsers(user)} style={{ border: '1px solid red', color: 'red', padding: '1px 10px', fontSize: '12px', borderRadius: '5px', marginLeft: '10px', cursor: 'pointer' }}>
                        Quitar</div>
                    </div>
                  ))}
                  {
                    this.state.allowedUsers.length == 0 && (
                      <div style={{ margin: '3px 3px', border: '1px solid #cacaca', padding: '7px 14px' }}>
                        <span style={{ lineHeight: '1' }}><b>No hay usuarios habilitados</b></span>
                      </div>
                    )
                  }
                </div>
              </ProfileLabel>
            </div>
          )
        }
        <ProfileLabel>
          Estado del proyecto:
          {/* <InputField
            type='text'
            value={this.state.status}
            name='status'
            onChange={this.handleInputChange}
            placeholder='Hacer uso correcto de mayúsculas y minúsculas' /> */}
          <SelectField
            value={this.state.status}
            name='status'
            onChange={this.handleInputChange}>
            <option value=''>- Sin estado -</option>
            <option value='1-en-construccion'>1. En construcción</option>
            <option value='2-radicacion'>2. Radicación</option>
            <option value='3-primer-debate'>3. Primer debate</option>
            <option value='4-segundo-debate'>4. Segundo debate</option>
            <option value='5-tercer-debate'>5. Tercer debate</option>
            <option value='6-cuarto-debate'>6. Cuarto debate</option>
            <option value='7-sancion-presidencial'>7. Sanción presidencial</option>
            <option value='8-en-revision'>8. En revisión</option>
            <option value='9-es-ley'>9. Es ley</option>
          </SelectField>
        </ProfileLabel>
        <ProfileLabel>
          Ingrese la URL para la imagen de encabezado:
          <InputField
            type='text'
            value={this.state.imageCover}
            name='imageCover'
            onChange={this.handleInputChange} />
        </ProfileLabel>
        <ProfileLabel>
          Fecha de cierre del proyecto:
          {/* <InputField
            type='date'
            value={this.state.closingDate}
            name='closingDate'
            onChange={this.handleInputChange} /> */}
          <DatePicker
            selected={new Date(this.state.closingDate)}
            name='closingDate'
            dateFormat='yyyy-MM-dd'
            locale={es}
            onChange={this.handleDateChange} />
          {this.state.closingDate
            ? <SpanOk>La fecha de cierre será el: {new Date(this.state.closingDate).toISOString().split('T')[0]}<br />NOTA: El documento se cerrará automáticamente llegada la fecha de cierre</SpanOk>
            : <SpanDanger>Debe definir una fecha de cierre</SpanDanger>
          }
        </ProfileLabel>
        {/* <ProfileLabel>
          Ingrese el link del video (Reproductor oficial HCDN) (Opcional)
          <InputField
            type='text'
            name='customVideoId'
            value={this.state.customVideoId}
            onChange={this.handleInputChange} />
          {!this.state.customVideoId && <SpanOk>Link invalido o vacio (El proyecto se publicará sin video)</SpanOk>
          }
          <SpanOk>NOTA: Ingrese solamente el dominio del video, sin "https://", que termina hasta ".mp4". (Ej: argos.hcdn.gob.ar/DMPARL/tutorial.mp4)</SpanOk>
        </ProfileLabel> */}
        <ProfileLabel>
          Ingrese el link del video de Youtube (Opcional)
          <InputField
            type='text'
            name='youtubeURL'
            value={this.state.youtubeURL || ''}
            onChange={this.handleInputChangeYoutube} />
          {!this.state.youtubeId && <SpanOk>Link invalido o vacio (El proyecto se publicará sin video)</SpanOk>
          }
        </ProfileLabel>
        <ProfileLabel>
          Palabras de cierre
          <TextareaField
            value={this.state.closure}
            name='closure'
            onChange={this.handleInputChange}
            placeholder='Escriba aquí el texto' />
          <SpanOk>NOTA: Las palabras de cierre solo serán visibles luego de la fecha de cierre</SpanOk>
        </ProfileLabel>
        <ProfileLabel>
          Etiquetas

          {tagsLoaded &&
            <ProfileTags
              name='tags'
              allTags={this.state.allTags.map((t) => ({ _id: t.id, name: t.text }))}
              tags={tags.map((t) => t.id)}
              onTagClick={this.handleTagClick}
              width='auto' />
          }
          <SpanOk>
            Como máximo se aceptan 5 etiquetas.
          </SpanOk>
        </ProfileLabel>
        <ProfileLabel>
          Notificación de proyecto publicado
          <TagsNotificationCheckboxDiv publishedMailSent={this.state.publishedMailSent}>
            { !this.state.publishedMailSent &&
              <input
                type='checkbox'
                name='sendTagsNotification'
                checked={this.state.sendTagsNotification}
                onChange={this.toggleTagsNotificationCheckbox} />
            }
            { !this.state.publishedMailSent
              ? <span>&nbsp;&nbsp;Enviar notificación a usuarios/as interesados/as</span>
              : <span>&nbsp;&nbsp;Ya se ha enviado la notificación a usuarios/as interesados/as</span>
            }
          </TagsNotificationCheckboxDiv>
          <SpanOk>
             Los mails se enviarán una vez que publiques el proyecto. Esto se puede hacer <b>una sola vez</b>.
          </SpanOk>
        </ProfileLabel>
      </EditField>
    )
  }
}

export default WithUserContext(WithDocumentTagsContext(ProjectFields))
