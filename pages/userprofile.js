import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Navbar from '../containers/navbar'
import UserProfileContainer from '../containers/user-profile/component'
import MyProjects from '../containers/my-projects/component'
import Footer from '../containers/footer'

const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  min-height:100vh;
  background-color: #FFF;
`

class UserProfile extends Component {
  static getInitialProps ({ query: { id } }) {
    return { id }
  }

  render () {
    return (
      <Wrapper>
        <div>
          <Navbar />
          <UserProfileContainer userId={this.props.id} />
          <hr />
          <MyProjects userId={this.props.id} />
        </div>
        <Footer />
      </Wrapper>
    )
  }
}

UserProfile.propTypes = {
  id: PropTypes.string
}

export default UserProfile
