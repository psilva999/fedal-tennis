export function escreveFrase() {
  let frase = document.querySelector('.frase i'),
      mostraFrase = window.innerHeight + 110,
      showTop = frase.getBoundingClientRect().top

  if (showTop < mostraFrase && !frase.classList.contains('active')) {
    frase.classList.add('active')
    animaLetras(frase)
  }

  function animaLetras(conteudo) {
    const textoArray = conteudo.innerHTML.split('')
    conteudo.innerHTML = ''

    textoArray.forEach((letra, i) => setTimeout(() => conteudo.innerHTML += letra, 50 * i))
  }
}