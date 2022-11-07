import React from 'react'
import styled from 'styled-components'

const NavbarStyledButton = styled.button`
  max-width: 130px;
  height: 22px;
  font-size: ${(props) => props.bigger ? '1.6rem' : '1.4rem'};
  color: #FB5735;
  border-style: none;
  padding-left:1.5rem;
  padding-bottom:2rem;
  cursor: pointer;
  background:#fff;
  color: ${(props) => props.primary ? '#FB5735' : '#4a5d68'};

`

const NavbarButton = (props) => (
  <NavbarStyledButton {...props} onClick={props.onClick} />
)

export default NavbarButton
