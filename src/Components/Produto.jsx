import React from 'react'

import MainRacket from '../Assets/images/store/1-main-racket.jpg'
import RacketDetail from '../Assets/images/store/2-racket-detail.jpg'

import ThirdRacket from '../Assets/images/store/3-racket-detail-third.jpg'
import LastRacket from '../Assets/images/store/4-racket-detail-last.jpg'

const Produto = () => {
  return (
    <>
      <div className='racket-container'>
        <img src={ MainRacket }/>
        <img src={ MainRacket }/>

        <img src={ RacketDetail }/>
        <img src={ ThirdRacket }/>
        <img src={ LastRacket }/>
      </div>

      <article className='oferta'>
        <div>
          <span>30 vendidos</span>

          <h1>Raquete de Tênis Babolat Falcon Preta Azul e Prata</h1>

          <img src='' alt='estrelas'/>

          <span>EM ESTOQUE | SKU#: TR121205-286</span>
        </div>

        <p>
          A Raquete de Tênis Babolat Falcon oferece uma combinação perfeita entre precisão e controle com o objetivo de maximizar sua performance.
        </p>

        <div>
          <span>R$ 499,90</span>
          <h1>
            R$ 269,91 
            <span>no PIX</span>
          </h1>

          <img src='' alt='credit card'/>

          <span>
            <strong>R$ 299, 90 </strong> em até 
            <strong>7x</strong> de 

            <strong>R$ 42,84</strong>
          </span>
        </div>

        <div>
          <span>
            Cor: <strong>Azul / Prata</strong>
          </span>

          <p>Desconto à partir de 5 raquetes</p>

          <div className='quantidade'>
            Quantidade: 
            <button>
              1 unidade 
              <img src='' alt='seta'/>  
            </button>
          </div>
        </div>
        
        <form>
          <button>COMPRAR</button>
          <button>Adicionar ao carrinho</button>
        </form>

        <div>
          <p>
            <img src='' alt=''/>

            <span>
              <span className='color-effect'>Devolução grátis. </span>
              Você tem 30 dias a partir da data de recebimento.
            </span>
          </p>

          <p>
            <img src='' alt=''/>

            <span>
              <span className='color-effect'>Compra Garantida. </span>
              Receba o produto que esta esperando ou devolvemos o dinheiro.
            </span>
          </p>

          <p>
            <img src='' alt=''/>

            <span>
              <span className='color-effect'>Fedal Pontos. </span>
              Você acumula

              <strong>
                174 pontos.
              </strong>
            </span>
          </p>

          <p>
            <img src='' alt=''/>

            <span>
              <span className='color-effect'>1 mês </span>
              de garantia de fábrica
            </span>
          </p>
        </div>
      </article>

      <article className='outras-ofertas'>
        <div>
          <h1>Produtos patrocinados</h1>
          <span>Anuncie aqui</span>
        </div>

        <div>
          <img src=''/>

          <div>
            <span>R$ 2100,00</span>
            <h1>R$ 1799,90</h1>
            <span>12x R$ 149,99 sem juros</span>
            <span>Frete grátis</span>
            <p>Raquete De Tênis Babolat Pure Aero Rafa Nadal</p>
          </div>
        </div>

        <div>
          <img src=''/>
          
          <div>
            <span>R$ 2100,00</span>
            <h1>R$ 1799,90</h1>
            <span>12x R$ 149,99 sem juros</span>
            <span>Frete grátis</span>
            <p>Raquete De Tênis Babolat Pure Aero Rafa Nadal</p>
          </div>
        </div>

        <div>
          <img src=''/>
          
          <div>
            <span>R$ 2100,00</span>
            <h1>R$ 1799,90</h1>
            <span>12x R$ 149,99 sem juros</span>
            <span>Frete grátis</span>
            <p>Raquete De Tênis Babolat Pure Aero Rafa Nadal</p>
          </div>
        </div>

        <div>
          <img src=''/>
          
          <div>
            <span>R$ 2100,00</span>
            <h1>R$ 1799,90</h1>
            <span>12x R$ 149,99 sem juros</span>
            <span>Frete grátis</span>
            <p>Raquete De Tênis Babolat Pure Aero Rafa Nadal</p>
          </div>
        </div>
      </article>

      <article className='descricao'>
        <h1>RAQUETE DE TENIS BABOLAT PURE AERO 300G - - PRODUTO ORIGINAL - NOVA</h1>

        <ol>
          <li>- É a raquete mais vendida do mundo!</li>
          <li>- Melhor combinação de explosão e sensação aprimorada no impacto</li>

          <li>- A Babolat está presente em mais de 100 países</li>
          <li>- Confira abaixo todas as tecnologias presentes na raquete</li>
          <li>- Bora pro play!</li>
        </ol>

        <h2>Características:</h2>

        <ul>
          <li>Perfil: Pure Aero Rafael Nadal</li>
          <li>Composição: Grafite</li>

          <li>Tecnologias: Cortex Pure Feel. I FSI Spin I. Carbon Ply Stabilizer;</li>
          <li>Cabeça: 100 sq. in. / 645cm²</li>

          <li>Comprimento: 27 in. / 685mm</li>
          <li>Empunhadura: L3</li>

          <li>Padrão do Encordoamento: 16x19</li>
          <li>Encordoada: Não</li>

          <li>Peso sem corda: 300gr</li>
          <li>Equilíbrio: 320 mm</li>

          <li>Perfil do aro: 2,3 cm / 2,6 cm/ 2,3 cm</li>
          <li>Rigidez: 71 RA</li>
          
          <li>Grip: Syntec</li>
          <li>Garantia do Fabricante: Contra defeito de fabricação</li>
          <li>Origem: Importada</li>
        </ul>

        <h2>Dúvidas frequentes:</h2>

        <p>MINHA COMPRA É SEGURA? Toda transação na Fedal é feita em ambiente seguro, isso significa que caso ocorra algum imprevisto, nossa empresa fará o estorno de seu pagamento.</p>

        <p>TENHO GARANTIA DO PRODUTO? Oferecemos 30 dias de garantia contra qualquer defeito de fabricação.</p>

        <p>PRODUTO ORIGINAL? Sim, o produto é original.</p>

        <p>QUANDO É FEITO O ENVIO? Temos o produto a pronta entrega e fazemos o envio mais rápido da Fedal. Dentro de 24 horas já estará em transito para você.</p>

        <p>Todas as fotos do produto são reais. Qualquer dúvida estamos a disposição. </p>
      </article>
    </>
  )
}

export default Produto