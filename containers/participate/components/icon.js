import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ParticipateIcon = styled.div`
  min-height: 100px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  box-sizing: border-box;
`

const StyledIcon = styled.div`
  width: 80px;
  height: 80px;
  background-image: url('${(props) => props.img}');
  background-size: cover;
  background-position: center;
`



const participateIcon = ({ img }) => (
  <ParticipateIcon>
    <StyledIcon img={img} />
  </ParticipateIcon>
)

participateIcon.propTypes = {
  img: PropTypes.string
}

export default participateIcon
