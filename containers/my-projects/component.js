import React, { Component, Fragment } from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'
import fetch from 'isomorphic-unfetch'
import Router from 'next/router'
import Section from '../section/component'
import Card from '../../components/card/component'
import CardNewProject from '../../components/card-new-project/component'
import WithUserContext from '../../components/with-user-context/component'
import TitleH2 from '../../elements/title-h2/component'
import Alert from '../../elements/alert/component'
import getConfig from 'next/config'

const { publicRuntimeConfig: { API_URL }} = getConfig()

const Grid = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 4.8rem 0 1.6rem;
  > div {
    margin-bottom: 56px;
  }
  @media (max-width: 1400px) {
    justify-content: space-around;
  }
`
const getClosingDate = () => {
  let closingDate = new Date()
  closingDate.setDate(closingDate.getDate() + 30)
  closingDate.setHours(0, 0, 0, 0)
  return closingDate.toISOString()
}

class MyProjects extends Component {
  constructor (props) {
    super(props)
    this.state = {
      projects: null,
      page: 1,
      noMore: false,
      showAlert: false,
      alertText: null,
      alertType: null,
      isLoading: false
    }
  }

  fetchProjects = async (token) => {
    try {
      const projects = await (await fetch(`${API_URL}/api/v1/documents/my-documents`, {
        'headers': {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      })).json()
      this.setState({
        projects: projects.results
      })
    } catch (error) {
      console.error(error)
    }
  }

  createProject = async () => {
    this.setState({
      isLoading: true
    })
    fetch(`${API_URL}/api/v1/documents`, {
      'method': 'POST',
      'headers': {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.props.authContext.keycloak.token
      },
      // 'body': JSON.stringify(newDocument)
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Forbidden')
        }
        return res.json()
      })
      .then((content) => {
        Router.push({
          pathname: '/propuesta',
          query: {
            id: content._id
          }
        })
      })
      .catch((err) => {
        this.setState({
          menu: false,
          showAlert: true,
          isLoading: false,
          alertStatus: 'error',
          alertText: 'Ocurrió un error al crear una nueva propuesta (¿Limite alcanzado?)'
        })
        console.error(err)
      })
  }

dismissAlert = () => {
  this.setState({
    showAlert: false
  })
}

async componentDidMount () {
  if (!this.props.authContext.keycloak) return
  if (!this.props.authContext.keycloak.authenticated && !this.props.authContext.user) return
  if (!this.props.userId || this.props.userId === this.props.authContext.user._id) {
    this.fetchProjects(this.props.authContext.keycloak.token)
  }
}

async componentWillUpdate (props) {
  if (!props.authContext.keycloak) return
  if (!props.authContext.keycloak.authenticated && !props.authContext.user) return
  if (props === this.props) return
  if (!props.userId || props.userId === props.authContext.user._id) {
    this.fetchProjects(props.authContext.keycloak.token)
  }
}

render () {
  const {
    projects,
    isLoading
  } = this.state
  if (this.props.authContext.user) {
    if (this.props.authContext.isAuthor) {
      return (
        <Section id='projects' noMargin >
          <TitleH2>Mis propuestas</TitleH2>
          { projects &&
          <Fragment>
            <Grid>
              { projects.map((p, i) => (
                <Card project={p} key={i} />
              ))}

              <CardNewProject create={this.createProject} loading={isLoading} />
            </Grid>
            {
              this.state.showAlert &&
              <Alert status={this.state.alertStatus} dismissAlert={this.dismissAlert}>
                {this.state.alertText}
              </Alert>
            }
          </Fragment>
          }
        </Section>
      )
    }
  }
  return null
}
}

export default WithUserContext(MyProjects)
