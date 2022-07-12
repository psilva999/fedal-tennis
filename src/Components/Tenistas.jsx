import React from 'react'
import { Link } from "react-router-dom"

import FedererImg from '../Assets/images/federer/0-federer.png'
import GugaImg from '../Assets/images/guga/0-guga.png'
import NadalImg from '../Assets/images/nadal/0-nadal.png'

import { federerContent, gugaContent, nadalContent } from './Events/tennisPlayerContent'

const Tenistas = () => {
  return (

    <section className='tenistas active'>
      <Link to='/federer' className='no-style'>
        <button onClick={ federerContent } className='button-federer'>
          <div className='efeito-stories federer'>
            <img src={ FedererImg }/> </div>
          <span>Federer</span>
        </button>
      </Link>

      <Link to='/guga' className='no-style'>
        <button onClick={ gugaContent } className='button-guga'>
          <div className='efeito-stories guga'>
            <img src={ GugaImg }/> </div>
          <span>Guga</span>
        </button>
      </Link>

      <Link to='/nadal' className='no-style'>
        <button onClick={ nadalContent } className='button-nadal'>
          <div className='efeito-stories nadal'>
            <img src={ NadalImg }/> </div>
          <span>Nadal</span>
        </button>
      </Link>
    </section>
    
  )
}

export default Tenistas
