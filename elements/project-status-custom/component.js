import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'next/link'

const OpenContainer = styled.div`
  display: inline-block;
  font-size: 11px;
  color: black;
  background-color: #ffff66;
  padding: 4px 15px;
  // margin-bottom: 10px;
  text-transform: uppercase;
  font-family: var(--medium);
  border-radius: 2px;
`

const ProjectStatusCustom = ({ status }) => {
  return (
    <OpenContainer>
      {status}
    </OpenContainer>
  )
}

ProjectStatusCustom.propTypes = {
  closed: PropTypes.string
}

export default ProjectStatusCustom
