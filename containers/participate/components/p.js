import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ParticipateP = styled.p`
  width: 270px;
  margin-bottom: 50px;
  font-family:var(--alter-regular);
  font-size: 1.6rem;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.2;
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
