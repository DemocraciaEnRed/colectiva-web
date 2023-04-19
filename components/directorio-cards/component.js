import React, { Component } from 'react'
import { withRouter } from 'next/router'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Icon from 'react-icons-kit'
import { facebook } from 'react-icons-kit/fa/facebook'
import { twitter } from 'react-icons-kit/fa/twitter'
import { instagram } from 'react-icons-kit/fa/instagram'

const Fotito = styled.div`
  width: 80px;
  height: 80px;
  min-width: 80px;
  min-height: 80px;
  border-radius: 50%;
  background: url('${(props) => props.foto}');
  background-size: cover;
  background-position: center;
  margin-right: 10px;
  margin-bottom: 10px;
  border: 1px solid #fb5735;

`

const CardWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 1.5rem;
  margin-bottom: 1.5rem;

  @media(max-width: 975px){
    padding: 1rem;
  }
`

const CardPerson = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 35px;
  margin-left: 10px;
  margin-right: 10px;
  align-items: center;
  margin-bottom: 1rem;
  border-radius: 5px;
  box-shadow: 0px 3px 4px 0px #9999996b;
  padding-left: 15px;
  padding-right: 1%;
  padding-bottom: 1%;
  text-align: center;
  font-size: 14px;
  border: 1px solid #ddd;
  border-top: 3px solid #fb5735;
  line-height: 22px;
  min-height: 200px;
  // media queryes, for xl screens, tablet, and mobile
  @media (min-width: 1281px) {
    width: 18%;
  }
  /* 
    ##Device = Laptops, Desktops
    ##Screen = B/w 1025px to 1280px
  */
  @media (min-width: 1025px) and (max-width: 1280px) {
    
    /* CSS */
    width: 30%;
    
  }
  /* 
    ##Device = Tablets, Ipads (portrait)
    ##Screen = B/w 768px to 1024px
  */
  @media (min-width: 768px) and (max-width: 1024px) {
    
    /* CSS */
    width: 46%;
  }
  /* 
    ##Device = Tablets, Ipads (landscape)
    ##Screen = B/w 768px to 1024px
  */
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    
    /* CSS */
    width: 90%;
  }
  /* 
    ##Device = Low Resolution Tablets, Mobiles (Landscape)
    ##Screen = B/w 481px to 767px
  */
  @media (min-width: 481px) and (max-width: 767px) {
    
    /* CSS */
    width: 100%;
  }
  /* 
    ##Device = Most of the Smartphones Mobiles (Portrait)
    ##Screen = B/w 320px to 479px
  */
  
  @media (min-width: 320px) and (max-width: 480px) {
    
    /* CSS */
    width: 100%;
  }
`

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -40px;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem;
  font-weight: 800;
  text-align: center;
  text-transform: uppercase;
  font-size: 16px;
  p {
    padding-top: 10px;
    font-family: 'Okta-Neue-Bold';
  }
`

const ButtonLink = styled.a`
  display: inline-block;
  margin: 0 5px;
  color: #fb5735;
  text-decoration: none;
  &:hover {
    color: #fb5735;
    text-decoration: none;
  }
`

const Cargo = styled.p`
  font-weight: 800;
  line-height: 1.3;
`

const Partido = styled.p`
  font-family: var(--alter-regular);
  line-height: 1.3;
`

class DirectorioCard extends Component {
  // constructor (props) {
  //   super(props)
  // }

  render () {
    let { values, keys, labels, keyVisibility } = this.props
    return (
      <CardWrapper>
        {values.map((value, index) => {
          return (
            <CardPerson key={index}>
              <CardHeader> 
                <Fotito foto={value.foto} />
                <p>{value.nombre}</p>
              </CardHeader>
              <div>
                <Cargo>{value.cargo}</Cargo>
                <Partido>{value.partido}</Partido>
              </div>
              <div style={{paddingTop: '10px', paddingBottom: '10px'}}>
                {
                  value.facebook &&
                  <ButtonLink href={value.facebook} target='_blank'>
                    <Icon icon={facebook} size={20} />
                  </ButtonLink>
                }
                {
                  value.twitter &&
                  <ButtonLink href={value.twitter} target='_blank'>
                    <Icon icon={twitter} size={20} />
                  </ButtonLink>
                }
                {
                  value.instagram &&
                  <ButtonLink href={value.instagram} target='_blank'>
                    <Icon icon={instagram} size={20} />
                  </ButtonLink>
                }
              </div>
            </CardPerson>
          )
        })}
      </CardWrapper>
    )
  }
}

DirectorioCard.propTypes = {
  values: PropTypes.array.isRequired,
  keys: PropTypes.array.isRequired,
  labels: PropTypes.object.isRequired,
  keyVisibility: PropTypes.object.isRequired
}

export default DirectorioCard
