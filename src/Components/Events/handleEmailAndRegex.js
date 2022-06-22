import Checked from '../../Assets/svg/5-check.svg'

export function changeInput() {
  const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        email = document.querySelector('#email')

  if (email.value === '') 
    email.setCustomValidity('Preencha esse campo')

  if (email.value.match(regex) !== email.value) 
    email.setCustomValidity("Inclua um '@' e o domínio no seu E-mail")
  

  if (email.value.match(regex)) 
    email.setCustomValidity('')
}

export function regexEmail() {
  const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        email = document.querySelector('#email'),

        button = document.querySelector('.send-email'),
        img = document.querySelector('#button-image')

  if (email.value === '') 
    email.setCustomValidity('Preencha esse campo')
  
  if (email.value.match(regex)) {
    let mensagemDeEmailEnviado= document.querySelector('.email-enviado'),
        tempo = 6

    if (!button.classList.contains('checked')) {
      email.disabled = true
      email.style.cursor = 'initial'
      button.classList.add('checked')

      img.src = `${ Checked }`
      img.style.animation = 'show-checked .5s linear forwards'
      mensagemDeEmailEnviado.classList.add('active')

      let retiraMensagemDeEmailEnviado = setInterval(countdown, 1000)

      function countdown() {
        tempo--

        if (tempo === 3) 
          button.disabled = true

        if (tempo === 2)
          mensagemDeEmailEnviado.style.animation = 'escurece-mensagem 2s linear forwards'

        if (tempo === 0) {
          mensagemDeEmailEnviado.classList.remove("active")
          mensagemDeEmailEnviado.style.animation = 'email-enviado .3s linear forwards'
          clearInterval(retiraMensagemDeEmailEnviado)
        }
      }
    }

  }
}
