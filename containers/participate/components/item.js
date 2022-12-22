import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ParticipateItem = styled.div`
  width: 30%;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;
  background: #FFFFFF;
  box-sizing: border-box;
  box-shadow: 0px 3.01603px 7.54007px rgba(0, 0, 0, 0.25);
  border-radius: 3.77003px;  
  @media (max-width: 1160px) {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  &:nth-child(even) {
      padding-left:1rem;
      padding-right:1rem;
      border-left:1px solid #dae1e7;
      border-right:1px solid #dae1e7;
      margin-left:.5rem;
      margin-right:.5rem;
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
