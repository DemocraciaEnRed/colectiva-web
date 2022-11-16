import React from 'react'
import styled from 'styled-components'
import StaticInfoTitle from '../components/static-info-title'
import StaticInfoBold from '../components/static-info-bold'
import StaticInfoP from '../components/static-info-p'
import StaticInfoImgs from '../components/static-info-imgs'
import StaticInfoImg from '../components/static-info-img'

const StyledDiv = styled.div`
  margin-bottom: 20px;
`

export default () => (
  <section>
    <StaticInfoTitle>Acerca de</StaticInfoTitle>
    <StyledDiv>
      <StaticInfoBold>
        ¿Qué es Colectiva?
      </StaticInfoBold>
      <StaticInfoP>
        Colectiva es la primera plataforma feminista en Latinoamérica para discutir, deliberar, construir y movilizarnos alrededor de las iniciativas que afectarán la vida de las niñas, jóvenes, mujeres y personas #LGBTIQ+ de nuestro país.
      </StaticInfoP>

    </StyledDiv>
    <StyledDiv>
      <StaticInfoBold>
        ¿Por qué participar?
      </StaticInfoBold>
      <StaticInfoP>
        El país pide un cambio político que nos permita hacerle frente a la crisis económica, de desigualdad, climática y de futuro.
      </StaticInfoP>
      <StaticInfoP>
        Hoy tenemos frente a nosotras la oportunidad de entrar al Congreso y que nunca sea un espacio cerrado, alejado, inalcanzable e impenetrable que tome en nuestro nombre las decisiones que afectan nuestra vida cotidiana.
      </StaticInfoP>      
      <StaticInfoP>
        Desde Artemisas creemos que no hay otra forma posible de construir el país que queremos sin que sea de manera COLECTIVA.
      </StaticInfoP>
    </StyledDiv>
    <StyledDiv>
      <StaticInfoBold>
        Alianzas
      </StaticInfoBold>
      <StaticInfoImgs>
        <StaticInfoImg><img src="/static/assets/images/alianzas/labicpa.png" alt="Logotipo de LabIcPa" width="200px" /></StaticInfoImg>
        <StaticInfoImg><img src="/static/assets/images/alianzas/open-society.png" alt="Logotipo de Open Society Foundations" width="200px" /></StaticInfoImg>
        <StaticInfoImg><img src="/static/assets/images/alianzas/ned.png" alt="Logotipo de National endowment for democracy" width="200px" /></StaticInfoImg>
        <StaticInfoImg><img src="/static/assets/images/alianzas/artemisas.png" alt="Logotipo de Artemisas" width="200px" /></StaticInfoImg>  
        <StaticInfoImg><img src="/static/assets/images/alianzas/fes.jpeg" alt="Logotipo de Friedrich Ebert Stiftung" width="200px" /></StaticInfoImg>
        <StaticInfoImg><img src="/static/assets/images/alianzas/der.webp" alt="Logotipo de Democracia en Red" width="200px" /></StaticInfoImg>
        <StaticInfoImg><img src="/static/assets/images/alianzas/corona.png" alt="Logotipo de Fundación Corona" width="200px" /></StaticInfoImg>
      </StaticInfoImgs>
    </StyledDiv>
  </section>
)
