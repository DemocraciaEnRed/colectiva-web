import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import jump from 'jump.js'
import LinkBar from './components/link-bar'
import router from 'next/router'

import NavbarLogo from './components/navbar-logo'
import Button from './components/navbar-button'

import LoggedUser from './components/logged-user'
import LoggedUserBar from './components/logged-user-bar'
import Tooltip from './components/tooltip'
import UserMenu from './components/user-menu'
import UserBar from './components/user-bar'

import WithUserContext from '../../components/with-user-context/component'

const SecondaryBar = styled.div`
  height:6rem;
  display: flex;
  padding: 1.3rem 0%;
  z-index:10;
  position: fixed!important;
  background: #fff;
  transition: height 0.4s ease-out;
  box-shadow: 0px 3px 4px 0px #9999996b;
  top: 0!important;
  width: 100%;
  
  height:8rem;
  @media(max-width:975px){
    height:80px;
   }
   
  @media(max-width:975px){
    transition: height 0.4s ease-out;
   }

}
  a {
    &:last-child{
      padding-right:20px;
    }
    &:first-child{
      height:auto;
    }
  }
`


const MobileMenu = styled.a`
    // padding: 25px 0px;
    position: absolute;
    margin-top: 10px;
    right: 30%;
    width: 40px;
    height: 35px;
    background-image:url(${'/static/assets/mobileMenu.svg'});
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer;
`
const MobileNavbarDisplay = styled.div`

  display: block;
  position: absolute;
  width: 100%;
  left: 0;
  top: 80px;
  background: white;
  ul {
    padding: 10px 0;
    border-width: 1px 0;
    border-style: solid;
    border-color: #e8;
    list-style-type: none;
    font-size: 22px;
  }
    
`




const links = [
  {
    name: 'Inicio',
    hash: '#__next',
    link: '/'
  },
  {
    name: '¿Cómo participar?',
    hash: '#participate',
    link: '/'
  },
  {
    name: 'Iniciativas',
    hash: '#projects',
    link: '/'
  },  
  {
    name: 'Directorio',
    hash: '#__next',
    link: '/directorio'
  },  
  {
    name: 'El Congreso',
    hash: '#__next',
    link: '/info?section=congreso-y-senado'
  },    
  {
    name: 'Acerca de',
    hash: '#__next',
    link: '/info?section=acerca-de'
  },
  // {
  //   name: 'Congreso y Senado',
  //   hash: '#projects',
  //   link: '/'
  // },  
  // {
  //   name: 'Contactanos',
  //   hash: '#projects',
  //   link: '/'
  // },    
]

const NavbarLink = ({ name, link, hash }) => {
  const move = async () => {
    await router.push(link)
    jump(hash)
  }

  return (
    <a onClick={() => move()}>
      { name }
    </a>
  )
}

NavbarLink.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
  hash: PropTypes.string,
  authContext: PropTypes.object.isRequired
}

const Navbar = (props) => {
  const [scroll, setScroll] = useState(0)
  const handleScroll = (position) => setScroll(position)
  const [menu, setMenu] = useState(false)
  const [width, setWidth] = useState('')
  const [showTooltip, setShowTooltip] = useState(false)
  const [showTagsTooltip, setShowTagsTooltip] = useState(false)
  const [mobileMenuOn, setMobileMenuOn] = useState(false)
  

  useEffect(() => {
    window.addEventListener('scroll', (e) => handleScroll(e.target.documentElement.scrollTop))
  }, [])

  useEffect(() => {
    if (window.matchMedia('(max-width: 975px)').matches) {
      setWidth('mobile')
    } else {
      setWidth('desktop')
    }
  }, [])

  useEffect(() => {
    const hideTooltips = localStorage.getItem('hide-tooltips') || false
    if (window.location.pathname === '/articulado' && !props.authContext.authenticated && !hideTooltips) setShowTooltip(true)
    const hideTagsTooltip = localStorage.getItem('hide-tagstooltips') || false
    if (!hideTagsTooltip) setShowTagsTooltip(true)
  }, [])


  if (!props.authContext) return null

  let hasTags;
  try { hasTags = props.authContext.user.fields.tags.length > 0 }
  catch (e) { hasTags = false }

  switch (width) {
    case 'desktop':
      return (
        <SecondaryBar id='secondaryBar' position={scroll}>
          <NavbarLogo />
          <LinkBar>
            {links.map((li, i) => {
              return <NavbarLink
                key={i}
                name={li.name}
                link={li.link}
                hash={li.hash} />
            })}
          </LinkBar>
    
          {props.authContext.authenticated
              ? (
                <LoggedUserBar>
                  <LoggedUser onClick={() => setMenu(!menu)} user={props.authContext.user} />
                  {menu &&
                  <UserMenu logout={props.authContext.logout} user={props.authContext.user} create={() => console.log("this.createProject")} isAuthor={props.authContext.isAuthor} />
                  }
                </LoggedUserBar>
              ) : (
                <UserBar>
                  <Button primary bigger onClick={props.authContext.login}>Ingresar</Button>
                </UserBar>
              )}
            { !props.authContext.authenticated && showTooltip &&
              <Tooltip top={'110px'} right={'20px'} localStorageHideKey='hide-tooltips'>
                Para agregar aportes debe estar registrado.
                Ingrese a la sección y complete el formulario
              </Tooltip>
            }
            { props.authContext.authenticated && !hasTags && showTagsTooltip &&
              <Tooltip top={'110px'} right={'20px'} localStorageHideKey='hide-tagstooltips'>
                ¡Registrá en tu perfil tu celular y temas de interés para las Alertas tempranas por WhatsApp!
              </Tooltip>
            }
    
        </SecondaryBar>
      )
    case 'mobile':
      return (
        <SecondaryBar id='secondaryBar' position={scroll}>
          <NavbarLogo />
          <MobileMenu onClick={() => setMobileMenuOn(!mobileMenuOn)} />
          {
            mobileMenuOn && <MobileNavbarDisplay >
                <ul>
                {links.map((li, i) => {
                    return <li style={{'border-bottom': '1px solid black;', 'padding-left': '15px'}}>
                      <NavbarLink
                      key={i}
                      name={li.name}
                      link={li.link}
                      hash={li.hash} />
                    </li>
                  })}
                </ul>
                </MobileNavbarDisplay>
          }


          {props.authContext.authenticated
              ? (
                <LoggedUserBar>
                  <LoggedUser onClick={() => setMenu(!menu)} user={props.authContext.user} />
                  {menu &&
                  <UserMenu logout={props.authContext.logout} user={props.authContext.user} create={() => console.log("this.createProject")} isAuthor={props.authContext.isAuthor} />
                  }
                </LoggedUserBar>
              ) : (
                <UserBar>
                  <Button primary bigger onClick={props.authContext.login}>Ingresar</Button>
                </UserBar>
              )}
            { !props.authContext.authenticated && showTooltip &&
              <Tooltip top={'110px'} right={'20px'} localStorageHideKey='hide-tooltips'>
                Para agregar aportes debe estar registrado.
                Ingrese a la sección y complete el formulario
              </Tooltip>
            }
            { props.authContext.authenticated && !hasTags && showTagsTooltip &&
              <Tooltip top={'110px'} right={'20px'} localStorageHideKey='hide-tagstooltips'>
                ¡Registrá en tu perfil tu celular y temas de interés para las Alertas tempranas por WhatsApp!
              </Tooltip>
            }
    
        </SecondaryBar>
      )
    default:
      return <div></div>
  }

  // if (width === "desktop") {

  // } else {
  //   return <div></div>
  // }

}

export default WithUserContext(Navbar)