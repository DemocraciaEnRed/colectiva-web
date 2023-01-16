import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// import UserLink from '../../elements/user-link/component'

const StyledBar = styled.div`
position: absolute;
display:flex;
right: 8%;
justify-content:flex-end;
margin-top:15px;
`

const LoggedUserBar = ({ children }) => (
  <StyledBar>
    { children }
  </StyledBar>
)

LoggedUserBar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default LoggedUserBar
