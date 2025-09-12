import React, { createElement } from 'react'
import './MostrarTareas.css'
import ServicesConsultas from '../../servers/ServicesConsultas'
import { useState,useEffect } from 'react';


function MostrarTareas() {
  const [InfoTareas, setInfoTareas] = useState([]);
  const [tareasEditadas, setTareasEditadas]= useState({});
  const [tareasCompletas, setTareasCompletas]= useState({});

    useEffect(() => {
    cargarTareas();
  }, []);

  const cargarTareas = async () => {
    if (checkCompleta == true) {
      try {
        const dataC = await ServicesConsultas.getTareas();
        setTareasCompletas(dataC);

      } catch (error) {
        console.error('Error al completar tarea:', error);
      }
    } else {
      try {
        const data = await ServicesConsultas.getTareas();
        setInfoTareas(data);
        checkCompleta == false; 
      } catch (error) {
        console.error('Error al obtener tareas:', error);
      }
    }
    
  };

  const editarTarea = async (id) => {
    const textoEditado = tareasEditadas[id];
    if (!textoEditado.trim()) return;
    try {
      await ServicesConsultas.putTareas(id, {tareaTex: textoEditado});
      setTareasEditadas((previo)=> {
        const updated ={...previo};
        delete updated[id];
        return updated; 
      }); 
      cargarTareas();
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
          {/* el ul sera lo que maneje la lista de tareas que se realisara  */}
          <ul>
            
            {InfoTareas.length === 0 ? (
              <li>No hay tareas</li>) :
                {/* el map aqui sera el encargado de imprimir la informacion guardada dentro del json  */} 
                (InfoTareas.map((item) => (
                  <li key={item.id}>
                    {item.tareaTex} <br />
                    <input
                      type="text"
                      placeholder="Escribe algo"
                      value={tareasEditadas[item.id] || ''}
                      onChange={(e) =>
                        setTareasEditadas({ ...tareasEditadas, [item.id]: e.target.value })}
                    />
                    <button onClick={() => editarTarea(item.id)}>Editar</button>
                    <button onClick={() => eliminarTarea(item.id)}>Eliminar</button><br />
                    <input type="checkbox" name="completa" id="checkCompleta" />
                  </li>))
                )
            }
          </ul>
      </div>
        
        {/* el id "TC" significa Tareas Completadas */}
        <label htmlFor="TC">Tareas Completadas</label>
        <div id='TC'> 
            <ul>
              {InfoTareas.map((item) => (
                  <li key={item.id}>
                    
                    
                  </li>))
                }
              
            </ul>



         </div>

      </div>
    </div>
  )
}
export default MostrarTareas
