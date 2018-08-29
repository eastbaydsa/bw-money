import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import ReactRouterGoogleAnalytics from 'react-router-ga'

import App from './app'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

ReactDOM.render(
  <Router>
    <ReactRouterGoogleAnalytics id={process.env.REACT_APP_GOOGLE_ANALYTICS_ID}>
      <App />
    </ReactRouterGoogleAnalytics>
  </Router>,
  document.getElementById('root')
)
registerServiceWorker()
