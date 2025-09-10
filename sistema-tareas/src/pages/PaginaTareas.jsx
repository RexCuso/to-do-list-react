import React from 'react'
import './PaginaTareas.css'
import RegistroTareas from '../components/RegistroTareas/RegistroTareas.jsx'
import MostrarTareas from '../components/MostrarTareas/MostrarTareas.jsx'

function PaginaTareas() {
  return (
    <div id='cuerpo'>
      <RegistroTareas/>
      <MostrarTareas/>
    </div>
  )
}

export default PaginaTareas
