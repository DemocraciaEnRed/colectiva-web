import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const AuthorBioContainer = styled.div`
  // min-height: 383px;
  width:90%;
  display: block;
  margin-right:auto;
  margin-left:auto;
  // padding:5% 20% 0% 10%;
  padding: 15px 20% 0% 3.5%;
  margin-bottom: 20px;

  @media (max-width:769px){
    padding:5% 0px;
  }
  `

const AuthorMediaContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  border: 1px solid #CACACA;
  padding: 30px 20px 
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
  `

const AuthorMediaLeftImg = styled.img`
  width: 1000
  height: 100%;
  border: 2px solid #000;
  border-radius: 50%;
  display: flex;
  max-width: 150px;
  display:block;
  `
const MediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-left: 20px;
`

const AuthorName = styled.div`
  font-size: 28px;
  font-weight: 800;
  color: var(--blue);
  // margin-bottom: 10px;
`

const AuthorRole = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #6a6a6a;
  margin-bottom: 10px;
`

const AuthorBio = styled.div`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 10px;
  white-space: pre-line;
`

const AuthorTitle = styled.div`
  font-size: 18px;
  font-weight: 800;
  color: #fb5735;
  // margin-bottom: 10px;
`

// const ProjectTag = styled.div`
// background:#000;
// color: #fff;
// border-radius:5px;
// font-weight: 600;
// padding:4px 8px 4px ${(props) => props.hasImage ? '15px' : '8px'};
// margin-left: ${(props) => props.hasImage ? '-10px' : 0};
// font-size:12px
// text-align: center;
// text-transform: uppercase;
// `

// const ProjectTagImg = styled.img`
//   display: inline-block;
//   width: 60px;
//   height: 60px;
//   border: 2px solid #000;
//   border-radius: 50%;
//   z-index: 1;
// `

// const ProjectTagContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   margin-right: 5px;
//   margin-top: 3px;
//   margin-bottom:3px;
// `

class ProjectAuthorBio extends Component {
  static propTypes = {
    project: PropTypes.object.isRequired
  }

  state = {
    allTags: []
  }

  render () {
    const { project } = this.props
    const { } = this.state

    if (!project) return null
    if (!project.currentVersion.content.authorFullname) return null
    if (!project.currentVersion.content.authorBio) return null

    return (
      <AuthorBioContainer>
        <AuthorMediaContainer>
          {
            project.currentVersion.content.authorAvatar &&
            <AuthorMediaLeftImg src={project.currentVersion.content.authorAvatar} />
          }
          <MediaContainer>
            <AuthorTitle>Acerca de</AuthorTitle>
            <AuthorName>{project.currentVersion.content.authorFullname}</AuthorName>
            <AuthorRole>{project.currentVersion.content.authorRole}</AuthorRole>
            <AuthorBio>
              {project.currentVersion.content.authorBio}
            </AuthorBio>
          </MediaContainer>
        </AuthorMediaContainer>
      </AuthorBioContainer>
    )
  }
}

export default ProjectAuthorBio
