import React from 'react'

import Logo from '../Assets/svg/0-logo.svg'
import Store from '../Assets/svg/1-buy.svg'

import { darkAndWhiteMode } from './Events/darkAndWhiteMode.js'

const Header = () => {


  return (
    <header>

      <nav>
        <button id='toggle-menu'>
          <div></div>
        </button>  

        <ul className='menu active'>
          <li className='detail'>home</li>
          <li>contato</li>
          <li>news</li>

          <button class="switch-container" 
          onClick={ darkAndWhiteMode }>
            <input type="checkbox" class="switch-shadow"/>
            <label for="button"></label>
          </button>

        </ul>
      </nav>

      <img src={ Logo } className='logo'/>

      <img src={ Store } className='store'/>
    </header>
  )
}

export default Header
