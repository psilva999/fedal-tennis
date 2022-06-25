export function mostraConquistas() {
  let mostraConquistas = setInterval(countdownConquistas, 500),
      tempo = 2
  
  function countdownConquistas() {
    tempo--

    if (tempo === 1) 
      document.querySelector('.grand-slams').style.animation = 'mostra-conquistas .6s linear forwards'

    else if (tempo === 0) {
      document.querySelector('.titulos').style.animation = 'mostra-conquistas .6s linear forwards'
      clearInterval(mostraConquistas)
    }

  }
}

export function contaConquistas() {
  const totalGrandSlams = document.querySelector('.totalGrandSlams'),
        totalTitulos = document.querySelector('.totalTitulos')

  let mostraNumeros = setInterval(acrescentaNumeros, 720),
      tempo = 2,

      acrescentaGrandSlams = setInterval(randomGrandSlam, 10),
      acrescentaTitulos = setInterval(randomTitle, 10)

  function acrescentaNumeros() {
    tempo--

    if (tempo === 1) {
      grandSlamsDosTenistas()

      clearInterval(acrescentaGrandSlams)
    }

    if (tempo === 0) {
      titulosDosTenistas()

      clearInterval(acrescentaTitulos)
      clearInterval(mostraNumeros)
    }
  }

  function grandSlamsDosTenistas() {
    if (totalGrandSlams.classList.contains('federer')) 
      totalGrandSlams.innerHTML = '20'

    if (totalGrandSlams.classList.contains('guga')) 
      totalGrandSlams.innerHTML = '03'

    if (totalGrandSlams.classList.contains('nadal'))
      totalGrandSlams.innerHTML = '22'
  }

  function titulosDosTenistas() {
    if (totalTitulos.classList.contains('federer')) 
      totalTitulos.innerHTML = '103'

    if (totalTitulos.classList.contains('guga')) 
      totalTitulos.innerHTML = '20'

    if (totalTitulos.classList.contains('nadal')) 
      totalTitulos.innerHTML = '92'
  }

  function randomGrandSlam() {
    totalGrandSlams.innerHTML = Math.floor((Math.random() * 100) + 1)
  }
  
  function randomTitle() {
    totalTitulos.innerHTML = Math.floor((Math.random() * 100) + 1)
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
