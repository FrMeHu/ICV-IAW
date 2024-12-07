'use client'
import localFont from "next/font/local";
import "./globals.css";
import  "bootstrap/dist/css/bootstrap.min.css";
import AddBootstrap from "@/AddBootstrap";



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



function Cargando() {
  return (
    <img className="imagen" src="/Loading_2.gif"></img>
  )
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <AddBootstrap/>
          <main>{children}</main>
      </body>
    </html>
  );
}
