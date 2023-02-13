import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ParticipateItem = styled.div`
  width: 30%;
  display:flex;
  flex-direction:column;
  align-items:center;
  background: #FFFFFF;
  box-sizing: border-box;
  box-shadow: 0px 3.01603px 7.54007px rgba(0, 0, 0, 0.25);
  border-radius: 3.77003px;  
  margin: 0 10px;
  min-height: 420px;
  max-width: 300px;
  z-index: 1;
  @media (max-width: 1180px) {
    max-width: 100%;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15%;
  }
`

const participateItem = ({ children }) => (
  <ParticipateItem>
    { children }
  </ParticipateItem>
)

participateItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}
export default participateItem
