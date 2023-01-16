import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledButton = styled.a`
  min-width: 150px;
  max-width: 300px;
  padding: 10px;
  text-align: center;
  font-size: 2rem;
  border-style: none;
  font-family: var(--bold);
  background: #FB5735;
  border-radius: 37.7003px;
  color: #FFFFFF;
  margin-bottom: 50px;
`

const styledButton = (props) => (
  <StyledButton href={props.action} target={props.target} >{props.text}</StyledButton>
)

styledButton.propTypes = {
  action: PropTypes.text,
  text: PropTypes.text,
  target: PropTypes.text
}

export default styledButton
