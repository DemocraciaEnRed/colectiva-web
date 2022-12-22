import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const StyledLogo = styled.div`
width:33%;
display:flex;
justify-content:center;
`

const Logo = styled.div`
  width: 220px;
  height: 50px;
  background-image:url(${'/static/assets/logoNavBar.png'});
  background-size: cover;
  background-position: center;  
  box-sizing: border-box;
  cursor:pointer;
  @media (max-width: 975px) {
    background-image:url(${'/static/assets/isoNavBar.png'});
    width: 50px;
    height: 50px;
    left: 0
  }
`

const NavbarLogo = () => (

  <StyledLogo>
    <Link href='/'>
      <Logo />
    </Link>
  </StyledLogo>

)

export default NavbarLogo
