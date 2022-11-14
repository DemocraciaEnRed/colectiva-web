import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import SobreLaPlataforma from './sections/sobre-la-plataforma'
import ComoParticipar from './sections/como-participar'
import Contacto from './sections/contacto'
import FAQ from './sections/faq'
import SobreElSitio from './sections/sobre-el-sitio'

import StaticInfoWrapper from './components/static-info-wrapper'
import StaticInfoNav from './components/static-info-nav'
import StaticInfoButton from './components/static-info-button'

const buttons = [
  {
    'name': 'Acerca de',
    'value': 'acerca-de'
  },
  {
    'name': 'Cómo participar',
    'value': 'como-participar'
  },
  {
    'name': 'Preguntas frecuentes',
    'value': 'faq'
  },
  {
    'name': 'Sobre el sitio',
    'value': 'sobre-el-sitio'
  },
  {
    'name': 'Contacto',
    'value': 'contacto'
  }
]

const content = {
  'acerca-de': <SobreLaPlataforma />,
  'como-participar': <ComoParticipar />,
  'faq': <FAQ />,
  'sobre-el-sitio': <SobreElSitio />,
  'contacto': <Contacto />
}

const StyledStaticInfo = styled.div`
  display: flex;
  justify-content: center;
`

const StaticInfo = (props) => (
  <StyledStaticInfo>
    <StaticInfoWrapper>
    <StaticInfoNav>
        {buttons.map((button, i) => (
          <StaticInfoButton
            className={props.section === button.value ? 'active' : ''}
            onClick={() => props.changeSection(button.value)}
            key={i}>
            {button.name}
          </StaticInfoButton>
        ))}
      </StaticInfoNav>
      {content[props.section]}
      
    </StaticInfoWrapper>
  </StyledStaticInfo>
)

StaticInfo.propTypes = {
  section: PropTypes.string,
  changeSection: PropTypes.func.isRequired
}

export default StaticInfo
