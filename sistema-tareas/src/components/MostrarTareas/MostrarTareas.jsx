import React from 'react'
import { getTareas } from '../../servers/servicesConsultas'


function MostrarTareas() {
  return (
    <div>
      <br />
      <label htmlFor="TR">Tareas Registradas</label>
      <div id=''></div>
      <br />
      <label htmlFor="">Tareas Completadas</label>
      <div id='TC'></div>
    </div>
  )
}

export default MostrarTareas
