import React from 'react'
import './Css/app.min.css'

import Header from './Components/Header'

import Tenistas from './Components/Tenistas'

import Footer from './Components/Footer'

function App() {
  return (
    <>
      <Header/>

      <main>
        <Tenistas/>
      </main>

      <Footer/>
    </>
  )
}

export default App
