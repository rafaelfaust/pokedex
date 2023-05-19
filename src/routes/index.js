import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

import { CardDetails } from '../pages/Details'
import { Home } from '../pages/Home'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/pokemon/:id" element={<CardDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
