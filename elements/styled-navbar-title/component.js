import React from 'react'
import styled from 'styled-components'

const StyledNavbarTitle = styled.h2`
  font-size: 2rem;
  margin-top:auto
  color: #101a21;
  width:33%;
  @media (max-width: 640px) {
    font-size: 1.5rem;
  }
`
const Span = styled.span`
  font-family: var(--bold);
`

const NavbarTitle = () => (
  <StyledNavbarTitle>
   Portal de <Span>Colectiva</Span>
  </StyledNavbarTitle>
)

export default NavbarTitle
