import dani from './assets/dani.png'
import './App.css'
import { useState } from 'react'
import carta from './assets/carta.png'
import linkedin from './assets/linkedin.png'
import descargas from './assets/descargas.png'
import telefono from './assets/telefono.png'
import bufalo from './assets/bufalo.jpg'
import bright from './assets/bright.png'
import logo from './assets/Dsal.png'

function App() {
  const [gradient, setGradient] = useState(
    'linear-gradient(to right,rgb(132, 189, 207),rgb(240, 240, 240))'
  )
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

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
        <nav>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <img className="logo-dsal" src={logo} alt="" />
            <div className="menu-toggle" onClick={toggleMenu}>
              &#9776; {/* Icono de hamburguesa */}
            </div>
            <div className={`nav-links ${isOpen ? 'show' : ''}`}>
              <h4>
                <a href="#presentacion">Reel</a>
              </h4>
              <h4>
                <a href="#sobremi">Sobre mí</a>
              </h4>
              <h4>
                <a href="#proyectos">Proyectos</a>
              </h4>
              <h4>
                <a href="#contacto">Contacto</a>
              </h4>
            </div>
          </div>
        </nav>
        <div className="foto">
          <img
            style={{ width: '500px' }}
            src={dani}
            alt="foto de medio cuerpo de daniel"
          />
          <div className="nombre">
            <p>Hola, soy</p>
            <h1>Daniel Sal Aparicio!</h1>
            <h2>Animador de personajes</h2>
          </div>
        </div>
        <div id="presentacion" class="video-container">
          <iframe
            src="https://player.vimeo.com/video/1045323530"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div id="sobremi" style={{ height: '100vh' }}>
          <div className="sobremi">
            <h2>Sobre mí:</h2>
            <p>
              Soy animador de personajes, gran apasionado de la animación y con
              muy buena actitud. Siempre estando al día en mi formación, lo
              último que he realizado ha sido un curso en
              <strong>Animworkshop</strong>, dónde realicé planos de animación
              3D enfocados en la fisicalidad de los personajes y profundicé aún
              más mis conocimientos de <strong>Autodesk Maya</strong> .
              <br />
              Me encanta la animación y el dibujo por su característica de
              transmitir historias. Tengo una sólida base en materia
              audiovisual, ilustración y principios de la animación.
              <br /> Antes de comenzar en la animación hice mis trabajos como
              ilustrador y diseño de personajes en un videojuego
              <strong>“Wardians”</strong>.
              <br />
              Realicé el <strong>máster en animación en la U-tad</strong> y,
              posteriormente, trabajé en el largometraje
              <strong>"Buffalo Kids"</strong> y en el corto
              <strong>"Bright"</strong>, el cual resultó ganador como el más
              votado en la Company Day. Mi aptitud me ayudó a integrarme
              perfectamente en el flujo de trabajo de los estudios, y esta
              experiencia me ha servido para consolidarme en mi carrera
              profesional.
              <br /> Estoy entusiasmado por seguir creciendo profesionalmente en
              este apartado y aportar mi creatividad y energía al equipo y se
              transmita al resultado final de la producción. Si te interesa
              conocer más estaré encantado de conectar contigo.
            </p>
          </div>
        </div>
        <div id="proyectos" className="proyectos">
          <h2 style={{ fontSize: '50px' }}>Proyectos</h2>
          <div className="proyecto">
            <img src={bufalo} alt="Bufalo Kids" />
            <div className="proyecto-info">
              <h2>BUFFALO KIDS. CORE ANIMATION – WB feature animation</h2>
              <ul>
                <li>
                  <strong>CFX character animation y animador 3d</strong> .
                  Realización de animación secundaria de los personajes como
                  pelo, ropa y accesorios. Animador de personajes en algún
                  plano.
                </li>
                <li>Autodesk MAYA + Ragdoll dynamics</li>
              </ul>
            </div>
          </div>
          <div className="proyecto">
            <img src={bright} alt="Bright" />
            <div className="proyecto-info">
              <h2>BRIGHT. U-tad – shortfilm</h2>
              <ul>
                <li>
                  <strong>Animador 3d.</strong> Animación de los personajes en
                  varios planos
                </li>
                <li>Autodesk MAYA</li>
              </ul>
            </div>
          </div>
        </div>
        <div id="contacto" className="proyectos">
          <h2 style={{ fontSize: '50px' }} ç>
            Contacto
          </h2>
          <div className="contacto">
            <a className="boton boton-descargas" href="CV2025Dani.pdf" download>
              <img
                style={{ width: '20px' }}
                src={descargas}
                alt="icono descargas"
              />
              Descargar CV
            </a>
            <div>
              <a className="boton boton-telefono" href="tel:661075099">
                <img
                  style={{ width: '25px' }}
                  src={telefono}
                  alt="icono telefono"
                />
                661075099
              </a>
            </div>
            <div>
              <a
                className="boton boton-carta"
                href="mailto:daniel.sal.apa@gmail.com"
              >
                <img style={{ width: '25px' }} src={carta} alt="icono carta" />
                danielsalaparicio@gmail.com
              </a>
            </div>
            <div>
              <a
                className="boton boton-linkedin"
                href="https://www.linkedin.com/in/daniel-sal-aparicio-70b24255/"
              >
                <img
                  style={{ width: '25px' }}
                  src={linkedin}
                  alt="icono linkedin"
                />
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
