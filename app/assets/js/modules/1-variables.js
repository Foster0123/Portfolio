const hamburger = document.getElementById('hamburger')
const hamburgerIcon = hamburger.children[0];
const linkList = document.getElementById('link-container')
const navBar = document.getElementById('navbar-container')

let navBarColor = getComputedStyle(navBar).getPropertyValue('background')

let lastScrollPosition = 0

let navBarBgColorDark = 'rgba(0,0,0,0.8)'
let navBarBgColorLight = 'rgba(255,255,255,0.7)'

// Hamburger Button Related Code
hamburger.addEventListener('click', () => {
    linkList.classList.toggle('no-display')
  })
  
  window.addEventListener('', () => {
    if (window.innerWidth > 600) {
      linkList.classList.remove('no-display')
    } else {
      linkList.classList.add('no-display')
    }
  })