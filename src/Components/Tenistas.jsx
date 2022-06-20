import React from 'react'

import Federer from '../Assets/images/federer/0-federer.png'
import Guga from '../Assets/images/guga/0-guga.png'
import Nadal from '../Assets/images/nadal/0-nadal.png'

const Tenistas = () => {
  return (
    <section className='tenistas'>
      
      <button>
        <div className='efeito-stories'>
          <img src={ Federer }/> </div>

        <span>Federer</span>
      </button>

      <button>
        <div className='efeito-stories'>
          <img src={ Guga }/> </div>

        <span>Guga</span>
      </button>

      <button>
        <div className='efeito-stories'>
          <img src={ Nadal }/> </div>

        <span>Nadal</span>
      </button>
    </section>
  )
}

export default Tenistas
