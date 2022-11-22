import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import FileBase64 from 'react-file-base64'
import Jimp from 'jimp'
import jump from 'jump.js'
import ProfileForm from '../../elements/profile-form/component'
import ProfileAvatar from '../../elements/profile-avatar/component'
import ProfileName from '../../elements/profile-name/component'
import ProfileMail from '../../elements/profile-mail/component'
import ProfileLabel from '../../elements/profile-label/component'
import ProfileInput from '../../elements/profile-input/component'
import ProfileSelect from '../../elements/profile-select/component'
import ProfileButtonWrapper from '../../elements/profile-button-wrapper/component'
import ProfileTags from '../../elements/profile-tags/component'
import SubmitInput from '../../elements/submit-input/component'
import WithDocumentTagsContext from '../../components/document-tags-context/component'

const TagsNotificationCheckboxDiv = styled.div`
  width: 350px;
  display: flex;
  line-height: 15px;
  margin-top: 3px;
  font-size:13px;
  & > input {
    margin-right: 7px;
    margin-bottom: auto;
  }
`

const ButtonLink = styled.button`
  background-color: #FB5735;
  font-size: 1.2rem;
  border-style: none;
  color: var(--white);
  font-family: var(--bold);
  padding: 0.7em 1.8em;
  background-color: #FB5735;
  font-size: 1.4rem;
  margin: 1em 0 0;
`

const InputErrorSpan = styled.span`
  color: red;
  font-size: 1.2rem;
`

const departmentList = [
  { 'name': '', 'value': '' },
  { 'name': 'Amazonas', 'value': 'Amazonas' },
  { 'name': 'Antioquia', 'value': 'Antioquia' },
  { 'name': 'Arauca', 'value': 'Arauca' },
  { 'name': 'Atlántico', 'value': 'Atlántico' },
  { 'name': 'Bolívar', 'value': 'Bolívar' },
  { 'name': 'Boyacá', 'value': 'Boyacá' },
  { 'name': 'Caldas', 'value': 'Caldas' },
  { 'name': 'Caquetá', 'value': 'Caquetá' },
  { 'name': 'Casanare', 'value': 'Casanare' },
  { 'name': 'Cauca', 'value': 'Cauca' },
  { 'name': 'Cesar', 'value': 'Cesar' },
  { 'name': 'Chocó', 'value': 'Chocó' },
  { 'name': 'Córdoba', 'value': 'Córdoba' },
  { 'name': 'Cundinamarca', 'value': 'Cundinamarca' },
  { 'name': 'Guainía', 'value': 'Guainía' },
  { 'name': 'Guaviare', 'value': 'Guaviare' },
  { 'name': 'Huila', 'value': 'Huila' },
  { 'name': 'La Guajira', 'value': 'La Guajira' },
  { 'name': 'Magdalena', 'value': 'Magdalena' },
  { 'name': 'Meta', 'value': 'Meta' },
  { 'name': 'Nariño', 'value': 'Nariño' },
  { 'name': 'Norte de Santander', 'value': 'Norte de Santander' },
  { 'name': 'Putumayo', 'value': 'Putumayo' },
  { 'name': 'Quindío', 'value': 'Quindío' },
  { 'name': 'Risaralda', 'value': 'Risaralda' },
  { 'name': 'San Andrés y Providencia', 'value': 'San Andrés y Providencia' },
  { 'name': 'Santander', 'value': 'Santander' },
  { 'name': 'Sucre', 'value': 'Sucre' },
  { 'name': 'Tolima', 'value': 'Tolima' },
  { 'name': 'Valle del Cauca', 'value': 'Valle del Cauca' },
  { 'name': 'Vaupés', 'value': 'Vaupés' },
  { 'name': 'Vichad', 'value': 'Vichad' },
  { 'name': '(No soy de Colombia)', 'value': '(No soy de Colombia)' },
]

class Profile extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    isOwner: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    avatar: null,
    birthday: '',
    whatsapp: '',
    department: '',
    editMode: false,
    files: [],
    allTags: [],
    tags: [],
    tagsMaxReached: false,
    tagsNotification: ''
  }

  async componentWillMount () {
    this.setState({ allTags: await this.props.fetchDocumentTags() })
  }

  componentDidMount () {
    const { user } = this.props
    this.setState({
      whatsapp: user.fields && user.fields.whatsapp ? user.fields.whatsapp : '',
      department: user.fields && user.fields.department ? user.fields.department : '',
      birthday: user.fields && user.fields.birthday ? user.fields.birthday : '',
      tags: user.fields && user.fields.tags ? user.fields.tags : [],
      tagsNotification: user.fields && user.fields.tagsNotification ? user.fields.tagsNotification : ''
    })
  }

  // Callback~
  getFiles = async (files) => {
    Jimp.read(Buffer.from(files.base64.split('base64,')[1], 'base64'))
      .then(async (image) => {
        let optimizedImage = await image.cover(150, 150).quality(90).getBase64Async(Jimp.MIME_JPEG)
        this.setState({ avatar: optimizedImage })
      }).catch((err) => {
        console.error(err)
      })
    this.setState({ files: files })
  }

  // get derivedState
  toggleEdit = () => {
    const { user } = this.props

    this.setState({
      editMode: !this.state.editMode,
      whatsapp: user.fields && user.fields.whatsapp ? user.fields.whatsapp : '',
      department: user.fields && user.fields.department ? user.fields.department : '',
      birthday: user.fields && user.fields.birthday ? user.fields.birthday : '',
      tags: user.fields && user.fields.tags ? user.fields.tags : [],
      tagsMaxReached: false,
      tagsNotification: user.fields && user.fields.tagsNotification ? user.fields.tagsNotification : ''
    })
  }

  handleChange = (e) => {
    const target = e.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value
    })
  }

  handleTagClick = (tag) => {
    if (this.state.tagsMaxReached)
      this.setState({tagsMaxReached: false})

    const clickedTagId = tag._id
    if (this.state.tags.includes(clickedTagId))
      this.setState((prevState) => ({tags: prevState.tags.filter(tagId => tagId != clickedTagId)}))
    else {
      if (this.state.tags.length == 6)
        this.setState({tagsMaxReached: true})
      else
        this.setState((prevState) => ({tags: prevState.tags.concat(clickedTagId)}))
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const newData = {
      fields: {
        whatsapp: this.state.whatsapp || '',
        birthday: this.state.birthday || '',
        department: this.state.department || '',
        tags: this.state.tags || '',
        tagsNotification: this.state.tagsNotification || ''
      }
    }
    if (this.state.avatar) {
      newData.avatar = this.state.avatar
    }
    await this.props.onSubmit(newData)
    this.setState({
      editMode: !this.state.editMode
    })
    jump(-1000)
  }

  toggleTagsCheckboxChange = () => {
    this.setState(({ tagsNotification }) => (
      {
        tagsNotification: !tagsNotification,
      }
    ));
  }


  render () {
    const { user, isOwner, isLoading } = this.props
    return (
      <ProfileForm onSubmit={this.handleSubmit}>
        <ProfileAvatar id={user.id} date={user.updatedAt} />
        <ProfileName>{`${user.surnames}, ${user.names}`}</ProfileName>
        <ProfileMail mail={user.arrayData.join(' - ')} />
        { isOwner && !this.state.editMode ? <ButtonLink onClick={this.toggleEdit}>Editar perfil</ButtonLink> : null }
        { isLoading ? <p>...</p> : null}
        {
          this.state.editMode
            ? <div>
              <ProfileLabel htmlFor='avatar'>
          Imagen de perfil
                <FileBase64
                  multiple={false}
                  onDone={this.getFiles}
                  style={{ marginTop: '10px' }} />
              </ProfileLabel>
              <ProfileLabel htmlFor='birthday'>
                Fecha de Nacimiento
                <ProfileInput type='text'
                  name='birthday'
                  value={this.state.birthday}
                  onChange={this.handleChange}
                  required
                  readOnly={!isOwner}
                  disabled={!isOwner}
                  placeholder='30/02/1900' />
                  <span style={{ color: '#FB5735', fontSize: '1.1rem' }}>Requerido. En formato dd/mm/yyyy</span>
              </ProfileLabel>
              <ProfileLabel htmlFor='department'>
          Departamento
                {isOwner
                  ? <ProfileSelect name='department' value={this.state.department} options={departmentList} onChange={this.handleChange} />
                  : <ProfileInput type='text' name='department' value={this.state.department} readOnly disabled />
                }
              </ProfileLabel>
              <ProfileLabel htmlFor='whatsapp'>
          Telefono de Whatsapp
                <ProfileInput
                  type='text'
                  name='whatsapp'
                  value={this.state.whatsapp}
                  readOnly={!isOwner}
                  required
                  disabled={!isOwner}
                  onChange={this.handleChange} />
                  <span style={{ color: '#FB5735', fontSize: '1.1rem' }}>Requerido.</span>
              </ProfileLabel>
              {/* <ProfileLabel htmlFor='occupation'>
          Ocupación
                <ProfileInput
                  type='text'
                  name='occupation'
                  value={this.state.occupation}
                  readOnly={!isOwner}
                  disabled={!isOwner}
                  onChange={this.handleChange} />
              </ProfileLabel>
              { isOwner && user.roles.includes('accountable')
                ? <ProfileLabel htmlFor='party'>
          Bloque
                  <ProfileInput
                    type='text'
                    name='party'
                    value={this.state.party}
                    readOnly={!isOwner}
                    disabled={!isOwner}
                    onChange={this.handleChange} />
                </ProfileLabel>
                : null
              } */}
              <ProfileLabel htmlFor='tags'>
          Etiquetas de interés
                <TagsNotificationCheckboxDiv>
                  <input
                    type="checkbox"
                    name='tagsNotification'
                    checked={this.state.tagsNotification}
                    onChange={this.toggleTagsCheckboxChange} />
                Deseo recibir notificaciones de futuros proyectos asociados a mis etiquetas de interés
                </TagsNotificationCheckboxDiv>
                {this.state.tagsMaxReached &&
                  <InputErrorSpan>Se pueden elegir hasta 6 etiquetas de interés</InputErrorSpan>
                }
                <ProfileTags
                  name='tags'
                  allTags={this.state.allTags}
                  tags={this.state.tags}
                  onTagClick={this.handleTagClick} />
              </ProfileLabel>
              <ProfileButtonWrapper>
                <SubmitInput
                  type='submit'
                  value='Guardar cambios' />
              </ProfileButtonWrapper>
            </div>
            : null
        }
      </ProfileForm>
    )
  }
}

export default WithDocumentTagsContext(Profile)
