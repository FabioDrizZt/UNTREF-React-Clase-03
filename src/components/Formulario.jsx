import { useState } from 'react'

export default function Formulario() {
  const [usuario, setUsuario] = useState({
    nombre: '',
    email: '',
    edad: 0
  })

  const handleChange = (event) => {
    const {name,value} = event.target
    setUsuario({...usuario, [name]: value})
  }

  return (
    <div>
      <h1>Hola, {usuario.nombre} - {usuario.email}</h1>
      <h2>Formulario</h2>
      <label htmlFor="nombre">Ingrese su nombre: </label>
      <input type="text" name="nombre" id="nombre" 
        placeholder='Usuario'
        value={usuario.nombre}
        onChange={handleChange}
      />
<br />
      <label htmlFor="email">Ingrese su email: </label>
      <input type="text" name="email" id="email" 
        placeholder='usuario@dominio.com'
        value={usuario.email}
        onChange={handleChange}
      />
<br />
<label htmlFor="edad">Ingrese su edad: </label>
      <input type="text" name="edad" id="edad" 
        placeholder='18'
        value={usuario.edad}
        onChange={handleChange}
      />
    </div>
  )
}
