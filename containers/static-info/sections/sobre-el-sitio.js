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
        El Portal de <strong>Colectiva</strong> está desarrollado por Democracia en Red y coordinado por la Dirección General de Innovación, Planificación y Nuevas Tecnologías de la Cámara de Diputados de La Nación.
      </StaticInfoP>
    </StyledDiv>
  </section>
)
