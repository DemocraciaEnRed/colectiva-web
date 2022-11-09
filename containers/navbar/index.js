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
  
  justify-content:center;
  padding: 2rem 0%;
  z-index:1060;
  position: fixed!important;
  background: #fff;
  transition: height 0.4s ease-out;
  box-shadow: 0px 3px 4px 0px #9999996b;
  top: 0!important;
  width: 100%;
  
  height:8rem;
  @media(max-width:700px){
    height:10rem;
   }
   > div {
    width: 32%;
    justify-content: space-around;
  }
  @media(max-width:700px){
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

const links = [
  {
    name: 'Inicio',
    hash: '#__next',
    link: '/'
  },
  {
    name: 'Participá',
    hash: '#projects',
    link: '/'
  },
  {
    name: 'Conocenos',
    hash: '#__next',
    link: '/info?section=acerca-de'
  },
  {
    name: 'Congreso y Senado',
    hash: '#projects',
    link: '/'
  },  
  {
    name: 'Contactanos',
    hash: '#projects',
    link: '/'
  },    
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
  const [y, setY] = useState()
  const [menu, setMenu] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const [showTagsTooltip, setShowTagsTooltip] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', (e) => handleScroll(e.target.documentElement.scrollTop))
    // window.addEventListener('resize', () => setY(document.getElementById('secondaryBar').offsetTop))
    setY(document.getElementById('secondaryBar').offsetTop)
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


  return (
    <SecondaryBar id='secondaryBar' y={y} position={scroll}>
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
            ¡Complete su perfil con los temas que le interesan!
          </Tooltip>
        }

    </SecondaryBar>
  )
}

export default WithUserContext(Navbar)