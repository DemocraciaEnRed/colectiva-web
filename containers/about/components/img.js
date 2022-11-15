import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledImg = styled.div`
  height: auto;
  width: 100%;
  background-color: #FB5735;
  background-image:  url('${(props) => props.img}');

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;  
  box-sizing: border-box;
  @media (max-width: 700px) {
    height: auto;
    width: auto;
    background-image:  url('${(props) => props.imgMobile}');
  }

`
const AboutImg = ({ img, imgMobile }) => (
  <StyledImg img={img} imgMobile={imgMobile} />
)

AboutImg.propTypes = {
  img: PropTypes.string,
  imgMobile: PropTypes.string
}

export default AboutImg
