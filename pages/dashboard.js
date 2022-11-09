import React from 'react'

import Navbar from '../containers/navbar'
import DashboardBar from '../containers/dashboard-bar/component'
import DashboardPublished from '../containers/dashboard-published/component'
import DashboardDrafts from '../containers/dashboard-drafts/component'

export default () => (
  <div>
    <Navbar/>
    <DashboardBar />
    <DashboardDrafts />
    <DashboardPublished />
    <Footer />
  </div>
)
