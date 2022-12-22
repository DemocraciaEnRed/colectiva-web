import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import ParticipateContainer from './components/container'
import ParticipateItem from './components/item'
import ParticipateTitle from './components/title'
import ParticipateTextbox from './components/textbox'
import ParticipateP from './components/p'
import ParticipateIcon from './components/icon'
import ParticipateAction from './components/action'

import WithUserContext from '../../components/with-user-context/component'

const StyledParticipateSection = styled.section`
  margin-left:auto;
  margin-right:auto;
  padding: 3rem 0rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  box-sizing:border-box;
  background-image: url(${'/static/assets/banner-participa.png'});
  background-size: cover;
  background-position: center;
`

const Participate = (props) => {
  if (!props.authContext) return null
  return (
    <StyledParticipateSection id='participate'>
      <ParticipateTitle>¿Cómo participar?</ParticipateTitle>
      <ParticipateContainer>
        <ParticipateItem>
          <ParticipateIcon img={'/static/assets/whatsapp-icon.svg'} />
          <ParticipateTextbox action={'Comunidad'} />
          <ParticipateP text={'Conoce los avances de las iniciativas y alertas sobre las acciones.'} />
          <ParticipateAction text={'Quiero unirme'} action={"https://linktr.ee/encolectiva"} target='_blank' />
        </ParticipateItem>
        <ParticipateItem>
          <ParticipateIcon img={'/static/assets/pencil-icon.svg'} />
          <ParticipateTextbox action={'Co-Contruye'} />
          <ParticipateP text={'Participa apoyando y comentando las iniciativas activas.'} />
          <ParticipateAction text={'Ver las Iniciativas'} action={"#projects"} />
        </ParticipateItem>
        <ParticipateItem>
          <ParticipateIcon img={'/static/assets/mail-icon.svg'} />
          <ParticipateTextbox action={'Conecta'} />
          <ParticipateP text={'¿Perteneces a una organización de la sociedad civil o movimiento social? '} />
          <ParticipateAction text={'Contactanos'} action={"mailto:organizacionartemisas@gmail.com"} />
        </ParticipateItem>
      </ParticipateContainer>
    </StyledParticipateSection>
  )
}

Participate.propTypes = {
  authContext: PropTypes.object.isRequired
}

export default WithUserContext(Participate)
