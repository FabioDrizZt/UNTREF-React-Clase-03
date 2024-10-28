import { useState } from 'react'

export default function ListaTareas({count}) {
  const [tareas, setTareas] = useState(['Comprar Leche', 'Estudiar React'])
  const [nuevaTarea, setNuevaTarea] = useState('')

  const handleChange = (event) => {
    setNuevaTarea(event.target.value)
  }
  const agregarTarea = () => {
    setTareas([...tareas, nuevaTarea])
    setNuevaTarea('')
  }

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <div className="card">
        <button>
          count is {count}
        </button>
      </div>
      <label htmlFor="nombre">Ingrese su nombre: </label>
      <input type="text" name="nombre" id="nombre" 
        placeholder='nombre de la tarea'
        value={nuevaTarea}
        onChange={handleChange}
      />
      <button onClick={agregarTarea}>Agregar tarea</button>
      <ul>
        {tareas?.map((tarea,index)=> 
          <li key={index}>{tarea}</li>
        )}
      </ul>
      <hr />
    </div>
  )
}
