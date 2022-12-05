const hamburger = document.getElementById('hamburger')
const linkList = document.getElementById('link-container')
const themeBtn = document.getElementById('toggle-btn')
const doc = document.documentElement

var theme = localStorage.getItem('stylo123theme')
const OSThemeDark = window.matchMedia('(prefers-color-scheme:dark').matches
const OSThemeLight = window.matchMedia('(prefers-color-scheme:light').matches

const diveBtn = document.getElementById('divebtn')

window.addEventListener('load', () => {
    if (theme === 'dark') {
        doc.classList.add('dark-theme')
        themeBtn.className = 'bi bi-moon'
    } else {
        doc.classList.remove('dark-theme')
        themeBtn.className = 'bi bi-sun'
    }
    if (theme == null) {
        if (OSThemeDark) {
            doc.classList.add('dark-theme')
        } else if (OSThemeLight) {
            doc.classList.remove('dark-theme')
        }
    }
})
themeBtn.addEventListener('click', () => {
    if (doc.classList.contains('dark-theme')) {
        doc.classList.remove('dark-theme')
        localStorage.setItem('stylo123theme', 'light')
    } else {
        doc.classList.add('dark-theme')
        localStorage.setItem('stylo123theme', 'dark')
    }

    if (themeBtn.className === 'bi bi-moon') {
        themeBtn.className = 'bi bi-sun'
    } else {
        themeBtn.className = 'bi bi-moon'
    }
})

// Hamburger Button Related Code
hamburger.addEventListener('click', () => {
    linkList.classList.toggle('hide-navbar')
})
