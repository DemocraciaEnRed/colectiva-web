import React, { Component } from 'react'

import Navbar from '../containers/navbar'
import PoliticasDePrivacidad from '../components/politicas-de-privacidad/component'
import Footer from '../containers/footer'

export default class extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <PoliticasDePrivacidad />
        <Footer />
      </div>
    )
  }
}
