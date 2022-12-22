import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ParticipateTextbox = styled.div`
  min-height: 100px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  box-sizing: border-box;
`

const H3 = styled.div`
  font-size:3rem;
  color:#454246;
  font-family:var(--bold);
`
const ActionWrapper = styled.div`
  display:flex;

`

const participateTextbox = ({ action }) => (
  <ParticipateTextbox>
    <ActionWrapper>
      <H3>{action}</H3>
    </ActionWrapper>
  </ParticipateTextbox>
)

participateTextbox.propTypes = {
  number: PropTypes.string,
  action: PropTypes.string
}

export default participateTextbox
