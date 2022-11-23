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
