import React from 'react'

import Racket from './Containers/racket'
import Oferta from './Containers/Oferta'

import OutrasOfertas from './Containers/OutrasOfertas'
import Descricao from './Containers/Descricao'

import { mostraProduto } from './Events/mostraProduto'

const Produto = () => {
  mostraProduto()

  return (
    <>
      <section className='produto active'>
        <Racket/>

        <Oferta/>
        <OutrasOfertas/>

        <Descricao/>
      </section>
    </>
  )
}

export default Produto
