import { federerContent } from "./tennisPlayerContent.js"

export function ativaContent() {
  const buttonProduto = document.querySelector('.go-produto')

  if (buttonProduto.classList.contains('active')) {
    buttonProduto.classList.remove('active')
    document.querySelector('.tenistas').classList.add('active')
    window.scrollTo(0,0)
    
    federerContent()
  }
}
