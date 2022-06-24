import React from 'react'
import StrokeOfGenius from '../Assets/images/0-stroke-of-genius.jpg'
import NadalXRuud from '../Assets/images/1-nadal-x-ruud.jpg'

const Recomendacoes = () => {
  return (
    <div className='recomendacoes'>
      <div id='divisor'></div>

      <figure className='doc'>
        <a href='https://www.youtube.com/watch?v=YSKzK4aKGoI&t=2952s' target='_blank'>
          <img src={ StrokeOfGenius } alt='Documentário Stroke of Genius'/>
          <figcaption>Doc semanal: Stroke Of Genius</figcaption>
        </a>
      </figure>

      <figure className='ao-vivo'>
        <a href='https://www.youtube.com/watch?v=l3KfbfkxJOU' target='_blank'>
          <img src={ NadalXRuud } alt='Nadal x Ruud - final Roland Garros 2022'/>
          <figcaption>ao vivo</figcaption>
        </a>
      </figure>

    </div>
  )
}

export default Recomendacoes
