import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'next/router'

import Navbar from '../containers/navbar'
import StaticInfo from '../containers/static-info'
import Footer from '../containers/footer'

class Info extends Component {
  state = {
    section: null
  }

  componentDidMount () {
    if (this.props.router.query.section) {
      this.setState({
        section: this.props.router.query.section
      })
    } else {
      this.setState({
        section: 'como-participar'
      })
    }
  }

  componentDidUpdate (prevProps, prevState) {
    const { query } = this.props.router
    if (query.section !== prevProps.router.query.section) {
      this.setState({
        section: query.section
      })
    }
  }

  changeSection = (section) => {
    this.setState({
      section: section
    })
  }

  render () {
    return (
      <div>
        <Navbar />
        <StaticInfo
          section={this.state.section}
          changeSection={this.changeSection} />
        <Footer />
      </div>
    )
  }
}

Info.propTypes = {
  section: PropTypes.string
}

export default withRouter(Info)
