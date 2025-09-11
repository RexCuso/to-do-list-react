import React, { useState } from 'react'
import './RegistroTareas.css'
import ServicesConsultas from '../../servers/ServicesConsultas'


function RegistroTareas() {
const [tareas, setTareas] = useState([]);

/* constante para actualisar datos al cabiarlos en su valor en el input, 
se ejecutara al hacer un cambio al valor del input {espero poder reutilisarla ;) }*/


/* const tareascambia = (e) => {
  setTareas(e.target.value)
} */

const BTguardar = async () => {
  if (!tareas.trim())return;
    const nuevaTarea ={tareaTex: tareas};

  try {
    await ServicesConsultas.postTareas(nuevaTarea);
    console.log('Tarea guardada :)');
    setTareas('');
    
  } catch (error) {
    console.error('PELIGROOOO, hubo error al guardar la tarea :', error);
  }  
}


    
  return (
    <div>
      <div id='AreaEntregas'>
        <label htmlFor="registroT">Registrar Tarea</label><br />
        
        <input  type="text" id='registroT' value={tareas} onChange={(e) => setTareas(e.target.value)}  />
        <button onClick={BTguardar} >Subir Tarea</button>
      </div>
    </div>
  )

};
export default RegistroTareas


