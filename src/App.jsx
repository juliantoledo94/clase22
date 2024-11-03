
import { useRef } from 'react'
import './App.css'

function App() {
  
  const inputRef = useRef(null);

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(inputRef.current.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef}/>
      <button type='submit'>Enviar</button>
    </form>
  )
}

export default App
