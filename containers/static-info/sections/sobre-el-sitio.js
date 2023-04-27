import React from 'react'
import styled from 'styled-components'
import StaticInfoTitle from '../components/static-info-title'
import StaticInfoP from '../components/static-info-p'

const StyledDiv = styled.div`
  margin-bottom: 20px;
`

export default () => (
  <section>
    <StaticInfoTitle>Sobre el sitio</StaticInfoTitle>
    <StyledDiv>
      <StaticInfoP>
        El Portal de VAMOS EN COLECTIVO está desarrollado por Democracia en Red y coordinado por Organización Artemisas
      </StaticInfoP>
    </StyledDiv>
  </section>
)
