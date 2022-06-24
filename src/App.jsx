import React from 'react'
import './Css/app.min.css'

import Header from './Components/Header'
import Tenistas from './Components/Tenistas'

import Federer from './Components/Federer'
import Footer from './Components/Footer'
import Recomendacoes from './Components/Recomendacoes'

function App() {
  return (
    <>
      <Header/>
      <main>
        <Tenistas/>

        <section className='content'>
          <Federer/>
          <Recomendacoes/>
        </section>
      </main>

      <Footer/>
    </>

  )
}

export default App
