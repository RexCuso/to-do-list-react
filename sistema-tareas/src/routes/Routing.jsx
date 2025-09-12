import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import PaginaTareas from '../pages/PaginaTareas.jsx'

export default function Routing() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<PaginaTareas/>}/>

        </Routes>
      </Router>
    </div>
  )
}
