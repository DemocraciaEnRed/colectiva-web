import React, { Component, Fragment } from 'react'
import fetch from 'isomorphic-unfetch'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import getConfig from 'next/config'
import WithUserContext from '../../components/with-user-context/component'
import ProjectTextEdit from '../../components/project-text-edit'
import ProjectVideo from '../../components/project-video/component'

const { publicRuntimeConfig: { API_URL } } = getConfig()

const ActivacionContainer = styled.div`
  // min-height: 383px;
  width:90%;
  font-size: 1.2em;
  display: flex;
  background-color: #FFF;
  flex-direction:column;
  margin-right:auto;
  margin-left:auto;
  // padding:5% 20% 0% 10%;
  padding: 3% 3.5% 0%;
  
  // @media (max-width:769px){
  //   padding:5% 0px;
  // }

`

const ActivacionTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  color: #000;
  margin-bottom: 1.5rem;
  margin-top: 0;
`

const ActivacionFormContainer = styled.div`
  width: 75%;
  display: block;
  margin-top: 2rem;
  margin-bottom: 2rem;
  border: 1px solid #333333;
  padding: 15px;
  @media (max-width:769px){
    width: 100%;
  }
`

const CustomInput = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #e9e9e9;
  border-radius: 4px;
  padding: 0 10px;
  margin-bottom: 10px;
  // font-size: 1rem;
  color: #000;
  &:focus {
    outline: none;
    border: 1px solid #2857e6;
  }
  // disabled
  &:disabled {
    background-color: #e9e9e9;
  }
`

const CustomTextarea = styled.textarea`
  width: 100%;
  height: 150px;
  border: 1px solid #e9e9e9;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
  // font-size: 1rem;
  color: #000;
  &:focus {
    outline: none;
    border: 1px solid #2857e6;
  }
  &:disabled {
    background-color: #e9e9e9;
  }
  // disable resize
  resize: none;
`

const FormTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: #000;
  margin-bottom: 1.5rem;
  margin-top: 0;
`

const FieldLabel = styled.label`
  font-weight: 600;
  font-size: 1.2rem;
  color: #000;
  margin-bottom: 0.5rem;
  display: block;
`

const ButtonSubmit = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 4px;
  background-color: #fb5735;
  color: #fff;
  // font-size: 1rem;

  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: #f44336;
  }
`

const SuccessMessage = styled.div`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #4caf50;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 10px;
}
`

const ErrorMessage = styled.div`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #f44336;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 10px;
}
`

const TimelineContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-bottom: 2rem;
  @media (max-width:769px){
    width: 100%;
  }
`

const EventContainer = styled.div`
  width: '100%';
  // margin-bottom: 1rem;
  display: flex;
  flexDirection: row;
`
const EventBox = styled.div`
  width: 100%;
  background-color: #d9d9d9;
  display: flex;
  padding: 2.3rem 1.7rem;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  margin-left: 1rem;
  border-bottom: 25px solid #ffffff;
`

const EventTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: #000;
  margin-bottom: 1rem;
  margin-top: 0;
`

const EventText = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
  color: #000;
  margin-top: 0;
`

const EventImage = styled.img`
  width: 100%;
  height: 100%;
  margin-top: 1rem;
`

const ResponsiveYoutubeVideo = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  height: 0;
  overflow: hidden;
  max-width: 100%;
  margin: 0 auto;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const EventDateContainer = styled.div`
  width: 150px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-grow: 1;
  // overflow-y: hidden;
`

const EventDate = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  color: #000;
  margin-top: 25px;
  padding-right: 5px;
  text-align: right;
  width: 100%;
`

const EventDateDot = styled.div`
  display: block;
  position: absolute;
  top: 25px;
  right: 3px;
  width: 24px;
  height: 24px;
  background-color: #2857e6;
  border:3px solid #FFF;
  border-radius: 50%;
`

const EventDateLine = styled.div`
  width: ${(props) => props.last ? '0px' : '2px'};
  margin: 28px 15px 0px 15px
  height: 100%;
  background-color: #2857e6;
  display:flex;
  flex-direction:column;
`
const EventDeleteButton = styled.button`
  width: 30px;
  margin-left: 5px;
  height: 30px;
  border: none;
  font-size: 1.5rem;
  border-radius: 10px;
  background-color: #fb5735;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #f44336;
  }
`

const ButtonAgregarLink = styled.button`
  padding: 4px 8px;
  font-size: 12px;
  border: none;
  border-radius: 4px;
  background-color: #2857e6;
  color: #fff;
  // font-size: 1rem;
`

const LinkGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  margin-top: 10px;
`

const LinksFormList = styled.ul`
  margin-left: 20px;
  a {
    color: #2857e6;
    text-decoration: underline;
    font-size: 1.3rem;
  }
`
const EventLinks = styled.div`
  display: block;
  margin-top: 10px;
  a {
    display: block;
    margin-bottom: 5px;
    color: #2857e6;
    text-decoration: underline;
    font-size: 1.3rem;
    &:hover {
      // color is #2857e6 but 10% more lighter
      color: #3d6eeb;
    } 
  }
`

class Activacion extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      timeline: [],
      disableForm: false,
      eventForm: {
        title: '',
        text: '',
        date: '',
        imageUrl: '',
        youtubeId: '',
        links: []
      },
      urlAux: '',
      titleAux: '',
      formKey: 0,
      linkKey: 0,
      showSuccessMessage: false,
      showErrorMessage: false
    }
    this.editor = null
  }

  componentDidMount () {
    this.fetchProjectTimeline(this.props.project.currentVersion.version)
  }

  fetchProjectTimeline = async () => {
    try {
      this.setState({ isLoading: true })
      let response = await (await fetch(`${API_URL}/api/v1/timeline/${this.props.project._id}`, {
        headers: {
          Authorization: `Bearer ${this.props.authContext.keycloak.token}`,
          'Content-Type': 'application/json'
        }
      })).json()
      this.setState({
        isLoading: false,
        timeline: response
      })
    } catch (err) {
      console.error(err)
    }
  }

  handleEventFormChange = (e) => {
    const { eventForm } = this.state
    eventForm[e.target.name] = e.target.value
    this.setState({ eventForm })
  }

  handleFormChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleEventYoutubeIdChange = (e) => {
    const { eventForm } = this.state
    eventForm.youtubeId = e.target.value
    this.setState({ eventForm })
  }

  validateYoutubeURL = (url) => {
    const regExp = /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/gm
    return regExp.test(url)
  }
  
  extractYoutubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
    const match = url.match(regExp)
    return (match && match[2].length === 11) ? match[2] : null
  }

  handleEventFormSubmit = async (e) => {
    e.preventDefault()
    const { eventForm } = this.state
    // copy
    const newEventForm = Object.assign({}, eventForm)
    // remove empty fields
    Object.keys(newEventForm).forEach((key) => {
      if (!newEventForm[key]) {
        delete newEventForm[key]
      }
    })
    if (newEventForm.youtubeId) {
      if (this.validateYoutubeURL(newEventForm.youtubeId)) {
        newEventForm.youtubeId = this.extractYoutubeId(newEventForm.youtubeId)
      } else {
        this.setState({ showErrorMessage: true })
        setTimeout(() => {
          this.setState({ showErrorMessage: false })
        }, 5000)
        return
      }
    }
    this.setState({ disableForm: true })
    try {
      let response = await (await fetch(`${API_URL}/api/v1/timeline/${this.props.project._id}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${this.props.authContext.keycloak.token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newEventForm)
      })).json()
      console.log(response)
      this.setState({
        disableForm: false,
        timeline: [...this.state.timeline, response]
      })
      // clear the form data
      this.setState((prevState) => ({
        formKey: prevState.formKey + 1,
        showSuccessMessage: true,
        eventForm: {
          title: '',
          text: '',
          date: '',
          imageUrl: '',
          youtubeId: '',
          links: []
        }
      }))
      // fetch
      this.fetchProjectTimeline()
      // hide success message
      setTimeout(() => {
        this.setState({ showSuccessMessage: false })
      }, 5000)
    } catch (err) {
      // show error message for 5 seconds
      this.setState({ showErrorMessage: true })
      setTimeout(() => {
        this.setState({ showErrorMessage: false })
      }, 5000)
      console.error(err)
    }
  }

  handleEventDelete = async (id) => {
    try {
      let response = await (await fetch(`${API_URL}/api/v1/timeline/${this.props.project._id}/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${this.props.authContext.keycloak.token}`,
          'Content-Type': 'application/json'
        }
      })).json()
      console.log(response)
      this.setState({
        timeline: this.state.timeline.filter((event) => event._id !== id)
      })
    } catch (err) {
      console.error(err)
    }
  }

  handleAddLink = (e) => {
    e.preventDefault()
    const { eventForm } = this.state
    eventForm.links.push({
      url: this.state.urlAux,
      title: this.state.titleAux
    })
    // clear urlAux and titleAux
    this.setState((prevState) => ({
      linkKey: prevState.linkKey + 1,
      eventForm,
      urlAux: '',
      titleAux: ''
    }))

  }

  handleDeleteLink = (index) => {
    const { eventForm } = this.state
    eventForm.links.splice(index, 1)
    this.setState({ eventForm })
  }

  render () {
    const { project, isAuthor, editMode } = this.props
    const { isLoading, timeline, disableForm, formKey, showErrorMessage, showSuccessMessage, linkKey, eventForm } = this.state
    // if (!project) return null
    // const { isAuthor } = project
    let plugins = []
    plugins.push(ProjectTextEdit({ id: project.id, field: 'articles', isAuthor: false }))
    return (
      <ActivacionContainer>
        {
          isAuthor && editMode && (
            <ActivacionFormContainer>
              <FormTitle>NUEVO EVENTO</FormTitle>
              {
                showSuccessMessage &&
                <SuccessMessage>Evento creado correctamente</SuccessMessage>
              }
              {
                showErrorMessage &&
                <ErrorMessage>Ha ocurrido un error</ErrorMessage>
              }
              <form onSubmit={this.handleEventFormSubmit} key={`form-${formKey}`} >
                <div>
                  {/* event title */}
                  <FieldLabel htmlFor='title'>(Requerido) Título del evento</FieldLabel>
                  <div>
                    <CustomInput type='text' name='title' required disabled={disableForm} placeholder='Requerido. El título del evento' onChange={this.handleEventFormChange} />
                  </div>
                  {/* event text */}
                </div>
                <div>
                  {/* event title */}
                  <FieldLabel htmlFor='date'>(Requerido) Fecha del evento</FieldLabel>
                  <div>
                    <CustomInput type='date' name='date' required disabled={disableForm} placeholder='Requerido. La fecha del evento' onChange={this.handleEventFormChange} />
                  </div>
                  {/* event text */}
                </div>
                <div>
                  {/* event title */}
                  <FieldLabel htmlFor='text'>(Opcional) Cuerpo de texto</FieldLabel>
                  <div>
                    <CustomTextarea name='text' disabled={disableForm} onChange={this.handleEventFormChange} />
                  </div>
                  {/* event text */}
                </div>
                <div>
                  {/* event title */}
                  <FieldLabel htmlFor='imageUrl'>(Opcional) URL de imagen</FieldLabel>
                  <div>
                    <CustomInput type='text' name='imageUrl' disabled={disableForm} placeholder='URL de la imagen' onChange={this.handleEventFormChange} />
                  </div>
                  {/* event text */}
                </div>
                <div>
                  {/* event title */}
                  <FieldLabel htmlFor='youtubeId'>(Opcional) Youtube URL</FieldLabel>
                  <div>
                    <CustomInput type='text' name='youtubeId' disabled={disableForm} placeholder='https://www.youtube.com/watch?v=jfKfPfyJRdk' onChange={this.handleEventFormChange} />
                  </div>
                  {/* event text */}
                </div>
                <div>
                  {/* event title */}
                  <h3>Links relacionados</h3>
                  {
                    eventForm.links && eventForm.links.map((link, index) => (
                      <LinksFormList key={`link-${index}`}>
                        <li> <a href={link.url} target="_blank">{link.title}</a> <span onClick={() => this.handleDeleteLink(index)} style={{color: 'red', textDecoration: 'underline', cursor: 'pointer', fontSize: '1rem'}}>(Eliminar)</span></li>
                      </LinksFormList>
                    ))
                  }
                  {
                    eventForm.links && eventForm.links.length == 0 &&
                    <p>&nbsp;&nbsp;&nbsp;No hay links agregados</p>
                  }
                  <LinkGrid>
                    <div>
                      <FieldLabel htmlFor='urlAux'>Ingrese la URL del link</FieldLabel>
                      <div>
                        <CustomInput type='text' name='urlAux' key={`input-urlAux-${linkKey}`} disabled={disableForm} placeholder='https://google.com' onChange={this.handleFormChange} />
                      </div>
                    </div>
                    <div>
                      <FieldLabel htmlFor='titleAux'>Ingrese el titulo del link</FieldLabel>
                      <div>
                        <CustomInput type='text' name='titleAux' key={`input-titleAux-${linkKey}`} disabled={disableForm} placeholder='Descargar documento' onChange={this.handleFormChange} />
                      </div>
                    </div>
                  </LinkGrid>
                  <ButtonAgregarLink type='button' disabled={disableForm || (this.state.titleAux == '' || this.state.urlAux == '')} onClick={this.handleAddLink}>Agregar link</ButtonAgregarLink>
                  {/* event text */}
                </div>
                <br></br>
                <br></br>
                <div>
                  <ButtonSubmit type='submit' disabled={disableForm}>Crear evento</ButtonSubmit>
                </div>
              </form>
            </ActivacionFormContainer>
          )
        }
        <h1>
          Linea de tiempo
        </h1>
        <p>
          Ordenados de más reciente al mas antiguo
        </p>
        <TimelineContainer>
          {
            !isLoading && timeline.length === 0 && (
              <div>
                <h2>No hay eventos</h2>
              </div>
            )
          }
          {
            isLoading && (
              <div>
                <h2>Cargando...</h2>
              </div>
            )
          }
          {
            timeline.map((event, index) => {
              return (
                <EventContainer key={`event-${index}-${event._id}`}>
                  <EventDateContainer>
                    <EventDate>{event.date.split('T')[0]}</EventDate>
                    <EventDateDot />
                    <EventDateLine last={index === timeline.length - 1} />
                  </EventDateContainer>
                  <EventBox>
                    <EventTitle>{event.title}</EventTitle>
                    {
                      event.text && 
                        <EventText>{event.text}</EventText>
                    }
                    {
                      event.links && event.links.length > 0 && (
                        <EventLinks>
                          <h3>Links</h3>
                          <ul style={{ marginLeft: '15px' }}>
                            {
                              event.links.map((link, index) => (
                                <li key={`link-${index}`}>
                                  <a href={link.url} target="_blank">{link.title}</a>
                                </li>
                              ))
                            }
                          </ul>
                        </EventLinks>
                      )
                    }
                    {event.imageUrl && <EventImage src={event.imageUrl} />}
                    {event.youtubeId && <ProjectVideo youtubeId={event.youtubeId} />}
                  </EventBox>
                  {
                    isAuthor && editMode && (
                      <EventDeleteButton onClick={() => this.handleEventDelete(event._id)}>✖</EventDeleteButton>
                    )
                  }
                </EventContainer>
              )
            })
          }
        </TimelineContainer>
      </ActivacionContainer>
    )
  }
}

Activacion.propTypes = {
  project: PropTypes.object.isRequired,
  isAuthor: PropTypes.bool.isRequired,
  editMode: PropTypes.bool.isRequired,
  authContext: PropTypes.object.isRequired
}

export default WithUserContext(Activacion)
