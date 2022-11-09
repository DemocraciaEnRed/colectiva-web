import React from 'react'

import SecondaryNavbar from '../containers/secondary-navbar/component'
import Hero from '../containers/hero/component'
import Participate from '../containers/participate'
import Projects from '../containers/projects/component'
import WhatIsIt from '../containers/what-is-it'
import About from '../containers/about/component'
import SecondaryFooter from '../containers/footer/component'

export default () => (
  <div>
    <SecondaryNavbar/>
    <Hero />
    <WhatIsIt />
    <Participate />
    <hr />
    <Projects />
    <hr />
    <About />
    <SecondaryFooter />
  </div>
)
