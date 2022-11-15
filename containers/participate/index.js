import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import ParticipateContainer from './components/container'
import ParticipateItem from './components/item'
import ParticipateTitle from './components/title'
import ParticipateTextbox from './components/textbox'
import ParticipateP from './components/p'

import WithUserContext from '../../components/with-user-context/component'
import Button from '../../elements/button/component'

const StyledParticipateSection = styled.section`
  margin-left:auto;
  margin-right:auto;
  padding: 8.4rem 0rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  box-sizing:border-box;
`

const Participate = (props) => {
  if (!props.authContext) return null
  return (
    <StyledParticipateSection id='participate'>
      <ParticipateTitle>¿Cómo participar?</ParticipateTitle>
      <ParticipateContainer>
        <ParticipateItem>
          <ParticipateTextbox number={'1'} action={'Co-construye'} />
          <ParticipateP text={'Co-construye sobre las iniciativas activas, participa apoyando y comentando las iniciativas.'} />
        </ParticipateItem>
        <ParticipateItem>
          <ParticipateTextbox number={'2'} action={'Conecta'} />
          <ParticipateP text={'¿Perteneces a una organización de la sociedad civil o movimiento social? Agendemos una llamada para activar tu propuesta en COLECTIVA, escríbenos a innovaciondemocratica@artemisas.org'} />
        </ParticipateItem>
        <ParticipateItem>
          <ParticipateTextbox number={'3'} action={'Involúcrese'} />
          <ParticipateP text={'Dinos que temas o problemáticas crees que se deban abordar en el Congreso. Buscaremos conectar estos temas con Senadoras y Re'} />
        </ParticipateItem>
      </ParticipateContainer>
      <Link href='/info?section=como-participar'>
        <Button primary>Conocé más</Button>
      </Link>
    </StyledParticipateSection>
  )
}

Participate.propTypes = {
  authContext: PropTypes.object.isRequired
}

export default WithUserContext(Participate)
