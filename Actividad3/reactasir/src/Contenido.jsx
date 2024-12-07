import React from 'react'
import styles from './contenido.module.css'
import BarraNav from './Nav'
import { BrowserRouter as Router, Route, Routes, useParams, Outlet } from "react-router-dom";
import Cartas from './Cartas'
import ControlledCarousel from './Carousel'

function Contenido() {
  return (
    <>
      <Router>
        <BarraNav />
        <main>
          {/* ---------------------section------------------------------------------ */}
          <section>
            <Routes>
              <Route exact path="/" element={<Cartas />} />
              <Route path="/noticias" element={<Noticias />}>
                <Route path="/noticias/jefatura" element={<Jefatura />} />
                <Route path="/noticias/informatica" element={<Informatica />} />
              </Route>
              <Route exact path="/galeria" element={<ControlledCarousel />} />
              <Route path="/about" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </section>
        </main>
      </Router>
    </>
  )
}



// Contenido de Noticias
function Noticias() {
  return <div>
    <h1>NOTICIAS DE HUÉRCAL OVERA</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <hr />
    <Outlet />
    </div>
}

function Jefatura() {
  return <div><h2>NOTICIAS DE JEFATURA</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nesciunt nam dolore cum quibusdam! Nemo eum quae exercitationem culpa repudiandae veniam nihil, accusamus, 
    laboriosam, ullam nostrum obcaecati velit porro quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quaerat eius ut? Enim reprehenderit quis aspernatur error ipsum repellat temporibus consequuntur, a soluta cum unde illum itaque ipsa cumque. Molestias.</p>
  </div>;
}
function Informatica() {
  return <div><h2>NOTICIAS DE INFORMÁTICA</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nesciunt nam dolore cum quibusdam! Nemo eum quae exercitationem culpa repudiandae veniam nihil, accusamus, 
    laboriosam, ullam nostrum obcaecati velit porro quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quaerat eius ut? Enim reprehenderit quis aspernatur error ipsum repellat temporibus consequuntur, a soluta cum unde illum itaque ipsa cumque. Molestias.</p>
  </div>;
}

// Pagina404
function NotFound() {
  return <h2>ERROR 404</h2>;
}

export default Contenido;