import { contaConquistas } from "./contaConquistas"
import { mostraConquistas } from "./mostraDados"

export function federerContent() {
  const efeitoStoriesFederer = document.querySelector('.efeito-stories.federer'),
        buttonFederer = document.querySelector(".button-federer")

  if (!efeitoStoriesFederer.classList.contains('active')) {
    reiniciaStories(
    document.querySelector('.efeito-stories.guga'), 
    document.querySelector('.button-guga'),

    document.querySelector('.efeito-stories.nadal'), 
    document.querySelector('.button-nadal'))
    
    efeitoStoriesFederer.classList.add('active')
    buttonFederer.disabled = true
    buttonFederer.style.cursor = 'initial'

    storieVisualizado(efeitoStoriesFederer)
    contaConquistas()
  }

  mostraConquistas()
}

export function gugaContent() {
  const efeitoStoriesGuga = document.querySelector('.efeito-stories.guga'),
        buttonGuga = document.querySelector('.button-guga')
  
  if (!efeitoStoriesGuga.classList.contains('active')) {
    reiniciaStories(
      document.querySelector('.efeito-stories.federer'),
      document.querySelector(".button-federer"),

      document.querySelector('.efeito-stories.nadal'), 
      document.querySelector('.button-nadal'))
    
    efeitoStoriesGuga.classList.add('active')
    buttonGuga.disabled = true
    buttonGuga.style.cursor = 'initial'

    storieVisualizado(efeitoStoriesGuga)
    contaConquistas()
  }

  mostraConquistas()
}

export function nadalContent() {
  const efeitoStoriesNadal = document.querySelector('.efeito-stories.nadal'),
        buttonNadal = document.querySelector('.button-nadal')

  if (!efeitoStoriesNadal.classList.contains('active')) {
    reiniciaStories(
      document.querySelector('.efeito-stories.federer'),
      document.querySelector(".button-federer"),

      document.querySelector('.efeito-stories.guga'), 
      document.querySelector('.button-guga'))

    efeitoStoriesNadal.classList.add('active')
    buttonNadal.disabled = true
    buttonNadal.style.cursor = 'initial'

    storieVisualizado(efeitoStoriesNadal)
    contaConquistas()
  }

  mostraConquistas()
}

function reiniciaStories(efeitoStories1, button1, efeitoStories2, button2) {
  efeitoStories1.classList.remove('active')
  efeitoStories1.classList.remove('visualizado')

  efeitoStories2.classList.remove('active')
  efeitoStories2.classList.remove('visualizado')

  button1.disabled = false
  button1.style.cursor = 'pointer'

  button2.disabled = false
  button2.style.cursor = 'pointer'
}

function storieVisualizado(e) {
  let tempo = 2,
      adicionaBordaOpaca = setInterval(bordaOpaca, 700)

  function bordaOpaca() {
    tempo--

    if (tempo === 1) 
      e.classList.add("visualizado")

    if (tempo === 0) 
      clearInterval(adicionaBordaOpaca)
  }
}
