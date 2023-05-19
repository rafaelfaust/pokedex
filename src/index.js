import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from './hooks'
import Router from './routes'
import GlobalStyles from './styles/globalStyles'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <ThemeProvider>
      <Router />
    </ThemeProvider>
    <GlobalStyles />
  </>
)
