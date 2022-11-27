const hamburger = document.getElementById('hamburger')
const linkList = document.getElementById('link-container')

// Hamburger Button Related Code
hamburger.addEventListener('click', () => {
    linkList.classList.toggle('display-navbar');
})

window.addEventListener('resize', () => {
    if (window.innerWidth > 800) {
        linkList.classList.remove('display-navbar')
    } else {
        linkList.classList.add('display-navbar')
    }
})
