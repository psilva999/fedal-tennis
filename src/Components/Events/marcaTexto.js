export function marcaTexto() {
  let backgroundAnimated = document.querySelectorAll(".background-detail"),
      transparent = 98,
      mainColor = 100

  for (let i = 0; i < backgroundAnimated.length; i++) {
    let showBackgroundAnimated = window.innerHeight - 150,
        showTop = backgroundAnimated[i].getBoundingClientRect().top

    if (showTop < showBackgroundAnimated) {
      if (backgroundAnimated[i].classList.contains('off')) {
        backgroundAnimated[i].classList.remove('off')
        backgroundAnimated[i].classList.add('active')
        colocaAnimacao()
      }
    }

    function colocaAnimacao() {
      let destacaBackground = setInterval(transparentMainColor, 15)
      
      function transparentMainColor() {
        transparent--
        mainColor--
        
        backgroundAnimated[i].style.background = 
        `linear-gradient(283deg,
          rgba(120,184,2,0) ${ transparent }%, 
          rgba(120,184,2,.4) ${ mainColor }%)`

        if (transparent === 0 && mainColor === 0) {
          clearInterval(destacaBackground)
          backgroundAnimated[i].style.background = 
          `linear-gradient(283deg,
          rgba(120,184,2,0) 0%, 
          rgba(120,184,2,.4) 0%)`
        }
      }
    }

  }
}
