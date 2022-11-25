import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ProgressBar from '../progress-bar/component'

const Wrapper = styled.div`
  margin: auto;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  height:auto;
  box-sizing: border-box;
  background-color: #FFF;
`
const Tags = styled.div`
  width:95%;
  margin: auto
  margin-bottom:0;
  padding:0px 0 0 0
  display: flex;
  flex-direction:row;
  flex-wrap: wrap;
`

const ProjectTag = styled.div`
background:#000;
color: #fff;
border-radius:5px;
font-weight: 600;
padding:4px 8px 4px ${(props) => props.hasImage ? '15px' : '8px'};
margin-left: ${(props) => props.hasImage ? '-10px' : 0};
font-size:12px
text-align: center;
text-transform: uppercase;
`

const ProjectTagImg = styled.img`
  display: inline-block;
  width: 60px;
  height: 60px;
  border: 2px solid #000;
  border-radius: 50%;
  z-index: 1;
`

const ProjectTagContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 5px;
  margin-top: 3px;
  margin-bottom:3px;
`

const CardContent = ({ closingDate, closed, creationDate, tags, tagList, project }) => {
  let tagsWithImage = [
    'crisis-climatica',
    'derecho-sexual',
    'paz-seguridad',
    'reduccion-desigualdad',
    'violencia-genero'
  ]
  
  let tagsCards = []
  if (tags && tags.length > 0) {
    tagsCards = tags.map((tag) => {
      const tagValue = tagList.find((tagOfList) => tagOfList.value === tag)
      return {
        label: tagValue.label,
        key: tagValue.key,
        hasImage: tagsWithImage.includes(tagValue.key)
      }
    })
  }
  return (
    <Wrapper>
      {tagsCards.length > 0 && <Tags>
        {tagsCards.map((tag, i) => (
          <ProjectTagContainer>
            { tag.hasImage && <ProjectTagImg src={`/static/assets/tags/${tag.key}.png`} />}
            <ProjectTag key={i} hasImage={tag.hasImage}> {tag.label} </ProjectTag>
          </ProjectTagContainer>
        ))}
      </Tags>}
      <ProgressBar closingDate={closingDate} creationDate={creationDate} closed={closed} />
    </Wrapper>
  )
}

CardContent.propTypes = {
  project: PropTypes.object,
  closingDate: PropTypes.string,
  closed: PropTypes.bool,
  tags: PropTypes.array,
  tagList: PropTypes.array,
  creationDate: PropTypes.string
}

export default CardContent
