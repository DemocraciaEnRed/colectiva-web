import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const SubT = styled.p`
  font-family:var(--alter-regular);
  font-size: 1.4rem;
  color: #101a21;
  padding:0 10 10 0;
  line-height: 3.5;
`

const Subtitle = (props) => (
  <SubT>{ props.children }</SubT>
)

Subtitle.propTypes = {
  children: PropTypes.string.isRequired
}

export default Subtitle
