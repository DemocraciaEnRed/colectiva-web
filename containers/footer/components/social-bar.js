import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const SocialBar = styled.div`
  margin-right: auto;
  display:flex;
  justify-content:center;
  align-items:center;
  @media (max-width: 760px) {
    margin-left: auto;
    margin-bottom: 2rem;
  }
`

SocialBar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default SocialBar
