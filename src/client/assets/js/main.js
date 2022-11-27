const hamburger = document.getElementById('hamburger')
const linkList = document.getElementById('link-container')

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