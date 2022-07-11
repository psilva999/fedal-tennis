export function mostraConquistas() {
  let mostraConquistas = setInterval(countdownConquistas, 500),
      tempo = 2
  
  function countdownConquistas() {
    tempo--

    if (tempo === 1) {
      if (!document.body.classList.contains('dark-mode'))
        document.querySelector('.grand-slams').style.animation = 'mostra-conquistas .6s linear forwards'

      else 
        document.querySelector('.grand-slams').style.animation = 'dark-mostra-conquistas .6s linear forwards'
    }

    else if (tempo === 0) {
      if (!document.body.classList.contains('dark-mode')) {
        document.querySelector('.titulos').style.animation = 'mostra-conquistas .6s linear forwards'
      }

      else {
        document.querySelector('.titulos').style.animation = 'dark-mostra-conquistas .6s linear forwards'
      }

      clearInterval(mostraConquistas)
    }

  }
}

export function mostraFatos() {
  const li = document.querySelectorAll('.fatos li'), 

      mostraFatos = window.innerHeight + 30,
      showTop = li[1].getBoundingClientRect().top

  if (showTop < mostraFatos) 
    li.forEach(li => 
      li.style.animation = 'mostra-fatos .7s linear forwards'
    ) 
}
