import React from 'react'
import NadalAus2021 from '../Assets/images/nadal/1-nadal-aus-2021.jpg'

import NadalFran05 from '../Assets/images/nadal/2-rafa-fran-2005.jpg'
import NadalRolandGarros from '../Assets/images/nadal/3-nadal-rolland-garros.jpg'

const Nadal = () => {
  return (
    <>
      <header>
        <div> <h1>Rafael Nadal</h1>
          <span>EL TORO DE MANACOR</span> </div>

        <nav>
          <ul className='data-quote-container grand-slams'>
            <li className='totalGrandSlams nadal'>22</li>
            <li>GRAND SLAMS</li>  
          </ul> 

          <ul className='data-quote-container titulos'>
            <li className='totalTitulos nadal'>92</li>
            <li>TÍTULOS</li>  
          </ul> 
        </nav>   
      </header>

      <article className='apresentacao'>
        <p>
          Dono de 20 títulos de Grand Slams e de duas medalhas de ouro em Olimpíadas, 
          <a className='background-detail off'>
          Rafael Nadal é um dos maiores nomes da história do tênis! </a>
          O espanhol acumula troféus e uma série de recordes. E não há sinais de que essa gloriosa carreira possa estar perto do fim.
        </p>

        <img src={ NadalAus2021 } alt='Nadal - Austrália Open 2021' className='nadal-aus-2021'/>
        <span>
          El toro de Manarcor possui 1058 vitórias ao longo da carreira. Nadal abalou o mundo do tênis logo nos seus primeiros anos no tênis profissional
        </span>

        <img src={ NadalFran05 } alt='Nadal vencendo na frança em 2005' className='nadal-fran-05'/>
      </article>

      <article className='historia'> <h1>Exemplo de persistência, disciplina e resiliência</h1>
        <p>
          Rafael Nadal é reconhecido como um dos melhores tenistas de todos os tempos. Nascido em 3 de junho de 1986, em Manacor, nas Ilhas Baleares, na Espanha, ele é considerado 
          <a className='background-detail off'>o melhor jogador de saibro na história do tênis</a> 
          , com 14 títulos de Roland Garros.
        </p>

        <p>
          Porém, não é apenas na terra batida que Nadal é vitorioso. Ele já venceu todos os Grand Slams, totalizando 22 títulos dos quatro principais torneios do circuito da ATP. Esse é um 
          <a className='background-detail off'>recorde de conquistas de Majors no tênis masculino.</a>
        </p>

        <q className='data-quote-container frase'>
          <i>
            Derrotas não aumentam nada infelizmente, mas perceber a dificuldade do que tenho feito até hoje, ajuda a valorizar tudo o que fiz antes
          </i>
        </q>

        <p>
          Nadal é discreto e não costuma ter sua vida pessoal comentada. O único relacionamento afetivo conhecido é o que mantém desde 2005 com a jovem estudante Maria Francisca Perello, amiga da irmã do tenista, Maria Isabel Nadal.
        </p>

        <p>
          Em fevereiro de 2015, ao disputar o ATP 500 do Rio Open, 
          <a className='data-quote-container frase'>
            Rafa Nadal desfilou no pelotão de frente da escola de samba Unidos da Viradouro</a>
          , a primeira do Grupo Especial a entrar na Marquês de Sapucaí na noite de domingo.
        </p>
      </article>

      <article className='dados'>
        <ul className='data-quote-container fatos'>
          <li>92 títulos conquistados sendo 22 em grand slams</li>
          <li>Considerado o rei de roland de garros por ter conquistado 14 edições  do torneio</li>
          <li>Nadal conquistou pelo menos 1 título de grand slam ao longo de 10 anos</li>
          <li>4 títulos no US open</li>
          <li>Possui 1058 vitórias ao longo de sua carreira</li>
        </ul>

        <div>
          <p>
            Nadal é o segundo tenista a conseguir atingir a posição de número dois do 
            <a className='background-detail off'>ranking mundial masculino antes dos vinte anos</a>
          </p>

          <p>
            Nadal é o primeiro tenista da era aberta a conquistar quatro torneios ao menos 7 vezes: Roland Garros (13), os Masters 1000 de Monte Carlo (11) e de Roma (10), e o ATP 500 de Barcelon̴a (12).
          </p>

          <p>
            Nadal é o 
            <a className='background-detail off'>
              único tenista a conquistar </a> 
            o Grand Slam do saibro (Master de Monte Carlo, Master de Roma, Master de Madrid e Roland Garros) na mesma temporada (2010)
          </p>
        </div>

        <img src={ NadalRolandGarros } alt='Nadal em Roland Garros'/>
      </article>
    </>
  )
}

export default Nadal
