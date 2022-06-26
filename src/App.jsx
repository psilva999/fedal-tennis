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
import Footer from './Components/Footer'

import { marcaTexto } from './Components/Events/marcaTexto'
import { escreveFrase } from './Components/Events/escreveFrase'

import { mostraConquistas, contaConquistas, mostraFatos } from './Components/Events/mostraDados'
import { barraDeProgresso } from './Components/Events/barraDeProgresso'
import { voltaProTopo } from './Components/Events/voltaProTopo'
import { closeMenuFromOutside } from './Components/Events/handleMenu'

function App() {
  marcaTexto()
  mostraConquistas()
  
  window.addEventListener('load', () => { 
    contaConquistas()
    voltaProTopo()
  })

  window.addEventListener('scroll', () => { 
    console.log(window.scrollY)
    barraDeProgresso()
    marcaTexto()

    escreveFrase()
    mostraFatos()
    voltaProTopo()
  })

  return (
    <>
      <div className='linha-de-leitura'></div>

      <Header/>
      <main>
        <Tenistas/>

        <section className='content'>
          {/* <Federer/> */}
          {/* <Guga/> */}
          <Nadal/>

          <Recomendacoes/>
        </section>
      </main>

      <Link activeClass="active"
          to='tenistas'
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
