export function handleSubmit(e) {
  e.preventDefault()

  let mensagemDeEmailEnviado= document.querySelector('.email-enviado'),
      tempo = 4

  mensagemDeEmailEnviado.classList.add('active')

  let retiraMensagemDeEmailEnviado = setInterval(countdown, 1000)

  function countdown() {
    tempo--

    if (tempo === 2) {
      mensagemDeEmailEnviado.style.animation = 'escurece-mensagem 2s linear forwards'
    }

    if (tempo === 0) {
      mensagemDeEmailEnviado.classList.remove("active")
      clearInterval(retiraMensagemDeEmailEnviado)
    }
  }
}
