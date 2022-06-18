export function handleMenu() {
  let toggleMenu = document.querySelector('.toggle-menu'),
      menu = document.querySelector('.menu'),
      tempo = 3

  if (menu.classList.contains('active')) {
    menu.style.animation = 'hide-menu .3s forwards'
    toggleMenu.classList.remove("closed")

    let retiraMenu = setInterval(displayNoneMenu, 100)
    function displayNoneMenu() {
      tempo--

      if (tempo === 0) {
        menu.classList.remove('active')
        menu.style.animation = 'show-menu .3s forwards'
        clearInterval(retiraMenu)
      }
    }
  }

  else {
    menu.classList.add('active')
    toggleMenu.classList.add("closed")
  }
}

export function closeMenuFromOutside(e) {
  let menu = document.querySelector('.menu'),
      tempo = 3

  if (e.target.id !== 'toggle-menu' && e.target.id !== 'switch-container' && e.target.id !== 'gambiarraPraFecharMenu'  && e.target.id !== 'menu' && e.target.id !== 'switch-input' && e.target.id !== 'switch-label' && e.target.id !== 'detail') {
    menu.style.animation = 'hide-menu .3s forwards'
    document.querySelector('.toggle-menu').classList.remove("closed")

    let retiraMenu = setInterval(timeMenu, 100)
    function timeMenu() {
      tempo--

      if (tempo === 0) {
        menu.classList.remove('active')
        menu.style.animation = 'show-menu .3s forwards'
        clearInterval(retiraMenu)
      }
    }
  }
}
