import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const StyledHero = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 10vh;
`

const Hero = () => {
  const [isMobile, updateSize] = useState(false);  
  
  // useEffect(() => {
  //   updateSize(window.innerWidth <= 768);
  //   window.addEventListener("resize", () => updateSize(window.innerWidth <= 768));
  // }, []);

 return( <StyledHero>
    <img key={isMobile} alt={'Banner de Colectiva'} width="40%" src="/static/assets/images/logotipo.png" />
  </StyledHero>)
}

export default Hero
