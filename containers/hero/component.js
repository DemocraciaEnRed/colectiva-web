import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const StyledHero = styled.div`
  // min-height: 350px;
`

const Hero = () => {
  const [isMobile, updateSize] = useState(false);  
  
  useEffect(() => {
    updateSize(window.innerWidth <= 768);
    window.addEventListener("resize", () => updateSize(window.innerWidth <= 768));
  }, []);

 return( <StyledHero>

    <img key={isMobile} alt={'Banner de Colectiva'} id="videobcg" className="fill" width="100%" height="100%" src="/static/assets/images/banner-01.png" />
  </StyledHero>)
}

export default Hero
