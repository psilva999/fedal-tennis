import React from 'react'
import NadalAus2021 from '../Assets/images/nadal/1-nadal-aus-2021.jpg'

import NadalFran05 from '../Assets/images/nadal/2-rafa-fran-2005.jpg'
import NadalRolandGarros from '../Assets/images/nadal/3-nadal-roland-garros.jpg'

const Nadal = () => {
  return (
    <>
      <header>
        <div> <h1>Rafael Nadal</h1>
          <span>EL TORO DE MANACOR</span> </div>

        <ul>
          <li>22</li>
          <li>GRAND SLAMS</li>  
        </ul> 

        <ul>
          <li>92</li>
          <li>TÍTULOS</li>  
        </ul>    
      </header>

      <article>
        <p>
          Dono de 20 títulos de Grand Slams e de duas medalhas de ouro em Olimpíadas, Rafael Nadal é um dos maiores nomes da história do tênis!
          O espanhol acumula troféus e uma série de recordes. E não há sinais de que essa gloriosa carreira possa estar perto do fim.
        </p>

        <img src={ NadalAus2021 } alt='Nadal - Austrália Open 2021'/>
        <span>
          El toro de Manarcor possui 1058 vitórias ao longo da carreira. Nadal abalou o mundo do tênis logo nos seus primeiros anos no tênis profissional
        </span>

        <img src={ NadalFran05 } alt='Nadal vencendo na frança em 2005'/>
      </article>

      <article> <h1>Exemplo de persistência, disciplina e resiliência</h1>
        <p>
          Rafael Nadal é reconhecido como um dos melhores tenistas de todos os tempos. Nascido em 3 de junho de 1986, em Manacor, nas Ilhas Baleares, na Espanha, ele é considerado o melhor jogador de saibro na história do tênis, com 14 títulos de Roland Garros.
        </p>

        <p>
          Porém, não é apenas na terra batida que Nadal é vitorioso. Ele já venceu todos os Grand Slams, totalizando 22 títulos dos quatro principais torneios do circuito da ATP. Esse é um recorde de conquistas de Majors no tênis masculino.
        </p>

        <quote>
          Derrotas não aumentam nada infelizmente, mas perceber a dificuldade do que tenho feito até hoje, ajuda a valorizar tudo o que fiz antes
        </quote>
      </article>

      <article>
        <ul>
          <li>92 títulos conquistados sendo 22 em grand slams</li>
          <li>Considerado o rei de roland de garros por ter conquistado 14 edições  do torneio</li>
          <li>Nadal conquistou pelo menos 1 título de grand slam ao longo de 10 anos</li>
          <li>4 títulos no US open</li>
          <li>Possui 1058 vitórias ao longo de sua carreira</li>
        </ul>

        <p>
          Nadal é o segundo tenista a conseguir atingir a posição de número dois do ranking mundial masculino antes dos vinte anos
        </p>

        <p>
          Nadal é o primeiro tenista da era aberta a conquistar quatro torneios ao menos 7 vezes: Roland Garros (13), os Masters 1000 de Monte Carlo (11) e de Roma (10), e o ATP 500 de Barcelon̴a (12).
        </p>

        <p>
          Nadal é o único tenista a conquistar o Grand Slam do saibro (Master de Monte Carlo, Master de Roma, Master de Madrid e Roland Garros) na mesma temporada (2010)
        </p>

        <img src={ NadalRolandGarros } alt='Nadal em Roland Garros'/>
      </article>
    </>
  )
}

export default Nadal
