export function voltaProTopo() {
  const buttonVoltaProTopo = document.querySelector('.volta-pro-topo')

  if (window.scrollY >= 390) {
    buttonVoltaProTopo.classList.add('active')
    buttonVoltaProTopo.style.background = 'none'
  }

  else 
    buttonVoltaProTopo.classList.remove('active')
}
