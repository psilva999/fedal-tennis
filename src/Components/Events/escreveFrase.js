export function escreveFrase() {
  const frase = document.querySelector('.frase i')

  let mostraFrase = window.innerHeight + 80,
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
