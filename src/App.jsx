import React from 'react'
import './Css/app.min.css'

import Header from './Components/Header'
import Tenistas from './Components/Tenistas'

import Federer from './Components/Federer'
import Guga from './Components/Guga'
import Nadal from './Components/Nadal'

import Footer from './Components/Footer'
import Recomendacoes from './Components/Recomendacoes'

import { marcaTexto } from './Components/Events/marcaTexto'

function App() {
  marcaTexto()
  window.addEventListener('scroll', marcaTexto)

  return (
    <>
      <Header/>
      <main>
        <Tenistas/>

        <section className='content'>
          {/* <Federer/> */}
          <Guga/>
          {/* <Nadal/> */}

          <Recomendacoes/>
        </section>
      </main>

      <Footer/>
    </>

  )
}

export default App
