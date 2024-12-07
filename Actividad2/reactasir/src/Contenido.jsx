import React from 'react'
import styles from './contenido.module.css'
import BarraNav from './Nav'
import Avatar from '@mui/material/Avatar';
import { BrowserRouter as Router, Route, Routes, useParams, Outlet } from "react-router-dom";

function Contenido() {
  return (
    <>
      <Router>
        <BarraNav />
        <main>
          {/* ---------------------section------------------------------------------ */}
          <section>
            <Routes>
              <Route exact path="/" element={<Titulo />} />
              <Route path="/usuario/:nombre" element={<Usuario />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </section>
        </main>
      </Router>
    </>
  )
}

function Titulo() {
  return <h1>Actividad 2</h1>;
}

function About() {
  return <h1>Parametro introducido 👉 contacto</h1>;
}


// Actividad
// Contenido de Usuario
function Usuario() {
  //Lectura del parámetro de la URL
  const params = useParams();
  const avatarStyle = { width: '100px', height: '100px', };
  const imageUrl = `../public/${params.nombre}.jpg`;
  return <>    
    <h2>Usuario Actual: {params.nombre}</h2>
    <Avatar style={avatarStyle} src={imageUrl} alt={`Avatar de ${params.nombre}`} />
    <Outlet />
  </>
 }




function NotFound() {
  return <h2>ESTA RUTA NO ES VÁLIDA</h2>;
}




export default Contenido;