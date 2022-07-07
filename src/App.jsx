import React from 'react'
import { Link } from 'react-scroll'

import './Css/app.min.css'

import Header from './Components/Header'
import Tenistas from './Components/Tenistas'

import Federer from './Components/Federer'
import Guga from './Components/Guga'
import Nadal from './Components/Nadal'

import Recomendacoes from './Components/Recomendacoes'
import VoltaProTopo from './Assets/svg/2-volta-topo.svg'

import Produto from './Components/Produto'
import Footer from './Components/Footer'

import { marcaTexto } from './Components/Events/marcaTexto'
import { escreveFrase } from './Components/Events/escreveFrase'

import { mostraConquistas, contaConquistas, mostraFatos } from './Components/Events/mostraDados'
import { barraDeProgresso } from './Components/Events/barraDeProgresso'

import { voltaProTopo } from './Components/Events/voltaProTopo'
import { closeMenuFromOutside } from './Components/Events/handleMenu'
import { federerContent } from './Components/Events/tennisPlayerContent'

function App() {
  marcaTexto()
  mostraConquistas()

  window.addEventListener('click', closeMenuFromOutside)
  
  window.addEventListener('load', () => { 
    federerContent()
    contaConquistas()
    voltaProTopo()
  })

  window.addEventListener('scroll', () => { 
    barraDeProgresso()
    marcaTexto()

    escreveFrase()
    mostraFatos()
    voltaProTopo()
  })

  return (
    <>
      <div className='linha-de-leitura'></div>
      <div className='top'></div>

      <Header/>
      <main>
        <Tenistas/>

        <section className='content active'>
          <article className='tenista-fgn active'>
            <Federer/>
          </article>
          
          <Recomendacoes/>
        </section>

        <section className='produto'>
          {/* <Produto/> */}
        </section>
      </main>

      <Link activeClass="active"
          to='top'
          spy={ true }
          smooth={ true }
          offset={ -145 }
          duration={ 600 }
          className='link-scroll'>

          <button className='volta-pro-topo' onClick={ closeMenuFromOutside }>
            <img src={ VoltaProTopo }/> </button>
      </Link>

      <Footer/>
    </>

  )
}

export default App
