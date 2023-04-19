import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'next/link'

// const OpenContainer = styled.div`
//   display: inline-block;
//   font-size: 11px;
//   color: black;
//   background-color: #ffff66;
//   padding: 4px 15px;
//   // margin-bottom: 10px;
//   text-transform: uppercase;
//   font-family: var(--medium);
//   border-radius: 2px;
// `

const StateImage = styled.img`
  height: 27px;
`
const InlineBlock = styled.div`
  display: inline-block;
`

const ProjectStatusCustom = ({ status }) => {
  if(!status) return null

  return (
    <StateImage src={`/static/assets/states/${status}.svg`} />
  )

  // return (
  //   <OpenContainer>
  //     {status}
  //   </OpenContainer>
  // )
}

ProjectStatusCustom.propTypes = {
  closed: PropTypes.string
}

export default ProjectStatusCustom
