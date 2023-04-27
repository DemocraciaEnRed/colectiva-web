import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Link from 'next/link'

import FooterBar from './components/footer-bar'
import SocialBar from './components/social-bar'

import SocialIcon from '../../elements/social-icon/component'

const FooterWrapper = styled.footer`
  width: 100%;
  padding: 4rem 5%;
  background-color: var(--gray);
  display:flex;
  flex-direction:row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 760px) {
    flex-direction: column;
    padding: 4rem 0;
  }
  margin-top:10rem;
`

const FooterImage = styled.img`
  width: 100%;
  max-width: 400px;
`

const Footer = () => (
  <FooterWrapper>
    <FooterImage src="/static/assets/LogoBannerFooter.png" alt="Vamos en colectivo" />
    <SocialBar>
      <SocialIcon
        img={'/static/assets/facebook-icon.svg'}
        link={'https://www.facebook.com/OrganizacionArtemisas/'} />
      <SocialIcon img={'/static/assets/twitter-icon.svg'}
        link={'https://twitter.com/Artemisas_org'} /> 
      <SocialIcon img={'/static/assets/instagram-icon.svg'}
        link={'https://www.instagram.com/organizacionartemisas'} /> 
    </SocialBar>
    <FooterBar>
      <Link href='/info?section=acerca-de'><a>Acerca de</a></Link>
      <Link href='/info?section=contacto'><a>Contacto</a></Link>
      {/* <Link href='/info?section=faq'><a>Preguntas Frecuentes</a></Link> */}
      <Link href='/terminos-y-condiciones'><a>Términos y condiciones</a></Link>
      {/* <Link href='/politicas-de-privacidad'><a>Políticas de privacidad</a></Link> */}
    </FooterBar>
  </FooterWrapper>
)

export default Footer
