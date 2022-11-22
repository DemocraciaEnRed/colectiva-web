import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Icon from 'react-icons-kit/Icon'
import CardHeaderContent from '../../elements/card-header-content/component'
import { eyeSlash } from 'react-icons-kit/fa/eyeSlash'

const Wrapper = styled.div`
width: 100%;
background-color: #FFF;
overflow:hidden;
background-size: cover;
background-position: center;
// position: relative;
`

const CoverImage = styled.img`
  width: 100%;
  //max-height:126px;
`

const Label = styled.span`
  position: absolute;
  top: 13px;
  left: 10px;
  width: 95px;
  height: 20px;
  border-radius: 4px;
  background-color: #fee282;
  font-size: 1.0rem;
  font-weight: 500;
  color: #000;
  padding: 5px 8px;
  text-transform: uppercase;
  align-self: flex-end;
  margin-bottom: 8px;
  position: relative;
  bottom: 7px
`

const CardHeader = ({ project, published }) => (
  <Wrapper>
    { !published && <Label><Icon icon={eyeSlash} style={{ verticalAlign: 'text-bottom', marginRight: '5px' }} size={14} />Oculto</Label>}
    <CardHeaderContent
      title={project.currentVersion.content.title}
      authorId={project.author._id}
      userId={project.author._id}
      status={project.currentVersion.content && project.currentVersion.content.status}
      name={project.currentVersion.content && project.currentVersion.content.authorFullname ? project.currentVersion.content.authorFullname : project.author.fullname}
      role={project.currentVersion.content && project.currentVersion.content.authorRole ? project.currentVersion.content.authorRole : project.author.role}
      hasImage={!!project.currentVersion.content.imageCover}
      closingDate={project.currentVersion.content.closingDate}
      // hasImage={project.currentVersion.content.tags && project.currentVersion.content.tags.length > 0}
      party={project.author.fields && project.author.fields.department ? project.author.fields.department : ''} />
  </Wrapper>
)

CardHeader.propTypes = {
  project: PropTypes.object,
  img: PropTypes.string,
  published: PropTypes.bool
}
export default CardHeader
