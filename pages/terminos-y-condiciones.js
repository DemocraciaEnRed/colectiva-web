import React, { Component } from 'react'
import SecondaryNavbar from '../containers/secondary-navbar/component'
import TerminosYCondiciones from '../components/terminos-y-condiciones/component'
import SecondaryFooter from '../containers/footer/component'

export default class extends Component {
  render () {
    return (
      <div>
        <SecondaryNavbar />
        <TerminosYCondiciones />
        <SecondaryFooter />
      </div>
    )
  }
}
