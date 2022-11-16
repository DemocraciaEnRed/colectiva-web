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

const StyledResponsiveVideo = styled.div`
  position: relative;
  margin-top: 30px;
  width: 100%;
  margin: 0 auto;
  max-width: 560px;
  height: auto;
  display:block;
  padding-bottom: 56.25%;
  margin-bottom: 40px;
  margin-top: 10px;
  @media (min-width: 1180px) {
  padding-bottom: 0;
  height: 315px;
  width: 560px;
  }
`

const StyledIframe = styled.iframe`
    left:0;
    top:0;
    height:100%;
    width:100%;
    position:absolute;
`


const WhatIsIt = (props) => {
  if (!props.authContext) return null
  return (
    <StyledWhatIsItSection id='WhatIsIt'>
      <WhatIsItTitle>¿Qué es colectiva?</WhatIsItTitle>
        <StyledResponsiveVideo>
          <StyledIframe width="560" height="315" src="https://www.youtube.com/embed/7gChyZFBqes" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
        </StyledResponsiveVideo>      
    </StyledWhatIsItSection>
  )
}

WhatIsIt.propTypes = {
  authContext: PropTypes.object.isRequired
}

export default WithUserContext(WhatIsIt)
