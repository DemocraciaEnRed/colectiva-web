import React, { Component } from 'react'

import Navbar from '../containers/navbar'
import ValidarApoyo from '../components/validar-apoyo/component'
import Footer from '../containers/footer'


export default class extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <ValidarApoyo />
        <Footer />
      </div>
    )
  }
}
