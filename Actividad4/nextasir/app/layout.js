'use client'
import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import  "bootstrap/dist/css/bootstrap.min.css";
import AddBootstrap from "@/AddBootstrap";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <AddBootstrap/>
        <header>

          {/* navbar de boostrap */}
          <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <a className="navbar-brand" href="/"> Navbar </a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                  <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Inicio </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item" href="/membership-login">Plan de Centro</a></li>
                      </ul>
                    </li>

                    
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="/category/noticias" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Noticias </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item" href="/category/igualdad-paz">Plan de Igualdad y Escuela: espacio de Paz</a></li>
                        <li><a className="dropdown-item" href="/category/adultos">Adultos</a></li>
                        <li><a className="dropdown-item" href="/category/jefaturadeestudios">Jefatura de estudios</a></li>
                      </ul>
                    </li>


                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Oferta Educativa </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item" href="/docencia">Oferta Educativa</a></li>
                        <li><a className="dropdown-item" href="https://www.juntadeandalucia.es/educacion/senecav2/seneca/biblioweb/portal/04002714">Biblioteca Escolar</a></li>
                        <li><a className="dropdown-item" href="/docencia">Departamentos</a></li>
                        <li><a className="dropdown-item" href="/btopa">BTOPA</a></li>
                        <li><a className="dropdown-item" href="/espa">ESPA</a></li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="/galeria-de-fotos">Videos y Fotos</a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="/contacto">Contacto</a>
                    </li>

                  </ul>
                </div>
              </div>
            </nav>
          </div>
          {/* navbar de boostrap */}





        </header>

        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
