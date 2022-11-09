import React, { Component } from 'react'

import SecondaryNavbar from '../containers/secondary-navbar/component'
import PoliticasDePrivacidad from '../components/politicas-de-privacidad/component'
import SecondaryFooter from '../containers/footer/component'

export default class extends Component {
  render () {
    return (
      <div>
        <SecondaryNavbar />
        <PoliticasDePrivacidad />
        <SecondaryFooter />
      </div>
    )
  }
}
