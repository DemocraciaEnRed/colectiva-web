import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledParticipateContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  padding-left: 15%;
  padding-right: 15%;
  justify-content: space-between;
  margin-bottom: 10rem;
  @media (max-width: 1180px) {
    flex-direction: column;
  }
`

const ParticipateContainer = ({ children }) => (
  <StyledParticipateContainer>
    { children }
  </StyledParticipateContainer>
)

ParticipateContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default ParticipateContainer
