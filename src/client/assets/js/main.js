const hamburger = document.getElementById('hamburger')
const linkList = document.getElementById('link-container')

// Hamburger Button Related Code
hamburger.addEventListener('click', () => {
    linkList.classList.toggle('hide-navbar');
})

window.addEventListener('resize', () => {
    if (window.innerWidth > 800) {
        linkList.classList.remove('display-navbar')
    } else {
        linkList.classList.add('display-navbar')
    }
})

var db = new PouchDB('client-database', {adapter: 'memory'});
db.info().then((info) => {
    console.log(info);
})