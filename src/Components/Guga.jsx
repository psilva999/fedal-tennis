import React from 'react'

import GugaBall from '../Assets/images/guga/1-guga-photo-ball.jpg'
import GugaBallGrid from '../Assets/images/guga/1-guga-photo-ball-grid.jpg'

import GugaWinner from '../Assets/images/guga/2-guga-winner.jpg'
import GugaRolandGarros from '../Assets/images/guga/3-guga-roland-garros.jpg'

const Guga = () => {
  return (
    <>
      <header>
        <div> <h1>Gustavo Kuerten</h1>
          <span>O Surfista do Saibro</span> </div>

        <nav>
          <ul className='data-quote-container grand-slams'>
            <li className='totalGrandSlams guga'>03</li>
            <li>GRAND SLAMS</li>  
          </ul> 

          <ul className='data-quote-container titulos'>
            <li className='totalTitulos guga'>20</li>
            <li>TÍTULOS</li>  
          </ul> 
        </nav>   
      </header>

      <article className='apresentacao'>
        <p className='space-bottom'>
          Maior tenista brasileiro de todos os tempos, Guga marcou seu nome na história do esporte e 
          <a className='background-detail off'>
            se tornou ídolo no Brasil e no mundo. </a>
          Sua legião de fãs foi construída não apenas por consequência de suas conquistas, mas também pelo seu enorme carisma.
        </p>

        <picture>
          <source media='(max-width: 65.7rem)' srcset={ GugaBallGrid } type='image/jpg'/>

          <img src={ GugaBall } alt='Guga com uma bola de tênis na mão' className='guga-ball'/>
        </picture>

        <span className='ajuste'>
          Tricampeão de Roland Garros, número 1 do mundo por 43 semanas e membro do hall da fama do tênis.
        </span>

        <img src={ GugaWinner } alt='Guga depois de vencer Roland Garros' className='guga-winner'/>
      </article>

      <article className='historia guga'> <h1>A zebra verde e amarela que transformou o esporte</h1>
        <p>
          Nascido em Florianópolis, em 10 de setembro de 1976, 
          <a className='background-detail off'>
            Gustavo Kuerten começou sua trajetória no tênis motivado por seu pai</a>
          , Aldo Kuerten. Infelizmente, Guga teve de lidar com a morte do pai logo aos 9 anos, depois de ele sofrer um ataque cardíaco durante uma partida de tênis entre juniores em que ele era árbitro.
        </p>

        <p>
          Antes de se sagrar 
          <a className='background-detail off'>
            tricampeão no torneio de simples como profissional</a>
          , Gustavo Kuerten conquistou um título de Roland Garros em 1994, no torneio de duplas masculinas juvenis, ao lado do equatoriano Nicolas Lapentti.
        </p>

        <q className='data-quote-container frase'>
          <i>
            O primeiro título eu não esperava. O segundo foi tão difícil que foi meio tenso. nunca nos meus melhores sonhos eu venceria pela terceira vez.
          </i>
        </q>

        <p>
          Após o Grand Slam francês, se tornou bicampeão do ATP de Stuttgart, e foi semifinalista no ATP de Los Angeles (em piso hard), perdendo para Andre Agassi. Em agosto, venceu o Masters de Cincinnati (realizado em piso hard), <a className='background-detail off'>considerado um dos títulos mais difíceis e impressionantes de Kuerten, que derrotou na sequência somente grandes nomes do piso rápido.</a>
        </p>

        <p>
          Embora declarasse não gostar de jogar na grama, e algumas vezes sequer ter participado do torneio de Wimbledon - devido à diferença entre o piso de saibro e grama ser muito grande na época, e ao fato de que Guga costumeiramente obtinha sucesso em torneios seguidos no saibro logo antes de Wimbledon, o que extenuava o atleta e também tornava desnecessário lutar por pontos na grama -, neste ano participou e foi à terceira rodada.
        </p>
      </article>

      <article className='dados'>
        <ul className='data-quote-container fatos'>
          <li>Possui 358 vitórias e 195 derrotas ao longo de sua carreira</li>
          <li>Conquistou 20 títulos sendo 3 em grand slam e 17 em torneios ATP</li>
          <li>Atingiu o posto de número 1 do mundo em dezembro de 2000, onde ficou por 43 semanas</li>
          <li>Conquistou 6 títulos em 2001</li>
          <li>Esta na lista dos 10 tenistas que transformaram o esporte</li>
        </ul>

        <div>
          <p>
            Antes de Guga, as grandes conquistas do tênis brasileiro eram creditadas a 
            <a className='background-detail off'>Maria Esther Bueno</a>
            , que chegou a ser a número 1 do mundo em 1959, ainda na era amadora.
          </p>

          <p>
            Na final do Aberto da França de 2001, o triunfo de Gustavo Kuerten sobre Corretja, por 3 a 1, teve direito a um pneu (6 a 0) no quarto set.
          </p>

          <p>
            Vitorioso, o brasileiro utilizou a raquete para 
            <a className='background-detail off'>desenhar um coração no saibro de Roland Garros </a>
            e se deitou no centro desse coração, demonstrando todo o seu carinho e amor pelo torneio de Paris.
          </p>
        </div>

        <img src={ GugaRolandGarros } alt='Guga deitado num coração feito por ele depois de vencer Roland Garros'/>
      </article>
    </>
  )
}

export default Guga
