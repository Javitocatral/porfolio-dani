import dani from './assets/dani.png'
import './App.css'
import { useState } from 'react'

function App() {
  const [gradient, setGradient] = useState(
    'linear-gradient(to right, #add8e6, #d3d3d3)'
  )

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event
    const width = window.innerWidth
    const height = window.innerHeight

    // Calcular la nueva posición del gradiente basado en la posición del ratón
    const xPercent = (clientX / width) * 100
    const yPercent = (clientY / height) * 100

    // Modificar el gradiente basado en la posición del ratón
    const newGradient = `radial-gradient(circle at ${xPercent}% ${yPercent}%,rgb(132, 189, 207),rgb(240, 240, 240))`
    setGradient(newGradient)
  }
  return (
    <>
      <div
        className="container"
        onMouseMove={handleMouseMove}
        style={{ background: gradient }}
      >
        <div>
          <img
            style={{ width: '500px' }}
            src={dani}
            alt="foto de medio cuerpo de daniel"
          />
        </div>
      </div>
    </>
  )
}

export default App
