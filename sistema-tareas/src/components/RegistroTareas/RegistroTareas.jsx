import React, { useState } from 'react'
import './RegistroTareas.css'
import ServicesConsultas from '../../servers/ServicesConsultas'


function RegistroTareas() {
const [tareas, setTareas] = useState("")

const fetchTareas = () => {
    fetch('http://localhost:3001/tareas')
    .then((res) => res.json())
    .then((data) => setTareas(data))
    .catch((error) => console.error('Error al Llamar tarea:', error));
};

function BTguardar() {

    console.log("Tarea:", tareas);
    setTareas("");
}
    
  return (
    <div>
      <div id='AreaEntregas'>
        <label htmlFor="registroT">Registrar Tarea</label><br />
        <input  type="text" id='registroT'value={tareas}onChange={(e)=>  setTareas(e.target.value )}/>
        <button onClick={BTguardar}>Subir Tarea</button>
      </div>
    </div>
  )
}

export default RegistroTareas
