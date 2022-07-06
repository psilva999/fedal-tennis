import React from 'react'
import Detail from '../../Assets/svg/store/0-detalhe.svg'

import FirstMinRacket from '../../Assets/images/store/5-first-racket-min.jpg'
import SecondMinRacket from '../../Assets/images/store/6-second-racket-min.jpg'

import ThirdMinRacket from '../../Assets/images/store/7-third-racket-min.jpg'
import LastMinRacket from '../../Assets/images/store/8-last-racket-min.jpg'

const OutrasOfertas = () => {
  return (

    <article className='outras-ofertas'>
      <div>
        <h1>Produtos patrocinados</h1>
        <span>Anuncie aqui</span>

        <img src={ Detail } alt=''/>
      </div>

      <div className='min'>
        <img src={ FirstMinRacket }/>

        <div>
          <span>R$ 2100,00</span>
          <h1>R$ 1799,90</h1>
          <span>12x R$ 149,99 sem juros</span>
          <span>Frete grátis</span>
          <p>Raquete De Tênis Babolat Pure Aero Rafa Nadal</p>
        </div>
      </div>

      <div className='min'>
        <img src={ SecondMinRacket }/>
        
        <div>
          <span>R$ 2100,00</span>
          <h1>R$ 1799,90</h1>
          <span>12x R$ 149,99 sem juros</span>
          <span>Frete grátis</span>
          <p>Raquete De Tênis Babolat Pure Aero Rafa Nadal</p>
        </div>
      </div>

      <div className='min'>
        <img src={ ThirdMinRacket }/>
        
        <div>
          <span>R$ 2100,00</span>
          <h1>R$ 1799,90</h1>
          <span>12x R$ 149,99 sem juros</span>
          <span>Frete grátis</span>
          <p>Raquete De Tênis Babolat Pure Aero Rafa Nadal</p>
        </div>
      </div>

      <div className='min'>
        <img src={ LastMinRacket }/>
        
        <div>
          <span>R$ 2100,00</span>
          <h1>R$ 1799,90</h1>
          <span>12x R$ 149,99 sem juros</span>
          <span>Frete grátis</span>
          <p>Raquete De Tênis Babolat Pure Aero Rafa Nadal</p>
        </div>
      </div>
    </article>
  )
}

export default OutrasOfertas
