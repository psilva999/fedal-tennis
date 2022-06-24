import React from 'react'
import GugaBall from '../Assets/images/guga/1-guga-photo-ball.jpg'

import GugaWinner from '../Assets/images/guga/2-guga-winner.jpg'
import GugaRolandGarros from '../Assets/images/guga/3-guga-roland-garros.jpg'

const Guga = () => {
  return (
    <>
      <header>
        <div> <h1>Gustavo Kuerten</h1>
          <span>O Surfista do Saibro</span> </div>

        <ul>
          <li>03</li>
          <li>GRAND SLAMS</li>  
        </ul> 

        <ul>
          <li>20</li>
          <li>TÍTULOS</li>  
        </ul>    
      </header>

      <article>
        <p>
          Maior tenista brasileiro de todos os tempos, Guga marcou seu nome na história do esporte e se tornou ídolo no Brasil e no mundo. Sua legião de fãs foi construída não apenas por consequência de suas conquistas, mas também pelo seu enorme carisma.
        </p>

        <img src={ GugaBall } alt='Guga com uma bola de tênis na mão'/>
        <span>
          Tricampeão de Roland Garros, número 1 do mundo por 43 semanas e membro do hall da fama do tênis. Todas essas características se referem a Gustavo Kuerten, o Guga!
        </span>

        <img src={ GugaWinner } alt='Guga depois de vencer Roland Garros'/>
      </article>

      <article> <h1>A zebra verde e amarela que transformou o esporte</h1>
        <p>
          Nascido em Florianópolis, em 10 de setembro de 1976, Gustavo Kuerten começou sua trajetória no tênis motivado por seu pai, Aldo Kuerten. Infelizmente, Guga teve de lidar com a morte do pai logo aos 9 anos, depois de ele sofrer um ataque cardíaco durante uma partida de tênis entre juniores em que ele era árbitro.
        </p>

        <p>
          Antes de se sagrar tricampeão no torneio de simples como profissional, Gustavo Kuerten conquistou um título de Roland Garros em 1994, no torneio de duplas masculinas juvenis, ao lado do equatoriano Nicolas Lapentti.
        </p>

        <quote>
          O primeiro título eu não esperava. O segundo foi tão difícil que foi meio tenso. nunca nos meus melhores sonhos eu venceria pela terceira vez.
        </quote>
      </article>

      <article>
        <ul>
          <li>Possui 358 vitórias e 195 derrotas ao longo de sua carreira</li>
          <li>Conquistou 20 títulos sendo 3 em grand slam e 17 em torneios ATP</li>
          <li>Atingiu o posto de número 1 do mundo em dezembro de 2000, onde ficou por 43 semanas</li>
          <li>Conquistou 6 títulos em 2001</li>
          <li>Esta na lista dos 10 tenistas que transformaram o esporte</li>
        </ul>

        <p>
          Antes de Guga, as grandes conquistas do tênis brasileiro eram creditadas a Maria Esther Bueno, que chegou a ser a número 1 do mundo em 1959, ainda na era amadora.
        </p>

        <p>
          Na final do Aberto da França de 2001, o triunfo de Gustavo Kuerten sobre Corretja, por 3 a 1, teve direito a um pneu (6 a 0) no quarto set.
        </p>

        <p>
          Vitorioso, o brasileiro utilizou a raquete para desenhar um coração no saibro de Roland Garros e se deitou no centro desse coração, demonstrando todo o seu carinho e amor pelo torneio de Paris.
        </p>

        <img src={ GugaRolandGarros } alt='Guga deitado num coração feito por ele depois de vencer Roland Garros'/>
      </article>
    </>
  )
}

export default Guga
