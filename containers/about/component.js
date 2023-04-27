import React from 'react'
import styled from 'styled-components'

import AboutImg from './components/img'
import AboutText from './components/text'
import AboutH2 from './components/h2'
import AboutP from './components/p'
import ArrowRightLink from './components/arrow-right-link'

const StyledAbout = styled.div`
  height:auto;
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
    <AboutImg img={'/static/assets/congreso-asset.jpg'} imgMobile='/static/assets/congreso-asset-mobile.jpg' />
    <AboutText>
      <AboutH2>Acerca de</AboutH2>
      <AboutP>El país pide un cambio político que nos permita hacerle frente a la crisis económica, de desigualdad, climática y de futuro.</AboutP>
      <AboutP>Hoy tenemos frente a nosotras la oportunidad de entrar al Congreso y que nunca sea un espacio cerrado, alejado, inalcanzable e impenetrable que tome en nuestro nombre las decisiones que afectan nuestra vida cotidiana.</AboutP>
      <AboutP>Desde Artemisas creemos que no hay otra forma posible de construir el país que queremos sin que sea de manera COLECTIVA.</AboutP>
      <AboutP>VAMOS EN COLECTIVO es la primera plataforma feminista en Latinoamérica para discutir, construir y movilizarnos alrededor de las iniciativas que afectarán la vida de las  niñas, jóvenes, mujeres y personas #LGBTIQ+ de nuestro país.</AboutP>      
      <ArrowRightLink />
    </AboutText>
  </StyledAbout>
)

export default About
