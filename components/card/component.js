import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import CardHeader from '../../elements/card-header/component'
import CardSocial from '../../elements/card-social/component'
import CardContent from '../../elements/card-content/component'
import WithDocumentTagsContext from '../../components/document-tags-context/component'

const CardContainer = styled.div`
margin: 0 1% 30px;
width: 23%;
box-shadow: 0 4px 20px 0 rgba(0,0,0,0.05);
background-color: #F1ECEA;
border: solid 1px #e9e9e9;
box-sizing: border-box;
cursor: pointer;
display: block;
position: relative;
@media (max-width: 1408px) {
  width: 31%;
  }
@media (max-width: 1216px) {
  width: 48%;
  }
@media (max-width: 600px) {
  width: 100%;
  }
`
const CardImage = styled.div`
  height: 120px;
  width: 100%;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

const Card = ({ project, tags }) => (
  <CardContainer>
    <Link href={{ pathname: '/propuesta', query: { id: project._id } }}>
      <a>
        {/* <CardHeader img={project.currentVersion.content.imageCover} published={project.published} /> */}
        {/* <CardHeader hasImage={project.currentVersion.content.tags && project.currentVersion.content.tags.length > 0} img={`/static/assets/images/${tags && project.currentVersion.content.tags && project.currentVersion.content.tags.length > 0 ? tags.find(x => project.currentVersion.content.tags[0] == x.value).key : 'trama-default'}.jpg`} published={project.published} /> */}
        {project.currentVersion && project.currentVersion.content && project.currentVersion.content.imageCover && <CardImage src={project.currentVersion.content.imageCover} /> }
        <CardHeader published={project.published} project={project} />
        <CardContent
          project={project}
          closed={project.closed}
          closingDate={project.currentVersion.content.closingDate}
          creationDate={project.currentVersion.createdAt}
          tags={project.currentVersion.content.tags}
          tagList={tags} />
        <CardSocial commentaries={project.commentsCount}
          apoyosCount={project.apoyosCount}
          userIsApoyado={project.userIsApoyado} />
      </a>
    </Link>
  </CardContainer>
)

Card.propTypes = {
  project: PropTypes.object.isRequired,
  tags: PropTypes.array
}

export default Card
