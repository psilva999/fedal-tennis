import React from 'react'
import { federerContent, gugaContent, nadalContent } from './Events/tennisPlayerContent.js'

import Federer from '../Assets/images/federer/0-federer.png'
import Guga from '../Assets/images/guga/0-guga.png'
import Nadal from '../Assets/images/nadal/0-nadal.png'

const Tenistas = () => {

  return (
    <section className='tenistas'>

      <button onClick={ federerContent }>
        <div className='efeito-stories federer'>
          <img src={ Federer }/> </div>

        <span>Federer</span>
      </button>

      <button onClick={ gugaContent }>
        <div className='efeito-stories guga'>
          <img src={ Guga }/> </div>

        <span>Guga</span>
      </button>

      <button onClick={ nadalContent }>
        <div className='efeito-stories nadal'>
          <img src={ Nadal }/> </div>

        <span>Nadal</span>
      </button>
    </section>
  )
}

export default Tenistas
