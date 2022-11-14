const hamburger = document.getElementById('hamburger')
const linkList = document.getElementById('link__container')
const navBar = document.getElementById('navbar__container')
const themeBtn = document.getElementById('theme__btn')

let osCurrentTheme = window.matchMedia('(prefers-color-scheme: light)').matches

let navBarColor = getComputedStyle(navBar).getPropertyValue('background')

let lastScrollPosition = 0
// Colors

let navBarBgColorDark = 'rgba(0,0,0,0.8)'
let navBarBgColorLight = 'rgba(255,255,255,0.7)'

//// Navbar Related Codeblock

// Hamburger Button Related Code
if (!osCurrentTheme) {
  navBar.style.background = 'white'
}
hamburger.addEventListener('click', () => {
  linkList.classList.toggle('no-display')
})

// Theme Button Related Code

themeBtn.addEventListener('click', () => {
  if (themeBtn.classList.contains('bi-brightness-high')) {
    themeBtn.setAttribute('class', 'bi bi-moon-stars theme__btn')
    if (osCurrentTheme) {
      navBar.style.background = 'black'
    }
  } else {
    themeBtn.setAttribute('class', 'bi bi-brightness-high theme__btn')
  }
})

// Window Related Code

window.addEventListener('resize', () => {
  if (window.innerWidth > 600) {
    linkList.classList.remove('no-display')
  } else {
    linkList.classList.add('no-display')
  }
})

// Document Related Code

document.addEventListener(
  'scroll',
  function (e) {
    if (window.scrollY > navBar.clientHeight - 50) {
      if (osCurrentTheme) {
        navBar.style.background = 'rgba(0,0,0,0.8)'
      } else {
        navBar.style.background = navBarBgColorLight
      }
    } else {
      navBar.style.background = navBarColor
    }
    lastScrollPosition = window.scrollY
  },
  { passive: true }
)
// --------------->
