import React from 'react'

import Logo from '../Assets/svg/0-logo.svg'
import Store from '../Assets/svg/1-buy.svg'

import { handleMenu } from './Events/handleMenu.js'
import { darkAndWhiteMode } from './Events/darkAndWhiteMode.js'

const Header = () => {

  return (
    <header className='header-fixo'>

      <nav>
        <button id='toggle-menu' className='toggle-menu'
        onClick={ handleMenu }>
          <div id='gambiarraPraFecharMenu'></div>
        </button>  

        <ul className='menu' id='menu'>
          <li className='detail' id='detail'>home</li>
          <li>contato</li>
          <li>news</li>

          <button id="switch-container" 
          onClick={ darkAndWhiteMode }>
            <input type="checkbox" class="switch-shadow" id='switch-input'/>
            <label for="button" id='switch-label'></label>
          </button>

        </ul>
      </nav>

      <img src={ Logo } className='logo'/>

      <img src={ Store } className='store'/>
    </header>
  )
}

export default Header
