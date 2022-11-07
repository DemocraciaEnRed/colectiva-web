import React from 'react'
import styled from 'styled-components'

import AboutImg from './components/img'
import AboutText from './components/text'
import AboutH2 from './components/h2'
import AboutP from './components/p'
import ArrowRightLink from './components/arrow-right-link'

const StyledAbout = styled.div`
  height:540px;
  width:90%;
  @media(max-width:700px){
    flex-direction: column;
  }
  margin-left:auto;
  margin-right:auto;
  display:flex;
  background-color: #FDCFCC;
  box-sizing: border-box;
  }
`

const About = () => (
  <StyledAbout id='about'>
    <AboutImg img={'/static/assets/diputados-asset.jpg'} imgMobile='/static/assets/diputados-asset-mobile.jpg' />
    <AboutText>
      <AboutH2>Acerca de</AboutH2>
      <AboutP>El <strong>Portal de Colectiva</strong> es una plataforma de elaboración colaborativa de normas, donde las y los diputados abren a debate sus iniciativas para incorporar puntos de vista ciudadanos.</AboutP>
      <ArrowRightLink />
    </AboutText>
  </StyledAbout>
)

export default About
