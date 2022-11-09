import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import WhatIsItTitle from './components/title'

import WithUserContext from '../../components/with-user-context/component'

const StyledWhatIsItSection = styled.section`
  margin-left:auto;
  margin-right:auto;
  padding: 8.4rem 0rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  box-sizing:border-box;
`

const WhatIsIt = (props) => {
  if (!props.authContext) return null
  return (
    <StyledWhatIsItSection id='WhatIsIt'>
      <WhatIsItTitle>¿Qué es colectiva?</WhatIsItTitle>
        <video controls="true">
          <source src="https://www.youtube.com/watch?v=25wiPu9_V3o" type="video/mp4" />
        </video>
    </StyledWhatIsItSection>
  )
}

WhatIsIt.propTypes = {
  authContext: PropTypes.object.isRequired
}

export default WithUserContext(WhatIsIt)
