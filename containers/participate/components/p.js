import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ParticipateP = styled.p`
  width: 220px;
  margin-bottom: 50px;
  font-family:var(--alter-regular);
  font-size: 2rem;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  color: #4a5d68;
`
const participateP = ({ text }) => (
  <ParticipateP>
    { text }
  </ParticipateP>
)

participateP.propTypes = {
  text: PropTypes.string.isRequired
}

export default participateP
