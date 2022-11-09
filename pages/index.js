import React from 'react'

import Navbar from '../containers/navbar'
import Hero from '../containers/hero/component'
import Participate from '../containers/participate'
import Projects from '../containers/projects/component'
import WhatIsIt from '../containers/what-is-it'
import About from '../containers/about/component'
import Footer from '../containers/footer'

export default () => (
  <div>
    <Navbar/>
    <Hero />
    <WhatIsIt />
    <Participate />
    <hr />
    <Projects />
    <hr />
    <About />
    <Footer />
  </div>
)
