import Logo from '../../Assets/svg/0-logo.svg'
import DarkLogo from '../../Assets/svg/0-dark-logo.svg'

import Buy from '../../Assets/svg/1-buy.svg'
import DarkBuy from '../../Assets/svg/1-dark-buy.svg'

import Seta from '../../Assets/svg/store/3-seta.svg'
import DarkSeta from '../../Assets/svg/store/3-dark-seta.svg'

export function darkAndWhiteMode() {
  const switchButton = document.querySelector('.switch-shadow'),
        grandSlams = document.querySelector('.grand-slams'),
        titulos = document.querySelector('.data-quote-container.titulos')

  const logo = document.querySelector(".logo"),
        buy = document.querySelector(".store"),
        seta = document.querySelector(".seta")

  if (switchButton.checked) { 
    switchButton.checked = false
    document.body.classList.remove('dark-mode')

    logo.src = `${ Logo }`
    buy.src = `${ Buy }`
    seta.src = `${ Seta }`
  }

  else { 
    switchButton.checked = true
    document.body.classList.add('dark-mode')

    logo.src = `${ DarkLogo }`
    buy.src = `${ DarkBuy }`
    seta.src = `${ DarkSeta }`
  }
}
