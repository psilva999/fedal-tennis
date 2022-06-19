import React from 'react'

import Racket from '../Assets/svg/3-racket.svg'
import ClosedEmail from '../Assets/svg/4-email-close.svg'

import Github from '../Assets/svg/6-github.svg' 
import Telegram from '../Assets/svg/7-telegram.svg' 
import Linkedin from '../Assets/svg/8-linkedin.svg' 

import RolandGarros from '../Assets/images/2-roland-garros.png'
import Wimbledon from '../Assets/images/3-wimbledon.png'

const Footer = () => {
  return (
    <footer>
      <img src={ Racket } alt='Raquete de tênis' className='racket'/>

      <div className='container'>
        <div className='perguntas-frequentes'>
          <a href='#'>Perguntas frequentes</a>

          <a href='#'>Termos de Uso</a>

          <a href='#'>Política de Privacidade</a>

          <a href='#'>Política de Segurança</a>

          <a href='#'>Ouvidoria</a>

          <a href='#'>Relatórios financeiros</a>

          <a href='#'>Ética e governança</a>
        </div>

        <div className='newsletter'>
          <h1>Quer saber mais novidades?</h1>
          <span>Inscreva-se na nossa Newsletter</span>

          <form>
            <input 
              type='email' 
              placeholder='E-mail' 
              id='email' 
              name='user_email'/>

            <button>
              <img src={ ClosedEmail } alt='enviar'/>
            </button>
          </form>
        </div>

        <div className='feedback'>
          <h1>Encontrou algum bug ou gostaria de enviar um feedback?</h1>

          <p>Entre em contato:</p>

          <div className='redes'>
            <a href='https://github.com/psilva999' target='_blank'>
              <img src={ Github } alt='Github'/>
            </a>

            <a href='https://t.me/psilva999' target='_blank'>
              <img src={ Telegram } alt='Telegram'/>
            </a>

            <a href='https://www.linkedin.com/in/psilva999/' target='_blank'>
              <img src={ Linkedin } alt='Linkedin'/>
            </a>
            
          </div>
        </div>

      </div>

      <div id='separador'></div>

      <div className='patrocinadores'>
        <div className='move-the-lines'>

          MoVe The LineS, 
          <span>WITH</span> 
        </div>

        <img src={ RolandGarros } alt='roland garros'/>
        <img src={ Wimbledon } alt='wimbledon' className='wimbledon'/>
      </div>
    </footer>
  )
}

export default Footer
