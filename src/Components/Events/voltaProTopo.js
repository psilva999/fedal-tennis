import WhiteVoltaProTopo from '../../Assets/svg/2-white-volta-pro-topo.svg'
import VoltaProTopo from '../../Assets/svg/2-volta-topo.svg'

export function voltaProTopo() {
  const buttonVoltaProTopo = document.querySelector('.volta-pro-topo'),
        img = document.querySelector('.volta-pro-topo img')

  if (window.scrollY >= 390 && window.scrollY < 2930) {
    buttonVoltaProTopo.classList.add('active')
    img.src = `${ VoltaProTopo }`
  }

  else if (window.scrollY >= 2930) {
    img.src = `${ WhiteVoltaProTopo }`
    buttonVoltaProTopo.style.background = 'none'
  }

  else 
    buttonVoltaProTopo.classList.remove('active')
}
