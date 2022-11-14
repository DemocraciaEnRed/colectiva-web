import React from 'react'
import styled from 'styled-components'
import StaticInfoTitle from '../components/static-info-title'
import StaticInfoBold from '../components/static-info-bold'
import StaticInfoP2 from '../components/static-info-p2'
import Icon from 'react-icons-kit'
import { laptop, envelope, instagram, twitter, facebook } from 'react-icons-kit/fa'

const StyledDiv = styled.div`
  margin-bottom: 20px;
`

export default () => (
  <section>
    <StaticInfoTitle>Contacto</StaticInfoTitle>
    <StyledDiv>
      <StaticInfoBold>
        Escribenos tus comentario
      </StaticInfoBold>      
      <StaticInfoP2>
        <Icon icon={laptop} size={32} /> <a href='https://www.artemisas.org/' target="_blank">https://www.artemisas.org/</a>
      </StaticInfoP2>
      <StaticInfoP2>
        <Icon icon={envelope} size={32} /> <a href='mailto:organizacionartemisas@gmail.com'>organizacionartemisas@gmail.com</a>.
      </StaticInfoP2>      
      <StaticInfoBold>
        Redes sociales
      </StaticInfoBold>      
      <StaticInfoP2>
        <Icon icon={instagram} size={32} /> <a href='https://instagram.com/organizacionartemisas' target="_blank">https://instagram.com/organizacionartemisas</a>
      </StaticInfoP2>
      <StaticInfoP2>
        <Icon icon={twitter} size={32} /> <a href='https://twitter.com/Artemisas_org' target="_blank">@Artemisas_org</a>
      </StaticInfoP2>
      <StaticInfoP2>
        <Icon icon={facebook} size={32} /> <a href='https://www.facebook.com/OrganizacionArtemisas/' target="_blank">https://www.facebook.com/OrganizacionArtemisas/</a>
      </StaticInfoP2>            


    </StyledDiv>
  </section>
)
