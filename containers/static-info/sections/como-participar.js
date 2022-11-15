import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Icon from 'react-icons-kit'
import { download } from 'react-icons-kit/feather/download'

import StaticInfoTitle from '../components/static-info-title'
import StaticInfoP from '../components/static-info-p'
import StaticInfoBold from '../components/static-info-bold'

const ManualLink = styled.span`
  text-decoration: underline
  color: #FB5735;
  &:hover{
    cursor: pointer;
  }
`

const ComoParticiparWrapper = styled.div`
  max-width: 850px;
  padding: 0px 82px 55px 0px;
`

export default () => (
  <section>
    <StaticInfoTitle>Cómo participar</StaticInfoTitle>
    <ComoParticiparWrapper>
      <StaticInfoBold>
        ¿Cómo funciona?
      </StaticInfoBold>
      <StaticInfoP>
        COLECTIVA genera espacios de trabajo entre ciudadanía y Congreso (Senado y Cámara de Representantes):
        <StaticInfoP>
          <ul>
            <li><StaticInfoP>Congresistas y organizaciones presentan iniciativas en la plataforma.</StaticInfoP></li>
            <li><StaticInfoP>Ciudadanía, organizaciones y movimiento participan en la plataforma para comentar y aportar sobre las iniciativas. Además, el equipo de COLECTIVA y Artemisas, generará con congresistas espacios presenciales de trabajo para deliberar sobre las temáticas.</StaticInfoP></li>
            <li><StaticInfoP>Nos movilizamos a través de alertas tempranas por Whats App cuando las iniciativas pasen a comisiones y votaciones.</StaticInfoP></li>
          </ul>
        </StaticInfoP>
      </StaticInfoP>
    </ComoParticiparWrapper>
  </section>
)
