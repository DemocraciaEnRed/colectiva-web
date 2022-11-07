import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledProfileMail = styled.div`
  font-size: 1.4rem;
  color: #FB5735;
  color:#FB5735;
  margin:0.5rem 0rem;
  padding: 0 1em;
  text-align:center;
  line-height: 1.8em;`

const ProfileMail = ({ mail }) => (
  <StyledProfileMail>
    {mail}
  </StyledProfileMail>
)

ProfileMail.propTypes = {
  mail: PropTypes.string
}

export default ProfileMail
