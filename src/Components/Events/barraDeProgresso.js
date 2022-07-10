export function barraDeProgresso() {
  const indicadorDeScroll = document.querySelector('.linha-de-leitura'),
        maxHeight = window.document.body.scrollHeight - window.innerHeight

  moveIndicadorDeScroll()
  function moveIndicadorDeScroll() {
    let porcentagem = ((window.pageYOffset) / maxHeight) * 100

    indicadorDeScroll.style.width = `${porcentagem}vw`
  }
}
