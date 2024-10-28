import './App.css'
import Contador from './components/Contador'
import Formulario from './components/Formulario'
import ListaTareas from './components/ListaTareas'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const incrementar = () => setCount(count+1)
  const decrementar = () => setCount(count-1)

  return (
    <>
      <ListaTareas count={count}/>
      <Formulario />
      <Contador count={count} incrementar={incrementar} decrementar={decrementar} />
    </>
  )
}

export default App
