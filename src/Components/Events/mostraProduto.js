export function mostraProduto() {
  let tempo = 3,
      animacaoDosProdutos = setInterval(mostraAnimacao, 500)

  function mostraAnimacao() {
    tempo--

    if (tempo === 2) 
      document.querySelector('.oferta').style.animation = 'mostra-container .6s linear forwards'

    if (tempo === 1) 
      document.querySelector('.racket-container').style.animation = 'mostra-container .6s linear forwards'
      
    if (tempo === 0 )
      clearInterval(animacaoDosProdutos)
  }
}
