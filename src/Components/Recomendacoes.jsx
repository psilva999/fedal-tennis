import React from 'react'
import StrokeOfGenius from '../Assets/images/0-stroke-of-genius.jpg'
import NadalXRuud from '../Assets/images/1-nadal-x-ruud.jpg'

const Recomendacoes = () => {
  return (
    <div className='recomendacoes'>
      <figure>
        <img src={ StrokeOfGenius } alt='Documentário Stroke of Genius'/>
        <figcaption>Doc semanal: Stroke Of Genius</figcaption>
      </figure>

      <figure>
        <img src={ NadalXRuud } alt='Nadal x Ruud - final Roland Garros 2022'/>
        <figcaption>ao vivo</figcaption>
      </figure>
    </div>
  )
}

export default Recomendacoes
