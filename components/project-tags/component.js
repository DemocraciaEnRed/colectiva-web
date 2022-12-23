import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ArticlesContext } from '../../containers/user-project-container/component'
import WithDocumentTagsContext from '../../components/document-tags-context/component'

const ProjectTagsContainer = styled.div`
  // min-height: 383px;
  width:90%;
  display: flex;
  flex-direction:row;
  flex-wrap: wrap;
  margin-right:auto;
  margin-left:auto;
  // padding:5% 20% 0% 10%;
  padding: 15px 20% 0% 3.5%;
  margin-bottom: 20px;

  @media (max-width:769px){
    padding:5% 0px;
  }

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


class ProjectTags extends Component {
  static propTypes = {
    project: PropTypes.object.isRequired
  }

  state = {
    allTags: [],
    projectTags: []
  }

  async componentDidMount() {
    const allTags = await this.props.fetchDocumentTags()

    let tagsWithImage = [
      'crisis-climatica',
      'derecho-sexual',
      'paz-seguridad',
      'reduccion-desigualdad',
      'violencia-genero'
    ]
    const projectTags = this.props.project.currentVersion.content.tags || []
    if (projectTags && projectTags.length > 0) {
      const projectTagsObject = projectTags.map((tag) => {
        console.log(tag)
        console.log(allTags)
        const tagValue = allTags.find((tagOfList) => tagOfList._id === tag)
        return {
          label: tagValue.name,
          key: tagValue.key,
          hasImage: tagsWithImage.includes(tagValue.key)
        }
      })
      this.setState({
        allTags,
        projectTags: projectTagsObject
      })
    }
  }

  render() {
    const { project } = this.props
    const { allTags, projectTags } = this.state

    let tagsWithImage = [
      'crisis-climatica',
      'derecho-sexual',
      'paz-seguridad',
      'reduccion-desigualdad',
      'violencia-genero'
    ]

    return (
      <ProjectTagsContainer>
        { allTags.length > 0 && projectTags.length > 0 &&
          <ArticlesContext.Consumer>
            {
              ({ isAuthor, editMode, setYoutubeId, editedYoutubeId, newYoutubeId, setNewFields }) => (
                projectTags.map((tag, i) => (
                  <ProjectTagContainer>
                    { tag.hasImage && <ProjectTagImg src={`/static/assets/tags/${tag.key}.png`} />}
                    <ProjectTag key={i} hasImage={tag.hasImage}> {tag.label} </ProjectTag>
                  </ProjectTagContainer>
                )) 
              )
            }
          </ArticlesContext.Consumer>
        }
      </ProjectTagsContainer>
    )
  }
}

export default WithDocumentTagsContext(ProjectTags)
