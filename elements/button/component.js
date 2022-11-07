import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledButton = styled.button`
  min-width: 125px;
  max-width: 230px;
  height: 39px;
  background-color: var(--white);
  font-size: 1.4rem;
  color: #FB5735;
  border-style: none;
  cursor: pointer;
  padding: 0 2rem;
  font-family: var(--bold);
/* primary = blue background, secondary = white background */
  background-color: ${(props) => props.primary ? '#FB5735' : 'var(--white)'};
  color: ${(props) => props.primary ? 'var(--white)' : '#2c4c61'};
  border: ${(props) => props.withBorder ? 'solid 2px #FB5735' : 'none'};
  align-self: ${(props) => props.center ? 'center' : 'auto'};
`

const styledButton = (props) => (
  <StyledButton {...props} />
)

styledButton.propTypes = {
  primary: PropTypes.bool,
  withBorder: PropTypes.bool,
  center: PropTypes.bool
}

export default styledButton
