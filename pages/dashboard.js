import React from 'react'

import SecondaryNavbar from '../containers/secondary-navbar/component'
import DashboardBar from '../containers/dashboard-bar/component'
import DashboardPublished from '../containers/dashboard-published/component'
import DashboardDrafts from '../containers/dashboard-drafts/component'

export default () => (
  <div>
    <SecondaryNavbar/>
    <DashboardBar />
    <DashboardDrafts />
    <DashboardPublished />
    <SecondaryFooter />
  </div>
)
