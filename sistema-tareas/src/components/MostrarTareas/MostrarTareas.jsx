import React, { createElement } from 'react'
import './MostrarTareas.css'
import ServicesConsultas from '../../servers/ServicesConsultas'
import { useState,useEffect } from 'react';


function MostrarTareas() {
  const [InfoTareas, setInfoTareas] = useState([]);
  const [tareasEditadas, settareasEditadas]= useState('');

    useEffect(() => {
    cargarTareas();
  }, []);

  const cargarTareas = async () => {
    try {
      const data = await ServicesConsultas.getTareas();
      setInfoTareas(data);
    } catch (error) {
      console.error('Error al obtener tareas:', error);
    }
  };

  const editarTarea = async (id) => {
    if (!tareasEditadas.trim()) return;
    try {
      await ServicesConsultas.putTareas(id, {tareaTex: tareasEditadas});
      settareasEditadas(''); 
      cargarTareas
    } catch (error) {
      console.error("Error al editar la tarea :( :", error);
    }
  };

  const eliminarTarea = async (id) => {
    try {
      await ServicesConsultas.deleteTareas(id);
      cargarTareas(); 
    } catch (error) {
      console.error("Error al eliminar la tarea :( :", error);
    }
  };

  
  return (
    /* area en donde se mostraran las tareas */
    <div>
      <div>
        
        {/* el id "TR" significa Tareas Registradas */}
        <label htmlFor="TR">Tareas Registradas</label>
        <div id='TR'>
          <ul>{InfoTareas.map((item) => (
              <li key={item.id}>
                
                {item.tareaTex}

                <input type="text" placeholder= 'Edicion' value={tareasEditadas} onChange={(e) => settareasEditadas(e.target.value)}/>

                <button onClick={() => editarTarea(item.id)}>Editar</button>
                <button onClick={() => eliminarTarea(item.id)}>Eliminar</button>
              
              </li>
              ))}</ul>
        </div>
        
        {/* el id "TC" significa Tareas Completadas */}
        <label htmlFor="TC">Tareas Completadas</label>
        <div id='TC'><br /></div>

      </div>
    </div>
  )
}
export default MostrarTareas
