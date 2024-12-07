import React from 'react'
import './footer.module.css'
/* Iconos MaterialUI */
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function Footer({RRSS}) {
  return (
    <footer>
        {
            RRSS.map((red, index) => {
              if (red.nombre === "Facebook") {
                return <a key={index} href={red.url} >  <FacebookIcon sx={{ fontSize: 40, color: "blue" }} />   {red.nombre}</a>
              }
              else if (red.nombre === "Instagram") {
                return <a key={index} href={red.url} >  <InstagramIcon sx={{ fontSize: 40, color: "black" }} />  {red.nombre}</a>
              }
              else if (red.nombre === "Linkedin") {
                return <a key={index} href={red.url} >  <LinkedInIcon sx={{ fontSize: 40, color: "blue" }} />  {red.nombre}</a>
              }
              else {
                return <a key={index} href={red.url} >  <GoogleIcon sx={{ fontSize: 40, color: "black" }} />  {red.nombre}</a>
              }
            })            
        }
        {/*Enlace del instituto */}
        <a href="https://iescuravalera.es" > <img src="/logo.png" width="50" alt="logoIES"/> IES Cura Valera </a>
    </footer>
  )
}

export default Footer