import React from 'react'

import Detail from '../../Assets/svg/store/0-detalhe.svg'
import Avaliacao from '../../Assets/svg/store/1-avaliacao.svg'
import CreditCard from '../../Assets/svg/store/2-credit.svg'

import Seta from '../../Assets/svg/store/3-seta.svg'
import Reply from '../../Assets/svg/store/4-reply.svg'
import Verified from '../../Assets/svg/store/5-verified.svg'

import Trophy from '../../Assets/svg/store/6-trophy.svg'
import Garantia from '../../Assets/svg/store/7-garantia.svg'

const Oferta = () => {
  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <article className='oferta'>
      <div>
        <span>30 vendidos</span>
        <img src={ Detail } alt='' className='detail'/>

        <h1>Raquete de Tênis Babolat Falcon Preta Azul e Prata</h1>

        <img src={ Avaliacao } alt='estrelas' className='stars'/>

        <span>EM ESTOQUE | SKU#: TR121205-286</span>
      </div>

      <p>
        A Raquete de Tênis Babolat Falcon oferece uma combinação perfeita entre precisão e controle com o objetivo de maximizar sua performance.
      </p>

      <div className='preco'>
        <span>R$ 499,90</span>
        <h1>
          R$ 269,91 
          <span> no PIX</span>
        </h1>

        <div>
          <img src={ CreditCard } alt='credit card'/>

          <span>
            <strong>R$ 299, 90 </strong> em até
            <strong> 7x</strong> de
            <strong> R$ 42,84</strong>
          </span>

        </div>
      </div>

      <div className='infos'>
        <span>
          Cor: <strong>Azul / Prata</strong>
        </span>

        <p>Descontos à partir de <strong>5 raquetes</strong></p>

        <div className='quantidade'>
          Quantidade: 
          <button>
            1 unidade 
            <img src={ Seta } alt='seta' className='seta'/>  
          </button>
        </div>

        <ul className='total-de-raquetes'>
          <li>1 unidade</li>
          <li>2 unidades</li>

          <li>3 unidades</li>
          <li>4 unidades</li>

          <li>5 unidades</li>
          <li>6 unidades</li>
        </ul>
      </div>
      
      <form onSubmit={ handleSubmit }>
        <button>COMPRAR</button>
        <button>Adicionar ao carrinho</button>
      </form>

      <div className='garantias'>
        <p>
          <img src={ Reply } alt=''/>

          <span>
            <span className='color-effect'>Devolução grátis. </span>
            Você tem 30 dias a partir da data de recebimento.
          </span>
        </p>

        <p>
          <img src={ Verified } alt=''/>

          <span>
            <span className='color-effect'>Compra Garantida. </span>
            Receba o produto que esta esperando ou devolvemos o dinheiro.
          </span>
        </p>

        <p>
          <img src={ Trophy } alt=''/>

          <span>
            <span className='color-effect'>Fedal Pontos. </span>
            Você acumula 

            <strong> 174 pontos.</strong>
          </span>
        </p>

        <p>
          <img src={ Garantia } alt=''/>

          <span>
            <span className='color-effect'>1 mês </span>
            de garantia de fábrica
          </span>
        </p>
      </div>
    </article>
  )
}

export default Oferta
