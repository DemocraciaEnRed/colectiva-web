import React, { Component } from 'react'

import SecondaryNavbar from '../containers/secondary-navbar/component'
import ValidarApoyo from '../components/validar-apoyo/component'
import SecondaryFooter from '../containers/footer/component'


export default class extends Component {
  render () {
    return (
      <div>
        <SecondaryNavbar />
        <ValidarApoyo />
        <SecondaryFooter />
      </div>
    )
  }
}
