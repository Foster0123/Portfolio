const hamburger = document.getElementById('hamburger')
const hamburgerIcon = hamburger.children[0]
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

const toggle = document.getElementById('toggle-btn')
const body = document.querySelector('body')
const btnContent = document.querySelectorAll('.btn-element')
const header = document.getElementById('header')
const root = document.querySelector(':root')
const linkContainer = document.getElementById('link-container')

var osThemeDark = window.matchMedia('(prefers-color-scheme: dark)').matches

var osThemeLight = window.matchMedia('(prefers-color-scheme: light)').matches

var currentTheme = localStorage.getItem('theme')

const sunIcon = 'bi bi-brightness-high-fill'
const moonIcon = 'bi bi-moon-stars-fill'

var lightColor = getComputedStyle(root).getPropertyValue(
    '--default-light-theme-color'
)
var darkColor = getComputedStyle(root).getPropertyValue(
    '--default-dark-theme-color'
)
var extraColor = getComputedStyle(root).getPropertyValue(
    '--link-text-color-dark'
)

// var screenWidth = getComputedStyle();

window.addEventListener('load', () => {
    if (currentTheme === 'dark') {
        toggle.className = moonIcon
        body.style.backgroundColor = darkColor
        hamburgerIcon.style.color = lightColor
        navBar.clientWidth >= 600
            ? (linkContainer.style.backgroundColor = 'none')
            : (linkContainer.style.backgroundColor = darkColor)
        header.style.color = lightColor
        toggle.style.color = lightColor
        for (let i = 0; i < btnContent.length; i++) {
            btnContent[i].style.color = lightColor
        }
        console.log('Dark But Not OS Theme Dark')
    } else if (osThemeDark && currentTheme == null) {
        toggle.className = moonIcon
        body.style.backgroundColor = darkColor
        hamburgerIcon.style.color = lightColor
        linkContainer.style.backgroundColor = darkColor
        header.style.color = lightColor
        toggle.style.color = lightColor
        for (let i = 0; i < btnContent.length; i++) {
            btnContent[i].style.color = lightColor
        }
        console.log('Dark But OS Theme Undefined As Well')
    } else if (osThemeLight && currentTheme == null) {
        toggle.className = sunIcon
        body.style.backgroundColor = lightColor
        hamburgerIcon.style.color = darkColor
        header.style.color = darkColor
        toggle.style.color = darkColor
        for (let i = 0; i < btnContent.length; i++) {
            btnContent[i].style.color = darkColor
        }
        console.log('Light But OS Theme Undefined As Well')
    } else {
        toggle.className = sunIcon
        body.style.backgroundColor = lightColor
        header.style.color = darkColor
        hamburgerIcon.style.color = darkColor
        toggle.style.color = darkColor
        for (let i = 0; i < btnContent.length; i++) {
            btnContent[i].style.color = darkColor
        }
        console.log('Light But Not OS Theme Dark')
    }
})

toggle.addEventListener('click', () => {
    if (toggle.className === moonIcon) {
        toggle.className = sunIcon
        body.style.backgroundColor = lightColor
        hamburgerIcon.style.color = darkColor
        toggle.style.color = darkColor
        header.style.color = darkColor
        for (let i = 0; i < btnContent.length; i++) {
            btnContent[i].style.color = darkColor
        }
        localStorage.setItem('theme', 'light')
    } else {
        toggle.className = moonIcon
        body.style.backgroundColor = darkColor
        header.style.color = lightColor
        hamburgerIcon.style.color = lightColor
        toggle.style.color = lightColor
        for (let i = 0; i < btnContent.length; i++) {
            btnContent[i].style.color = lightColor
        }
        localStorage.setItem('theme', 'dark')
    }
})
// document.addEventListener(
//     'scroll',
//     function (e) {
//       if (window.scrollY > navBar.clientHeight - 50) {
//         if (osThemeDark && currentTheme==undefined) {
//                 navBar.style.background = 'rgba(0,0,0,0.8)'
//         }
//         else if(osThemeDark && currentTheme === "dark") {
//           navBar.style.background = 'rgba(0,0,0,0.8)'
//         }
//         else if(osThemeLight && currentTheme ==undefined) {
//             navBar.style.background = 'rgba(255,255,255,0.85)'
//         }
//         else {
//             navBar.style.background = 'rgba(255,255,255,0.85)'
//         }
//       } else {
//         navBar.style.background = navBarColor
//       }
//       lastScrollPosition = window.scrollY
//     },
//     { passive: true }
//   )
