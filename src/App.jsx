import dani from './assets/dani.png'
import './App.css'
import { useState } from 'react'

function App() {
  const [gradient, setGradient] = useState(
    'linear-gradient(to right,rgb(132, 189, 207),rgb(240, 240, 240))'
  )

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event
    const width = window.innerWidth
    const height = window.innerHeight

    const xPercent = (clientX / width) * 100
    const yPercent = (clientY / height) * 100

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
        <div>
          <h2>Sobre mí:</h2>
          <p>
            Soy animador de personajes, gran apasionado de la animación y con
            muy buena actitud. Siempre estando al día en mi formación, lo último
            que he realizado ha sido un curso en Animworkshop, dónde realicé
            planos de animación 3d enfocados en la fiscalidad de los personajes
            y profundicé aún más mis conocimientos de Autodesk Maya.
            <br />
            Me encanta la animación y el dibujo por su característica de
            transmitir historias. Tengo una sólida base en materia audiovisual,
            ilustración y principios de la animación.
            <br /> Antes de comenzar en la animación hice mis trabajos como
            ilustrador y diseño de personajes en un videojuego “Wardians”.
            <br />
            Después de realizar el máster en la U-tad de animación, trabajé en
            un largometraje “Buffalo Kids” y un corto “Bright” que salió ganador
            como el más votado de la Company Day. Mi aptitud me ayudó a
            integrarme perfectamente en el flujo de trabajo de los estudios y
            esta experiencia me ha servido para consolidarme en mi trabajo.
            <br /> Estoy entusiasmado por seguir creciendo profesionalmente en
            este apartado y aportar mi creatividad y energía al equipo y se
            transmita al resultado final de la producción. Si te interesa
            conocer más estaré encantado de conectar contigo.
          </p>
        </div>
      </div>
    </>
  )
}

export default App
