import { federerContent } from "./tennisPlayerContent.js"

export function ativaContent() {
  const buttonProduto = document.querySelector('.go-produto')

  if (buttonProduto.classList.contains('active')) {
    window.scrollTo(0,0)
    buttonProduto.classList.remove('active')
    
    document.querySelector('.tenistas').classList.add('active')
    document.querySelector('.go-content').classList.add('active')
    document.querySelector('.detail').classList.remove("off")
    
    federerContent()
  }
}
