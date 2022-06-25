import React from 'react'
import FedererRacket from '../Assets/images/federer/1-federer-racket.jpg'

import FedererWimbledon from '../Assets/images/federer/2-federer-wimbledon.jpg'
import FedererTroffier from '../Assets/images/federer/3-federer-troffier.jpg'

const Federer = () => {
  return (
    <>
      <header>
        <div> <h1>Roger Federer</h1>
          <span>The Swiss Maestro</span> </div>

        <nav>
          <ul className='data-quote-container grand-slams'>
            <li className='totalGrandSlams federer'>20</li>
            <li>GRAND SLAMS</li>  
          </ul> 

          <ul className='data-quote-container titulos'>
            <li className='totalTitulos federer'>103</li>
            <li>TÍTULOS</li>  
          </ul>
        </nav>    
      </header>

      <article className='apresentacao'>
        <p>
          Um dos maiores vencedores de Grand Slams na história do circuito masculino de tênis, ao lado de Rafael Nadal. Recordista de semanas como o número 1 do mundo no ranking da ATP. Dono de duas medalhas em Jogos Olímpicos. Todas essas informações 
          <a className='background-detail off'>
            dizem respeito a um tenista: o suíço Roger Federer.</a>  
        </p>

        <img src={ FedererRacket } alt='Federer jogando' className='federer-racket'/>
        <span>
          Roger Federer é o único  tenista a ter conseguido por três vezes (2004, 2006, 2007) vencer três dos quatro torneios do Grand Slam na mesma temporada.  
        </span>

        <img src={ FedererWimbledon } alt='Federer Wimbledon' className='federer-wimbledon'/>
      </article>

      <article className='historia'> <h1>Uma das lendas do Tênis</h1>
        <p>
          Nascido na Basileia, na Suíça, em 8 de agosto de 1981, Federer começou a jogar tênis aos oito anos e, durante sua adolescência, 
          <a className='background-detail off'>
            chegou a ser número 1 do mundo </a> 
          no ranking mundial de tenistas juvenis. Antes de se tornar profissional, ele venceu o torneio de Wimbledon juvenil em simples e em duplas em 1998.
        </p>

        <p>
          O suíço ainda é o tenista com mais tempo no topo do ranking da ATP: 310 semanas como número 1 do mundo, entre 2004 e 2018.
          Em fevereiro de 2018, com 36 anos e meio, 
          <a className='background-detail off'>
            tornou-se o tenista mais velho a assumir o topo do ranking da ATP.</a>
        </p>

        <q className='data-quote-container frase'>
          <i>
            Roger trouxe às quadras uma aliança raríssima de técnica, finesse, exuberância física, talento natural, disciplina, plasticidade e determinação.
          </i>
        </q>

        <p>
          É casado com a ex-tenista profissional Miroslava Vavrinec, mais conhecida como Mirka, que chegou a ser a nº 76 do ranking da WTA. 
          <a className='background-detail off'>
            Conheceram-se durante os Jogos Olímpicos de Verão de 2000. </a> 
          A suíça encerrou sua carreira devido a uma contusão no tendão de Aquiles, levando-a a acompanhar a do marido, responsabilizando-se pelo seu contato com a imprensa.
        </p>

        <p>
          Reconhecido fora das quadras como uma "excelente pessoa" e extremamente respeitado pelos adversários,possui uma organização, a Fundação Roger Federer, onde realiza suas atividades em seis países africanos, sendo um deles a África do Sul, terra natal de sua mãe.
        </p>
      </article>

      <article className='dados'>
        <ul className='data-quote-container fatos'>
          <li>20 títulos de simples em Grand Slams</li>
          <li>3 temporadas com 3 títulos de simples masculinos (2004, 2006–07)</li>
          <li>7 temporadas com mais de 2 títulos de simples (2004–07, 2009, 2017 e 2019)</li>
          <li>10 títulos defendidos no geral</li>
          <li>31 finais de simples em Grand Slams</li>
        </ul>

        <div>
          <p>
            <a className='background-detail off'>
              O saque do 'Swiss Maestro' </a>
            é um de seus pontos mais fortes, sendo considerado eficaz tanto no fundo da quadra quanto no voleio.
          </p>

          <p>
            Ao longo dos últimos anos, Roger protagonizou uma das maiores rivalidades do esporte ao lado de Nadal e Djokovic.
          </p>

          <p>
            Depois do seu início de carreira, Roger passou a ser caracterizado pela sua falta de explosões ou frustração emocional quando comete erros, o que <a className='background-detail off'>lhe dá uma vantagem sobre os adversários menos controlados.</a>
          </p>
        </div>

        <img src={ FedererTroffier } alt='Federer com troféu'/>
      </article>
    </>
  )
}

export default Federer
