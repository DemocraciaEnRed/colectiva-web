import React, { Component } from 'react'
import Navbar from '../containers/navbar'
import TerminosYCondiciones from '../components/terminos-y-condiciones/component'
import Footer from '../containers/footer'

export default class extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <TerminosYCondiciones />
        <Footer />
      </div>
    )
  }
}
