import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../Assets/svg/0-logo.svg'
import Store from '../Assets/svg/1-buy.svg'

import { darkAndWhiteMode } from './Events/darkAndWhiteMode.js'
import { handleMenu } from './Events/handleMenu.js'

import { ativaProduto } from './Events/ativaProduto.js'
import { ativaContent } from './Events/ativaContent'

const Header = () => {
  
  return (
    <header className='header-fixo'>

      <nav>
        <button id='toggle-menu' className='toggle-menu'
        onClick={ handleMenu }>
          <div id='gambiarraPraFecharMenu'></div>
        </button>  

        <ul className='menu' id='menu'>
          <Link to='/' className='no-style'>
            <li onClick={ ativaContent } className='detail'>home</li>
          </Link>

          <li>contato</li>
          <li>news</li>

          <button id="switch-container" 
          onClick={ darkAndWhiteMode }>
            <input type="checkbox" class="switch-shadow" id='switch-input'/>
            <label for="button" id='switch-label'></label>
          </button>

        </ul>
      </nav>

      <Link to='/' className='no-style'>
        <button onClick={ ativaContent } className='go-content active'>
          <img src={ Logo } className='logo'/></button>
      </Link>

      <Link to='/produto' className='no-style'>
        <button onClick={ ativaProduto } className='go-produto'> 
          <img src={ Store } className='store'/>
        </button>
      </Link>
    </header>
  )
}

export default Header
