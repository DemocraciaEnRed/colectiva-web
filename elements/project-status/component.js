import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'next/link'

const OpenContainer = styled.div`
  display: inline-block;
  font-size: 11px;
  color: white;
  background-color: #0bb546;
  padding: 4px 15px;
  // margin-bottom: 10px;
  text-transform: uppercase;
  font-family: var(--medium);
  // border-radius: 2px;
`
const PrivateContainer = styled.div`
  display: inline-block;
  font-size: 11px;
  color: white;
  background-color: #000000;
  padding: 4px 15px;
  // margin-bottom: 10px;
  text-transform: uppercase;
  font-family: var(--medium);
  // border-radius: 2px;
`
const ClosedContainer = styled.div`
  display: inline-block;
  font-size: 11px;
  color: white;
  background-color: #ef885d;
  padding: 4px 15px;
  // margin-bottom: 10px;
  text-transform: uppercase;
  font-family: var(--medium);
  // border-radius: 2px;
`

const ProjectStatus = ({ closed, privateProject }) => {
  if (!closed) {
    return (
      <div>
        <OpenContainer>
          Abierto para aportes
        </OpenContainer>
        {
          privateProject && (
            <PrivateContainer>
              PRIVADO
            </PrivateContainer>
          )
        }
      </div>
    )
  }
  return (
    <div>
      <ClosedContainer>
        Finalizó el periodo para aportes
      </ClosedContainer>
      {
          privateProject && (
            <PrivateContainer>
              PRIVADO
            </PrivateContainer>
          )
        }
    </div>
  )
}

ProjectStatus.propTypes = {
  closed: PropTypes.bool,
  privateProject: PropTypes.bool,
}

export default ProjectStatus
