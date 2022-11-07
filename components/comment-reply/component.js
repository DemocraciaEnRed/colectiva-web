import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import getConfig from 'next/config'
import Icon from 'react-icons-kit'
import { clockO, sendO, mailReply } from 'react-icons-kit/fa'
import fetch from 'isomorphic-unfetch'
import Alert from '../../elements/alert/component'
import UserAvatar from '../../elements/user-avatar-logged/component'
import ProjectCreationDate from '../../elements/project-creation-date/component'

const { publicRuntimeConfig: { API_URL } } = getConfig()

const ReplySection = styled.div`
  margin-left: 15px;
  border-left: 1px solid #FB5735;
`

const ReplyText = styled.p`
  font-size: 1.2em !important;
  line-height: 1.5em !important;
  padding: 0.5rem 1rem;
  // margin-top: 1rem;
  border-left: 1px solid #FB5735;
  
  margin-left: 15px;
  margin-top: 0 !important;
  margin-bottom: 0 !important;

  white-space: pre-wrap;
`

const AutorName = styled.span`
  color: #2d4b5e;
  font-size: 1.2em !important;
  font-family: var(--bold);
`

const InputBox = styled.textarea`
  width: 95%;
  font-size: 1.2rem;
  color: #181818;
  line-height: 1.6rem !important;
  padding: 0.7rem 0;
  margin-left: 15px !important;
  border: 1px solid #dae1e7;
  border-left: none;
  border-right: none; 
  min-height: 60px;
  resize: vertical;
`

const ActionButton = styled.div`
  // border: 1px solid #FB5735;
  color: #FB5735;
  // padding: 0.7rem;
  width: 95%;
  font-size: 1.4rem;
  margin: 1rem 1rem;
  cursor: pointer;
  text-align: right;
  // background-color: #FB5735;
  // color: #fff;
  // font-family: var(--bold);
`
const ReplyButton = styled.div`
  color: #FB5735;
  // margin: 1rem 0;
  text-align:right;
  // margin-bottom: 3.3em;
  font-size: 1.4rem;
  cursor: pointer;
`
const Loading = styled.div`
  // background-color: #EDEDED;
  // padding: 0.7rem;
  width: 95%;
  font-size: 1.4rem;
  margin: 1em;
  text-align: right;
  color: #000;
`


class CommentReply extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputText: props.reply || null,
      showInput: false,
      isLoading: false,
      showAlert: false,
      alertText: null,
      alertType: null,
      sent: false
    }
    this.handleChange = this.handleChange.bind(this)
  }

  saveReply = async () => {
    const { isAuthor, comment, token, project, attachReply } = this.props
    const { inputText } = this.state
    if (!isAuthor) return false
    this.setState({
      isLoading: true,
      showAlert: false
    })
    fetch(`${API_URL}/api/v1/documents/${project._id}/comments/${comment}/reply`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify({
        'reply': inputText
      })
    }).then((res) => {
      if (res.ok) {
        attachReply(comment, inputText)
        this.setState({
          showAlert: true,
          alertText: 'Se ha guardado su respuesta',
          alertType: 'success',
          isLoading: false,
          showInput: false,
          sent: true
        })
      }
    }).catch((err) => {
      console.error(err)
      this.setState({
        showAlert: true,
        alertText: 'Ocurrió un error al guardar su respuesta',
        alertType: 'error',
        isLoading: false,
        showInput: false,
        sent: true
      })
    })
  }

  dismissAlert = () => {
    this.setState({
      showAlert: false
    })
  }

  showReplyInput = () => {
    this.setState({
      showInput: true
    })
  }

  handleChange (event) {
    this.setState({ inputText: event.target.value })
  }

  render () {
    let { reply, project, isAuthor } = this.props
    let { showInput, inputText, isLoading, sent } = this.state
    return (
      <Fragment>
        { reply && !showInput &&
        <ReplyText>
          <UserAvatar
            style={{marginBottom: '0px !important', backgroundColor: 'red'}}
            userId={project.author._id}
            name={project.author.fullname}
            subtitle={project.author.fields && project.author.fields.party ? project.author.fields.party : ''} />
          {reply}</ReplyText>
        }
        { !showInput && isAuthor &&
        <ReplyButton onClick={this.showReplyInput}>
          <Icon icon={mailReply} style={{ display: 'inline-block' }} />&nbsp;&nbsp;Responder
        </ReplyButton>
        }
        {
          showInput && isAuthor &&
          <Fragment>
            <ReplyText>
              <UserAvatar
                style={{ marginBottom: '0px !important', backgroundColor: 'red' }}
                userId={project.author._id}
                name={project.author.fullname}
                subtitle={project.author.fields && project.author.fields.party ? project.author.fields.party : ''} />
            </ReplyText>
            <ReplySection>
            <InputBox value={this.state.inputText} onChange={this.handleChange} placeholder={'Ingrese su respuesta'} autoFocus />
            </ReplySection>
            {
              isLoading
                ? <Loading><Icon icon={clockO} style={{ display: 'inline-block' }} />&nbsp;&nbsp;Enviando...</Loading>
                : <ActionButton onClick={this.saveReply}>
                  Enviar respuesta
                </ActionButton>
            }
          </Fragment>
        }
        {
          this.state.showAlert &&
          <Alert status={this.state.alertType} dismissAlert={this.dismissAlert}>
            {this.state.alertText}
          </Alert>
        }
      </Fragment>
    )
  }
}

export default CommentReply
