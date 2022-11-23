import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const FooterBar = styled.div`
  font-family: var(--alter-regular);
  // display: flex;
  justify-content:center;
  align-items:right;
  font-size: 1.6rem;
  > a {
    font-family: var(--alter-regular);
    color: #2c4c61;
    display: block;
    text-align: right;
    padding: 10px 15px;
    @media (max-width: 760px) {
      font-size: 1.6rem;
      padding: 10px 0;
      text-align: center;
    }
    &:hover {
      color: #2c4c61;
      font-weight: 700;
    }
  }
`

FooterBar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default FooterBar
