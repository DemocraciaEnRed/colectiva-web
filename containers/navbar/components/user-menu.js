import React from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'

// height: ${(props) => props.isAuthor ? '154px' : '104px'};
const StyledUl = styled.ul`
  width: 200px;
  @media (max-width: 760px) {
    width: 150px;
    height: 74px;
  }
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);
  border: solid 1px #e9e9e9;
  background-color: #f6f6f6;
  display:flex;
  flex-direction:row;
  align-content: space-between;
  flex-wrap: wrap;
  right: 1;
  margin-top:50px;
  margin-left:20px;
  position: absolute;
  z-index: 99;
  list-style:none;
  :before {
    content: "";
    position: absolute;
    border-style: solid;
    border-color: #e9e9e9 transparent;
    display: block;
    width: 0;
    top: -13px;
    bottom: auto;
    left: auto;
    right: 0px;
    border-width: 0 13px 13px;
  }
  :after{ 
    content: "";
    position: absolute;
    border-style: solid;
    border-color: #f6f6f6 transparent;
    display: block;
    width: 0;
    top: -12px;
    bottom: auto;
    left: auto;
    right: 0px;
    border-width: 0 13px 13px;
    }
`

const Li = styled.li`
  border-bottom:1px solid #dae1e7;
  width: 100%;
  height: 50px;
  &:last-child{
    border:none;
  }
`

const StyledA = styled.span`
 height:5rem;
 font-size:1.6rem;
 color: #101a21;
 align-items:center;
 display:flex;
 padding-left:3rem;
 cursor: pointer;

`

const Usermenu = ({ logout }) => (

  <StyledUl>
    <Li>
      <Link href={{ pathname: '/userprofile' }}>
        <a>
          <StyledA>Mi perfil</StyledA>
        </a>
      </Link>
    </Li>
    {/* { isAuthor &&
    <Li>
      <StyledA onClick={create}>Nueva propuesta</StyledA>
    </Li>
    } */}
    <Li>
      <StyledA onClick={logout}>Cerrar sesión</StyledA>
    </Li>
  </StyledUl>
)

export default Usermenu
