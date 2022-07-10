export function ativaProduto() {
  const buttonProduto = document.querySelector('.go-produto')

  if (!buttonProduto.classList.contains('active')) {
    window.scrollTo(0,0)
    buttonProduto.classList.add('active')
    document.querySelector('.tenistas').classList.remove('active')
  }
}
