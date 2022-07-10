export function contaConquistas() {
  let mostraNumeros = setInterval(acrescentaNumeros, 720),
      tempo = 2,

      acrescentaGrandSlams = setInterval(() => {
        if (document.querySelector('.totalGrandSlams.federer'))
          document.querySelector('.totalGrandSlams.federer').innerHTML = Math.floor((Math.random() * 100) + 1)

        if (document.querySelector('.totalGrandSlams.guga'))
          document.querySelector('.totalGrandSlams.guga').innerHTML = Math.floor((Math.random() * 100) + 1)

        if (document.querySelector('.totalGrandSlams.nadal'))
          document.querySelector('.totalGrandSlams.nadal').innerHTML = Math.floor((Math.random() * 100) + 1)
      }, 10),

      acrescentaTitulos = setInterval(() => {
        if (document.querySelector('.totalTitulos.federer'))
          document.querySelector('.totalTitulos.federer').innerHTML = Math.floor((Math.random() * 100) + 1)

        if (document.querySelector('.totalTitulos.guga'))
          document.querySelector('.totalTitulos.guga').innerHTML = Math.floor((Math.random() * 100) + 1)

        if (document.querySelector('.totalTitulos.nadal'))
          document.querySelector('.totalTitulos.nadal').innerHTML = Math.floor((Math.random() * 100) + 1)
      }, 10)

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
    if (document.querySelector('.totalGrandSlams.federer')) 
      document.querySelector('.totalGrandSlams.federer').innerHTML = '20'

    if (document.querySelector('.totalGrandSlams.guga')) 
      document.querySelector('.totalGrandSlams.guga').innerHTML = '03'

    if (document.querySelector('.totalGrandSlams.nadal'))
      document.querySelector('.totalGrandSlams.nadal').innerHTML = '22'
  }

  function titulosDosTenistas() {
    if (document.querySelector('.totalTitulos.federer')) 
      document.querySelector('.totalTitulos.federer').innerHTML = '103'

    if (document.querySelector('.totalTitulos.guga')) 
      document.querySelector('.totalTitulos.guga').innerHTML = '20'

    if (document.querySelector('.totalTitulos.nadal')) 
      document.querySelector('.totalTitulos.nadal').innerHTML = '92'
  }
}