import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const StyledLogo = styled.div`
width: 33%;
display: flex;
justify-content: center;
align-items: center;
`

const Logo = styled.div`
  width: 300px;
  height: 60px;
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

const LogoImage = styled.img`
  width: auto;
  height: 60px;
  cursor:pointer;
  @media (max-width: 975px) {
    width: auto;
    height: 35px;
  }
`

const NavbarLogo = () => (

  <StyledLogo>
    <Link href='/'>
      {/* <Logo /> */}
      <LogoImage src="/static/assets/logoNavBar.png" />
    </Link>
  </StyledLogo>

)

export default NavbarLogo
