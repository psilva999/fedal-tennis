import Logo from '../../Assets/svg/0-logo.svg'
import DarkLogo from '../../Assets/svg/0-dark-logo.svg'

import Buy from '../../Assets/svg/1-buy.svg'
import DarkBuy from '../../Assets/svg/1-dark-buy.svg'

export function darkAndWhiteMode() {
  const switchButton = document.querySelector('#switch-input'),
        grandSlams = document.querySelector('.grand-slams'),
        titulos = document.querySelector('.data-quote-container.titulos')

  const logo = document.querySelector(".logo"),
        buy = document.querySelector(".store")

  if (switchButton.checked) { 
    switchButton.checked = false
    localStorage.setItem('darkMode', "false") 
    document.body.classList.remove('dark-mode')

    logo.src = `${ Logo }`
    buy.src = `${ Buy }`

    grandSlams.style.boxShadow = '$sombra-exuberante !important'
    titulos.style.boxShadow = '$sombra-exuberante !important'
  }

  else { 
    switchButton.checked = true
    localStorage.setItem('darkMode', "true")    
    document.body.classList.add('dark-mode')

    logo.src = `${ DarkLogo }`
    buy.src = `${ DarkBuy }`

    grandSlams.style.boxShadow = '$nevoa-exuberante !important'
    titulos.style.boxShadow = '$nevoa-exuberante !important'
  }
}

export function localStorageFedal() {
  const grandSlams = document.querySelector('.grand-slams'),
        titulos = document.querySelector('.data-quote-container.titulos')

  const logo = document.querySelector(".logo"),
        buy = document.querySelector(".store")

  if (localStorage.getItem('darkMode') === null)
    localStorage.setItem('darkMode', "false")

  checkStatus()
  function checkStatus() {
    
    if (localStorage.getItem('darkMode') === "true") {
      document.querySelector('#switch-input').checked = true    
      document.body.classList.add('dark-mode')

      logo.src = `${ DarkLogo }`
      buy.src = `${ DarkBuy }`

      grandSlams.style.boxShadow = '$nevoa-exuberante !important'
      titulos.style.boxShadow = '$nevoa-exuberante !important'
    }

    else {
      document.querySelector('#switch-input').checked = false
      document.body.classList.remove('dark-mode')

      logo.src = `${ Logo }`
      buy.src = `${ Buy }`

      grandSlams.style.boxShadow = '$sombra-exuberante !important'
      titulos.style.boxShadow = '$sombra-exuberante !important'
    }
  }
}
